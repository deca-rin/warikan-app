(function () {
  "use strict";

  // ---- 状態 ----
  let members = []; // [{ name }]
  let expenses = []; // [{ payerIndex, amount, memo, participants: [memberIndex, ...] }]

  // ---- 永続化（アプリを閉じても履歴を保持） ----
  const STORAGE_KEY = "warikan-app-state";

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ members, expenses }));
  }

  function clearState() {
    localStorage.removeItem(STORAGE_KEY);
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (!data || !Array.isArray(data.members) || data.members.length === 0) return null;
      const allIndices = data.members.map((_, i) => i);
      const migratedExpenses = (data.expenses || []).map((e) => ({
        ...e,
        participants: Array.isArray(e.participants) && e.participants.length > 0 ? e.participants : allIndices,
      }));
      return { members: data.members, expenses: migratedExpenses };
    } catch (e) {
      return null;
    }
  }

  // ---- 画面遷移 ----
  function showScreen(id) {
    document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }

  // ---- 音声入力 ----
  const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;

  function toHalfWidthDigits(str) {
    return str.replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0));
  }

  function extractNumber(str) {
    const normalized = toHalfWidthDigits(str).replace(/,/g, "");
    const match = normalized.match(/\d+/);
    return match ? match[0] : null;
  }

  function setupMicButton(button) {
    if (!SpeechRecognitionCtor) {
      button.disabled = true;
      button.title = "このブラウザは音声入力に対応していません";
      return;
    }

    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const target = document.getElementById(targetId);
      const numeric = button.getAttribute("data-numeric") === "true";

      const recognition = new SpeechRecognitionCtor();
      recognition.lang = "ja-JP";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      button.classList.add("recording");

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim();
        if (numeric) {
          const num = extractNumber(transcript);
          if (num !== null) {
            target.value = num;
            target.dispatchEvent(new Event("change"));
          }
        } else {
          target.value = transcript.replace(/[。、]+$/g, "");
          target.dispatchEvent(new Event("change"));
        }
      };

      recognition.onerror = () => {
        button.classList.remove("recording");
      };

      recognition.onend = () => {
        button.classList.remove("recording");
      };

      recognition.start();
    });
  }

  document.querySelectorAll(".mic-btn").forEach(setupMicButton);

  // ---- 画面1: 人数選択 ----
  const memberCountInput = document.getElementById("member-count");

  document.getElementById("count-minus").addEventListener("click", () => {
    const v = Math.max(2, parseInt(memberCountInput.value || "2", 10) - 1);
    memberCountInput.value = v;
  });

  document.getElementById("count-plus").addEventListener("click", () => {
    const v = Math.min(20, parseInt(memberCountInput.value || "2", 10) + 1);
    memberCountInput.value = v;
  });

  document.getElementById("to-names").addEventListener("click", () => {
    let count = parseInt(memberCountInput.value, 10);
    if (!count || count < 2) count = 2;
    if (count > 20) count = 20;
    memberCountInput.value = count;
    buildNameInputs(count);
    showScreen("screen-names");
  });

  // ---- 画面2: 名前入力 ----
  const nameInputsContainer = document.getElementById("name-inputs");

  function buildNameInputs(count) {
    nameInputsContainer.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const row = document.createElement("div");
      row.className = "name-input-row";

      const label = document.createElement("label");
      label.textContent = `メンバー${i + 1}`;

      const wrap = document.createElement("div");
      wrap.className = "input-with-mic";

      const input = document.createElement("input");
      input.type = "text";
      input.id = `member-name-${i}`;
      input.placeholder = `名前を入力`;

      const micBtn = document.createElement("button");
      micBtn.type = "button";
      micBtn.className = "mic-btn";
      micBtn.setAttribute("data-target", input.id);
      micBtn.title = "音声で名前を入力";
      micBtn.textContent = "🎤";

      wrap.appendChild(input);
      wrap.appendChild(micBtn);
      row.appendChild(label);
      row.appendChild(wrap);
      nameInputsContainer.appendChild(row);

      setupMicButton(micBtn);
    }
  }

  document.getElementById("back-to-count").addEventListener("click", () => {
    showScreen("screen-count");
  });

  document.getElementById("to-main").addEventListener("click", () => {
    const count = parseInt(memberCountInput.value, 10);
    const names = [];
    for (let i = 0; i < count; i++) {
      const input = document.getElementById(`member-name-${i}`);
      const name = input.value.trim() || `メンバー${i + 1}`;
      names.push(name);
    }
    members = names.map((name) => ({ name }));
    expenses = [];
    saveState();
    initMainScreen();
    showScreen("screen-main");
  });

  // ---- 画面3: メイン ----
  const payerSelect = document.getElementById("payer-select");
  const amountInput = document.getElementById("amount-input");
  const memoInput = document.getElementById("memo-input");
  const participantsListEl = document.getElementById("participants-list");
  const totalsList = document.getElementById("totals-list");
  const expenseList = document.getElementById("expense-list");
  const noExpenseMsg = document.getElementById("no-expense-msg");
  const settlementResult = document.getElementById("settlement-result");
  const settlementList = document.getElementById("settlement-list");
  const noSettlementMsg = document.getElementById("no-settlement-msg");
  const editNamesBtn = document.getElementById("edit-names-btn");
  const editNamesActions = document.getElementById("edit-names-actions");
  const cancelNamesBtn = document.getElementById("cancel-names-btn");
  const saveNamesBtn = document.getElementById("save-names-btn");
  const addMemberBtn = document.getElementById("add-member-btn");
  const addMemberForm = document.getElementById("add-member-form");
  const newMemberNameInput = document.getElementById("new-member-name");
  const cancelAddMemberBtn = document.getElementById("cancel-add-member-btn");
  const confirmAddMemberBtn = document.getElementById("confirm-add-member-btn");
  let editingNames = false;
  let addingMember = false;

  function refreshPayerSelectLabels() {
    members.forEach((m, i) => {
      const opt = payerSelect.querySelector(`option[value="${i}"]`);
      if (opt) opt.textContent = m.name;
    });
  }

  function rebuildPayerSelect() {
    const previousValue = payerSelect.value;
    payerSelect.innerHTML = "";
    members.forEach((m, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = m.name;
      payerSelect.appendChild(opt);
    });
    if (previousValue !== "" && members[previousValue]) payerSelect.value = previousValue;
  }

  function renderParticipantCheckboxes() {
    participantsListEl.innerHTML = "";
    members.forEach((m, i) => {
      const label = document.createElement("label");
      label.className = "participant-chip";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = i;
      checkbox.checked = true;

      const span = document.createElement("span");
      span.textContent = m.name;

      label.appendChild(checkbox);
      label.appendChild(span);
      participantsListEl.appendChild(label);
    });
  }

  function initMainScreen() {
    rebuildPayerSelect();
    amountInput.value = "";
    memoInput.value = "";
    settlementResult.hidden = true;
    editingNames = false;
    editNamesActions.hidden = true;
    addingMember = false;
    addMemberForm.hidden = true;
    renderParticipantCheckboxes();
    renderTotals();
    renderExpenses();
  }

  function renderTotals() {
    const totals = members.map(() => 0);
    expenses.forEach((e) => {
      totals[e.payerIndex] += e.amount;
    });
    totalsList.innerHTML = "";

    if (editingNames) {
      members.forEach((m, i) => {
        const li = document.createElement("li");
        li.className = "totals-edit-row";

        const wrap = document.createElement("div");
        wrap.className = "input-with-mic";

        const input = document.createElement("input");
        input.type = "text";
        input.id = `edit-name-${i}`;
        input.value = m.name;

        const micBtn = document.createElement("button");
        micBtn.type = "button";
        micBtn.className = "mic-btn";
        micBtn.setAttribute("data-target", input.id);
        micBtn.title = "音声で名前を入力";
        micBtn.textContent = "🎤";

        wrap.appendChild(input);
        wrap.appendChild(micBtn);
        li.appendChild(wrap);
        totalsList.appendChild(li);
        setupMicButton(micBtn);
      });
      return totals;
    }

    members.forEach((m, i) => {
      const li = document.createElement("li");
      const nameSpan = document.createElement("span");
      nameSpan.textContent = m.name;
      const amountSpan = document.createElement("span");
      amountSpan.className = "amount";
      amountSpan.textContent = `¥${totals[i].toLocaleString()}`;
      li.appendChild(nameSpan);
      li.appendChild(amountSpan);
      totalsList.appendChild(li);
    });
    return totals;
  }

  function renderExpenses() {
    expenseList.innerHTML = "";
    noExpenseMsg.style.display = expenses.length === 0 ? "block" : "none";

    expenses.forEach((e, idx) => {
      const li = document.createElement("li");

      const info = document.createElement("div");
      info.className = "expense-info";
      const payerSpan = document.createElement("span");
      payerSpan.className = "expense-payer";
      payerSpan.textContent = members[e.payerIndex].name;
      info.appendChild(payerSpan);
      if (e.memo) {
        const memoSpan = document.createElement("span");
        memoSpan.className = "expense-memo";
        memoSpan.textContent = e.memo;
        info.appendChild(memoSpan);
      }
      if (e.participants.length < members.length) {
        const participantsSpan = document.createElement("span");
        participantsSpan.className = "expense-participants";
        const names = e.participants.map((i) => (members[i] ? members[i].name : "")).filter(Boolean);
        participantsSpan.textContent = `割り勘: ${names.join("・")}`;
        info.appendChild(participantsSpan);
      }

      const amountSpan = document.createElement("span");
      amountSpan.className = "expense-amount";
      amountSpan.textContent = `¥${e.amount.toLocaleString()}`;

      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "delete-btn";
      delBtn.textContent = "×";
      delBtn.addEventListener("click", () => {
        expenses.splice(idx, 1);
        saveState();
        renderTotals();
        renderExpenses();
        settlementResult.hidden = true;
      });

      li.appendChild(info);
      li.appendChild(amountSpan);
      li.appendChild(delBtn);
      expenseList.appendChild(li);
    });
  }

  editNamesBtn.addEventListener("click", () => {
    addingMember = false;
    addMemberForm.hidden = true;
    editingNames = !editingNames;
    editNamesActions.hidden = !editingNames;
    renderTotals();
  });

  cancelNamesBtn.addEventListener("click", () => {
    editingNames = false;
    editNamesActions.hidden = true;
    renderTotals();
  });

  saveNamesBtn.addEventListener("click", () => {
    members.forEach((m, i) => {
      const input = document.getElementById(`edit-name-${i}`);
      const newName = input.value.trim();
      if (newName) m.name = newName;
    });
    saveState();
    editingNames = false;
    editNamesActions.hidden = true;
    refreshPayerSelectLabels();
    renderTotals();
    renderExpenses();
    settlementResult.hidden = true;
  });

  addMemberBtn.addEventListener("click", () => {
    editingNames = false;
    editNamesActions.hidden = true;
    addingMember = !addingMember;
    addMemberForm.hidden = !addingMember;
    newMemberNameInput.value = "";
    renderTotals();
  });

  cancelAddMemberBtn.addEventListener("click", () => {
    addingMember = false;
    addMemberForm.hidden = true;
  });

  confirmAddMemberBtn.addEventListener("click", () => {
    const name = newMemberNameInput.value.trim();
    if (!name) {
      alert("名前を入力してください");
      return;
    }
    members.push({ name });
    saveState();
    addingMember = false;
    addMemberForm.hidden = true;
    rebuildPayerSelect();
    renderParticipantCheckboxes();
    renderTotals();
    renderExpenses();
  });

  document.getElementById("add-expense").addEventListener("click", () => {
    const payerIndex = parseInt(payerSelect.value, 10);
    const amount = parseInt(amountInput.value, 10);
    const memo = memoInput.value.trim();
    const participants = Array.from(participantsListEl.querySelectorAll('input[type="checkbox"]:checked')).map((cb) =>
      parseInt(cb.value, 10)
    );

    if (!amount || amount <= 0) {
      alert("金額を正しく入力してください");
      return;
    }
    if (participants.length === 0) {
      alert("割り勘対象を1人以上選択してください");
      return;
    }

    expenses.push({ payerIndex, amount, memo, participants });
    amountInput.value = "";
    memoInput.value = "";
    renderParticipantCheckboxes();
    saveState();
    renderTotals();
    renderExpenses();
    settlementResult.hidden = true;
  });

  document.getElementById("reset-app").addEventListener("click", () => {
    if (!confirm("最初からやり直しますか？記録した支払いは削除されます。")) return;
    members = [];
    expenses = [];
    clearState();
    memberCountInput.value = 2;
    settlementResult.hidden = true;
    showScreen("screen-count");
  });

  // ---- 割り勘対象に応じた各自の公平負担額を計算 ----
  function computeFairShares() {
    const shares = members.map(() => 0);
    expenses.forEach((e) => {
      const participants = e.participants && e.participants.length > 0 ? e.participants : members.map((_, i) => i);
      const base = Math.floor(e.amount / participants.length);
      const remainder = e.amount % participants.length; // 先頭 remainder 人が +1円 負担して端数調整
      participants.forEach((memberIndex, pos) => {
        shares[memberIndex] += base + (pos < remainder ? 1 : 0);
      });
    });
    return shares;
  }

  // ---- 清算計算（できるだけ少ない送金回数になる貪欲法） ----
  document.getElementById("settle-btn").addEventListener("click", () => {
    const totals = renderTotals();
    const total = totals.reduce((a, b) => a + b, 0);

    if (total === 0) {
      settlementResult.hidden = false;
      settlementList.innerHTML = "";
      noSettlementMsg.hidden = false;
      noSettlementMsg.textContent = "支出がありません";
      return;
    }

    const fairShares = computeFairShares();

    const balances = members.map((m, i) => {
      return { index: i, name: m.name, balance: totals[i] - fairShares[i] };
    });

    const creditors = balances.filter((b) => b.balance > 0).map((b) => ({ ...b }));
    const debtors = balances.filter((b) => b.balance < 0).map((b) => ({ ...b, balance: -b.balance }));

    creditors.sort((a, b) => b.balance - a.balance);
    debtors.sort((a, b) => b.balance - a.balance);

    const transactions = [];
    let ci = 0;
    let di = 0;
    while (ci < creditors.length && di < debtors.length) {
      const c = creditors[ci];
      const d = debtors[di];
      const amount = Math.min(c.balance, d.balance);

      if (amount > 0) {
        transactions.push({ from: d.name, to: c.name, amount });
      }

      c.balance -= amount;
      d.balance -= amount;

      if (c.balance === 0) ci++;
      if (d.balance === 0) di++;
    }

    settlementResult.hidden = false;
    settlementList.innerHTML = "";

    if (transactions.length === 0) {
      noSettlementMsg.hidden = false;
      noSettlementMsg.textContent = "清算の必要はありません";
    } else {
      noSettlementMsg.hidden = true;
      transactions.forEach((t) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${t.from}</span><span class="arrow">→</span><span>${t.to}</span><span class="settle-amount">¥${t.amount.toLocaleString()}</span>`;
        settlementList.appendChild(li);
      });
    }

    settlementResult.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // ---- 起動時に前回の履歴を復元 ----
  const saved = loadState();
  if (saved) {
    members = saved.members;
    expenses = saved.expenses;
    memberCountInput.value = members.length;
    initMainScreen();
    showScreen("screen-main");
  }
})();
