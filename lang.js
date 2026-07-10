(function () {
  "use strict";

  const LANG_KEY = "warikan-app-lang";

  const translations = {
    ja: {
      "app.title": "わりかんアプリ",
      "page.title": "🐷 わりかんアプリ",

      "start.createTitle": "🆕 新しいグループを作る",
      "start.createHint": "これから割り勘するメンバーを設定します",
      "start.createBtn": "新しいグループを作る ▶",
      "start.joinTitle": "🔑 招待コードで参加する",
      "start.joinHint": "友達から教えてもらったグループコードを入力してください",
      "start.joinBtn": "参加する",
      "start.joinError": "そのコードのグループが見つかりませんでした",
      "start.helpBtn": "❓ 使い方",

      "count.title": "👥 メンバー人数を選択",
      "count.hint": "人数を数字で発音してください（例：「4」）",

      "names.title": "✏️ メンバーの名前を入力",
      "names.start": "はじめる 🚀",

      "nav.back": "◀ 戻る",
      "nav.next": "次へ ▶",

      "main.roomCodeLabel": "グループコード",
      "main.copyBtn": "📋 コピー",
      "main.roomCodeHint": "このコードを友達に伝えると、みんなの支払いがリアルタイムで共有されます",
      "main.expenseTitle": "💰 支払いを記録",
      "main.payerLabel": "支払った人",
      "main.amountLabel": "金額（円）",
      "main.memoLabel": "内容（任意）",
      "main.participantsLabel": "割り勘対象（誰で分ける？）",
      "main.addExpenseBtn": "＋ 追加する",
      "main.totalsTitle": "📊 メンバー各自の支払合計",
      "main.editNamesBtn": "✏️ メンバー名変更",
      "main.addMemberBtn": "➕ メンバー追加",
      "main.cancelBtn": "キャンセル",
      "main.saveBtn": "💾 保存",
      "main.confirmAddBtn": "追加する",
      "main.historyTitle": "🧾 支払い履歴",
      "main.noExpenses": "まだ支払いが記録されていません",
      "main.resetBtn": "🔄 グループを抜けて最初から",
      "main.settleBtn": "✨ 清算する",
      "main.helpBtn": "❓ 使い方",
      "main.settlementTitle": "🎉 清算方法",
      "main.noSettlement": "清算の必要はありません",

      "ph.code": "例：AB12CD",
      "ph.amount": "例：3000",
      "ph.memo": "例：夕食代",
      "ph.newMember": "新しいメンバーの名前",
      "ph.name": "名前を入力",

      "mic.unsupported": "このブラウザは音声入力に対応していません",
      "mic.voiceName": "音声で名前を入力",
      "mic.voiceAmount": "音声で金額を入力",
      "mic.voiceContent": "音声で内容を入力",
      "mic.voiceCode": "音声でコードを入力",

      "copied": "✅ コピーしました",
      "memberDefault": "メンバー",
      "error.connection": "接続に失敗しました。通信状況を確認してもう一度お試しください。",
      "error.createGroup": "グループの作成に失敗しました。通信状況を確認してもう一度お試しください。",
      "error.enterName": "名前を入力してください",
      "error.enterAmount": "金額を正しく入力してください",
      "error.selectParticipant": "割り勘対象を1人以上選択してください",
      "confirm.reset": "グループから抜けて最初からやり直しますか？（グループのデータ自体は削除されません）",
      "split.prefix": "割り勘:",
      "settlement.noExpenses": "支出がありません",
      "settlement.notNeeded": "清算の必要はありません",
      "speechLang": "ja-JP",

      "help.pageTitle": "使い方 | 🐷 わりかんアプリ",
      "help.guideTitle": "❓ 使い方ガイド",
      "help.guideDesc": "旅行や飲み会など、複数回の支払いをみんなで割り勘するためのアプリです。",
      "help.groupTitle": "🆕 グループを作る・参加する",
      "help.groupCreate": "<b>新しいグループを作る場合</b><br>トップ画面で「新しいグループを作る」を選び、人数とメンバーの名前を入力すると、<b>6桁のグループコード</b>（例：<code>AB12CD</code>）が発行されます。",
      "help.groupJoin": "<b>友達に招待されている場合</b><br>トップ画面で「招待コードで参加する」を選び、教えてもらったグループコードを入力すると、そのグループのデータにそのまま接続できます。",
      "help.groupHint": "グループコードを知っている人同士は、同じ支払いデータをリアルタイムで共有できます。誰かがスマホで支払いを追加すると、他のメンバーの画面にも自動で反映されます。",
      "help.membersTitle": "👥 人数・名前の入力",
      "help.membersDesc": "「＋」「−」ボタンでメンバー人数を選び、次の画面で一人ずつ名前を入力します。",
      "help.membersHint": "入力欄の🎤ボタンを押すと音声入力ができます。人数や金額は数字をはっきり発音してください（例：「4」「3000」）。",
      "help.recordTitle": "💰 支払いを記録する",
      "help.recordDesc": "支払いが発生するたびに、以下を入力して「＋ 追加する」を押します。",
      "help.recordFields": "・<b>支払った人</b>：実際にお金を払った人を選択<br>・<b>金額</b>：支払った金額（円）<br>・<b>内容</b>：メモ（任意、例：夕食代）<br>・<b>割り勘対象</b>：誰でその支払いを分けるかをチップで選択",
      "help.recordHint": "割り勘対象は初期状態で全員が選択されています（標準は全員割り勘）。一部のメンバーだけで割り勘したい支払いがあれば、チップをタップしてオン/オフを切り替えてください。",
      "help.totalsTitle": "📊 メンバー各自の支払合計",
      "help.totalsDesc": "これまでに各メンバーが支払った金額の合計が表示されます。",
      "help.totalsEdit": "<b>✏️ メンバー名変更</b>：名前を入力し直して保存すると、これまでの履歴も新しい名前で表示されます。",
      "help.totalsAdd": "<b>➕ メンバー追加</b>：旅行の途中から参加するメンバーがいる場合、ここで追加できます。追加したメンバーは、それ以降の支払いから割り勘対象に選べるようになります（過去の支払いには遡って含まれません）。",
      "help.historyTitle": "🧾 支払い履歴",
      "help.historyDesc": "記録した支払いが一覧で表示されます。一部のメンバーだけで割り勘した支払いには「割り勘：〇〇・△△」のように対象メンバーが表示されます。「×」ボタンで削除できます。",
      "help.settleTitle": "✨ 清算する",
      "help.settleDesc": "「清算する」ボタンを押すと、それぞれの支払い実績と割り勘対象をもとに、<b>誰が誰にいくら払えばよいか</b>が、送金の回数がなるべく少なくなる形で表示されます。",
      "help.leaveTitle": "🔄 グループを抜けて最初から",
      "help.leaveDesc": "この端末をグループから切り離し、トップ画面に戻ります。",
      "help.leaveHint": "グループ自体のデータは削除されません。他のメンバーはそのまま同じグループを使い続けられます。新しく別の旅行を始めたいときにお使いください。",
      "help.envTitle": "📱 対応環境・注意事項",
      "help.envDesc": "・音声入力は<b>Google Chrome / Microsoft Edge</b>（PC・Android・iOS）で利用できます。それ以外のブラウザではマイクボタンが自動的に無効になりますが、手入力で通常通り使えます。<br>・グループコードを知っている人は誰でもそのグループのデータを読み書きできます。パスワードや個人情報の代わりにはならないため、知らない人にコードを教えないようにしてください。<br>・通信環境がない場所では、支払いの記録・同期ができません。",
      "help.backBtn": "◀ アプリに戻る",
    },
    en: {
      "app.title": "Split Bill App",
      "page.title": "🐷 Split Bill App",

      "start.createTitle": "🆕 Create a New Group",
      "start.createHint": "Set up members for bill splitting",
      "start.createBtn": "Create New Group ▶",
      "start.joinTitle": "🔑 Join with Invite Code",
      "start.joinHint": "Enter the group code shared by your friend",
      "start.joinBtn": "Join",
      "start.joinError": "No group found with that code",
      "start.helpBtn": "❓ How to Use",

      "count.title": "👥 Select Number of Members",
      "count.hint": "Say the number clearly (e.g., \"4\")",

      "names.title": "✏️ Enter Member Names",
      "names.start": "Start 🚀",

      "nav.back": "◀ Back",
      "nav.next": "Next ▶",

      "main.roomCodeLabel": "Group Code",
      "main.copyBtn": "📋 Copy",
      "main.roomCodeHint": "Share this code with friends to sync payments in real time",
      "main.expenseTitle": "💰 Record a Payment",
      "main.payerLabel": "Paid by",
      "main.amountLabel": "Amount (¥)",
      "main.memoLabel": "Description (optional)",
      "main.participantsLabel": "Split among (who shares this?)",
      "main.addExpenseBtn": "＋ Add",
      "main.totalsTitle": "📊 Total Paid by Each Member",
      "main.editNamesBtn": "✏️ Edit Names",
      "main.addMemberBtn": "➕ Add Member",
      "main.cancelBtn": "Cancel",
      "main.saveBtn": "💾 Save",
      "main.confirmAddBtn": "Add",
      "main.historyTitle": "🧾 Payment History",
      "main.noExpenses": "No payments recorded yet",
      "main.resetBtn": "🔄 Leave Group & Start Over",
      "main.settleBtn": "✨ Settle Up",
      "main.helpBtn": "❓ How to Use",
      "main.settlementTitle": "🎉 Settlement",
      "main.noSettlement": "No settlement needed",

      "ph.code": "e.g., AB12CD",
      "ph.amount": "e.g., 3000",
      "ph.memo": "e.g., Dinner",
      "ph.newMember": "New member name",
      "ph.name": "Enter name",

      "mic.unsupported": "Voice input is not supported in this browser",
      "mic.voiceName": "Voice input for name",
      "mic.voiceAmount": "Voice input for amount",
      "mic.voiceContent": "Voice input for description",
      "mic.voiceCode": "Voice input for code",

      "copied": "✅ Copied!",
      "memberDefault": "Member",
      "error.connection": "Connection failed. Please check your network and try again.",
      "error.createGroup": "Failed to create group. Please check your network and try again.",
      "error.enterName": "Please enter a name",
      "error.enterAmount": "Please enter a valid amount",
      "error.selectParticipant": "Please select at least one person to split with",
      "confirm.reset": "Leave this group and start over? (Group data will not be deleted)",
      "split.prefix": "Split:",
      "settlement.noExpenses": "No expenses",
      "settlement.notNeeded": "No settlement needed",
      "speechLang": "en-US",

      "help.pageTitle": "How to Use | 🐷 Split Bill App",
      "help.guideTitle": "❓ Usage Guide",
      "help.guideDesc": "An app for splitting multiple payments among friends during trips and gatherings.",
      "help.groupTitle": "🆕 Create or Join a Group",
      "help.groupCreate": "<b>To create a new group</b><br>Select \"Create New Group\" on the top screen, enter the number of members and their names, and a <b>6-character group code</b> (e.g., <code>AB12CD</code>) will be generated.",
      "help.groupJoin": "<b>If invited by a friend</b><br>Select \"Join with Invite Code\" on the top screen and enter the group code you received to connect to the group's data.",
      "help.groupHint": "Everyone who knows the group code can share payment data in real time. When someone adds a payment on their phone, it automatically appears on everyone else's screen.",
      "help.membersTitle": "👥 Number & Names",
      "help.membersDesc": "Use the \"+\" and \"−\" buttons to select the number of members, then enter each person's name on the next screen.",
      "help.membersHint": "Tap the 🎤 button next to input fields for voice input. Speak numbers clearly for amounts and member counts (e.g., \"4\", \"3000\").",
      "help.recordTitle": "💰 Recording Payments",
      "help.recordDesc": "Each time a payment is made, fill in the following and tap \"＋ Add\":",
      "help.recordFields": "・<b>Paid by</b>: Select who actually paid<br>・<b>Amount</b>: The amount paid (¥)<br>・<b>Description</b>: A memo (optional, e.g., Dinner)<br>・<b>Split among</b>: Select who shares this expense using the chips",
      "help.recordHint": "By default, all members are selected for each payment (everyone splits equally). If only some members should share a payment, tap the chips to toggle them on/off.",
      "help.totalsTitle": "📊 Total Paid by Each Member",
      "help.totalsDesc": "Shows the total amount each member has paid so far.",
      "help.totalsEdit": "<b>✏️ Edit Names</b>: Edit and save names — the history will update to show the new names.",
      "help.totalsAdd": "<b>➕ Add Member</b>: If someone joins mid-trip, add them here. New members can be included in future splits (they won't be retroactively added to past payments).",
      "help.historyTitle": "🧾 Payment History",
      "help.historyDesc": "All recorded payments are listed here. Payments split among only some members show \"Split: ○○ · △△\" with the participants. Use the \"×\" button to delete entries.",
      "help.settleTitle": "✨ Settle Up",
      "help.settleDesc": "Tap \"Settle Up\" to see <b>who owes whom and how much</b>, calculated to minimize the number of transfers based on each person's payments and split participation.",
      "help.leaveTitle": "🔄 Leave Group & Start Over",
      "help.leaveDesc": "Disconnects this device from the group and returns to the top screen.",
      "help.leaveHint": "The group data itself is not deleted. Other members can continue using the same group. Use this when you want to start a new trip.",
      "help.envTitle": "📱 Supported Browsers & Notes",
      "help.envDesc": "・Voice input works on <b>Google Chrome / Microsoft Edge</b> (PC, Android, iOS). On other browsers, the mic button is automatically disabled, but manual input works normally.<br>・Anyone with the group code can read and write the group's data. Do not share the code with strangers as it is not a substitute for passwords or personal information.<br>・Payment recording and syncing require an internet connection.",
      "help.backBtn": "◀ Back to App",
    },
  };

  let currentLang = localStorage.getItem(LANG_KEY) || "ja";

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.ja[key] || key;
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
    applyTranslations();
    document.dispatchEvent(new CustomEvent("langchange"));
  }

  function getLang() {
    return currentLang;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      el.title = t(el.dataset.i18nTitle);
    });
    var titleKey = document.documentElement.dataset.i18nTitle;
    if (titleKey) document.title = t(titleKey);
    var langSelect = document.getElementById("lang-select");
    if (langSelect) langSelect.value = currentLang;
  }

  function init() {
    document.documentElement.lang = currentLang;
    applyTranslations();
    var select = document.getElementById("lang-select");
    if (select) {
      select.value = currentLang;
      select.addEventListener("change", function (e) {
        setLang(e.target.value);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.WarikanLang = { t: t, setLang: setLang, getLang: getLang, applyTranslations: applyTranslations };
})();
