(function () {
  "use strict";

  const LANG_KEY = "warikan-app-lang";

  const LANG_NAMES = {
    ja: "日本語",
    en: "English",
    zh: "中文",
    ms: "Melayu",
  };

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
    zh: {
      "app.title": "AA记账",
      "page.title": "🐷 AA记账",

      "start.createTitle": "🆕 创建新群组",
      "start.createHint": "设置AA分账的成员",
      "start.createBtn": "创建新群组 ▶",
      "start.joinTitle": "🔑 用邀请码加入",
      "start.joinHint": "请输入朋友分享的群组代码",
      "start.joinBtn": "加入",
      "start.joinError": "未找到该代码对应的群组",
      "start.helpBtn": "❓ 使用说明",

      "count.title": "👥 选择成员人数",
      "count.hint": "请清楚地说出数字（例如：\"4\"）",

      "names.title": "✏️ 输入成员姓名",
      "names.start": "开始 🚀",

      "nav.back": "◀ 返回",
      "nav.next": "下一步 ▶",

      "main.roomCodeLabel": "群组代码",
      "main.copyBtn": "📋 复制",
      "main.roomCodeHint": "将此代码分享给朋友，即可实时同步支付信息",
      "main.expenseTitle": "💰 记录支付",
      "main.payerLabel": "付款人",
      "main.amountLabel": "金额（日元）",
      "main.memoLabel": "备注（选填）",
      "main.participantsLabel": "分账对象（谁参与分账？）",
      "main.addExpenseBtn": "＋ 添加",
      "main.totalsTitle": "📊 各成员支付总额",
      "main.editNamesBtn": "✏️ 修改姓名",
      "main.addMemberBtn": "➕ 添加成员",
      "main.cancelBtn": "取消",
      "main.saveBtn": "💾 保存",
      "main.confirmAddBtn": "添加",
      "main.historyTitle": "🧾 支付记录",
      "main.noExpenses": "暂无支付记录",
      "main.resetBtn": "🔄 退出群组并重新开始",
      "main.settleBtn": "✨ 结算",
      "main.helpBtn": "❓ 使用说明",
      "main.settlementTitle": "🎉 结算方式",
      "main.noSettlement": "无需结算",

      "ph.code": "例如：AB12CD",
      "ph.amount": "例如：3000",
      "ph.memo": "例如：晚餐",
      "ph.newMember": "新成员姓名",
      "ph.name": "输入姓名",

      "mic.unsupported": "此浏览器不支持语音输入",
      "mic.voiceName": "语音输入姓名",
      "mic.voiceAmount": "语音输入金额",
      "mic.voiceContent": "语音输入备注",
      "mic.voiceCode": "语音输入代码",

      "copied": "✅ 已复制",
      "memberDefault": "成员",
      "error.connection": "连接失败，请检查网络后重试。",
      "error.createGroup": "创建群组失败，请检查网络后重试。",
      "error.enterName": "请输入姓名",
      "error.enterAmount": "请输入正确的金额",
      "error.selectParticipant": "请至少选择一位分账成员",
      "confirm.reset": "确定退出此群组并重新开始吗？（群组数据不会被删除）",
      "split.prefix": "分账:",
      "settlement.noExpenses": "暂无支出",
      "settlement.notNeeded": "无需结算",
      "speechLang": "zh-CN",

      "help.pageTitle": "使用说明 | 🐷 AA记账",
      "help.guideTitle": "❓ 使用说明",
      "help.guideDesc": "一款用于旅行或聚会中多次支付AA分账的应用。",
      "help.groupTitle": "🆕 创建或加入群组",
      "help.groupCreate": "<b>创建新群组</b><br>在首页选择「创建新群组」，输入成员人数和姓名后，系统会生成一个<b>6位群组代码</b>（例如：<code>AB12CD</code>）。",
      "help.groupJoin": "<b>受朋友邀请加入</b><br>在首页选择「用邀请码加入」，输入朋友分享的群组代码即可连接到该群组的数据。",
      "help.groupHint": "知道群组代码的人可以实时共享支付数据。当有人在手机上添加支付记录时，其他成员的界面会自动更新。",
      "help.membersTitle": "👥 人数与姓名",
      "help.membersDesc": "使用「＋」「−」按钮选择成员人数，然后在下一页逐一输入姓名。",
      "help.membersHint": "点击输入框旁的🎤按钮可进行语音输入。请清楚地说出数字（例如：\"4\"、\"3000\"）。",
      "help.recordTitle": "💰 记录支付",
      "help.recordDesc": "每次支付时，填写以下信息并点击「＋ 添加」：",
      "help.recordFields": "・<b>付款人</b>：选择实际付款的人<br>・<b>金额</b>：支付金额（日元）<br>・<b>备注</b>：可选备注（例如：晚餐）<br>・<b>分账对象</b>：通过标签选择谁参与分账",
      "help.recordHint": "默认情况下，所有成员都会被选中（全员均分）。如果某笔支付只需部分成员分摊，请点击标签进行切换。",
      "help.totalsTitle": "📊 各成员支付总额",
      "help.totalsDesc": "显示每位成员目前的支付总额。",
      "help.totalsEdit": "<b>✏️ 修改姓名</b>：修改并保存姓名后，历史记录也会显示新姓名。",
      "help.totalsAdd": "<b>➕ 添加成员</b>：如果旅途中有人加入，可以在此添加。新成员可参与之后的分账（不会追溯到之前的支付）。",
      "help.historyTitle": "🧾 支付记录",
      "help.historyDesc": "所有已记录的支付会显示在此列表中。仅部分成员参与分账的支付会标注「分账：○○・△△」。点击「×」按钮可删除记录。",
      "help.settleTitle": "✨ 结算",
      "help.settleDesc": "点击「结算」按钮，系统会根据每人的支付金额和分账参与情况，以<b>最少的转账次数</b>计算出谁应该向谁支付多少。",
      "help.leaveTitle": "🔄 退出群组并重新开始",
      "help.leaveDesc": "将此设备从群组断开，返回首页。",
      "help.leaveHint": "群组数据本身不会被删除，其他成员可以继续使用同一群组。当你想开始新的旅行时使用此功能。",
      "help.envTitle": "📱 支持的浏览器与注意事项",
      "help.envDesc": "・语音输入支持 <b>Google Chrome / Microsoft Edge</b>（PC、Android、iOS）。其他浏览器中麦克风按钮会自动禁用，但手动输入正常可用。<br>・任何知道群组代码的人都可以读写该群组的数据。请勿将代码分享给陌生人。<br>・记录和同步支付需要网络连接。",
      "help.backBtn": "◀ 返回应用",
    },
    ms: {
      "app.title": "Kongsi Bil",
      "page.title": "🐷 Kongsi Bil",

      "start.createTitle": "🆕 Buat Kumpulan Baru",
      "start.createHint": "Tetapkan ahli untuk kongsi bil",
      "start.createBtn": "Buat Kumpulan Baru ▶",
      "start.joinTitle": "🔑 Sertai dengan Kod Jemputan",
      "start.joinHint": "Masukkan kod kumpulan yang dikongsi oleh rakan anda",
      "start.joinBtn": "Sertai",
      "start.joinError": "Tiada kumpulan ditemui dengan kod tersebut",
      "start.helpBtn": "❓ Cara Guna",

      "count.title": "👥 Pilih Bilangan Ahli",
      "count.hint": "Sebut nombor dengan jelas (cth: \"4\")",

      "names.title": "✏️ Masukkan Nama Ahli",
      "names.start": "Mula 🚀",

      "nav.back": "◀ Kembali",
      "nav.next": "Seterusnya ▶",

      "main.roomCodeLabel": "Kod Kumpulan",
      "main.copyBtn": "📋 Salin",
      "main.roomCodeHint": "Kongsi kod ini dengan rakan untuk segerakkan pembayaran secara langsung",
      "main.expenseTitle": "💰 Rekod Pembayaran",
      "main.payerLabel": "Dibayar oleh",
      "main.amountLabel": "Jumlah (¥)",
      "main.memoLabel": "Keterangan (pilihan)",
      "main.participantsLabel": "Kongsi antara (siapa yang berkongsi?)",
      "main.addExpenseBtn": "＋ Tambah",
      "main.totalsTitle": "📊 Jumlah Dibayar Setiap Ahli",
      "main.editNamesBtn": "✏️ Tukar Nama",
      "main.addMemberBtn": "➕ Tambah Ahli",
      "main.cancelBtn": "Batal",
      "main.saveBtn": "💾 Simpan",
      "main.confirmAddBtn": "Tambah",
      "main.historyTitle": "🧾 Sejarah Pembayaran",
      "main.noExpenses": "Belum ada pembayaran direkodkan",
      "main.resetBtn": "🔄 Keluar Kumpulan & Mula Semula",
      "main.settleBtn": "✨ Selesaikan",
      "main.helpBtn": "❓ Cara Guna",
      "main.settlementTitle": "🎉 Penyelesaian",
      "main.noSettlement": "Tiada penyelesaian diperlukan",

      "ph.code": "cth: AB12CD",
      "ph.amount": "cth: 3000",
      "ph.memo": "cth: Makan malam",
      "ph.newMember": "Nama ahli baru",
      "ph.name": "Masukkan nama",

      "mic.unsupported": "Pelayar ini tidak menyokong input suara",
      "mic.voiceName": "Input suara untuk nama",
      "mic.voiceAmount": "Input suara untuk jumlah",
      "mic.voiceContent": "Input suara untuk keterangan",
      "mic.voiceCode": "Input suara untuk kod",

      "copied": "✅ Disalin!",
      "memberDefault": "Ahli",
      "error.connection": "Sambungan gagal. Sila semak rangkaian dan cuba lagi.",
      "error.createGroup": "Gagal membuat kumpulan. Sila semak rangkaian dan cuba lagi.",
      "error.enterName": "Sila masukkan nama",
      "error.enterAmount": "Sila masukkan jumlah yang sah",
      "error.selectParticipant": "Sila pilih sekurang-kurangnya seorang untuk berkongsi",
      "confirm.reset": "Keluar dari kumpulan ini dan mula semula? (Data kumpulan tidak akan dipadam)",
      "split.prefix": "Kongsi:",
      "settlement.noExpenses": "Tiada perbelanjaan",
      "settlement.notNeeded": "Tiada penyelesaian diperlukan",
      "speechLang": "ms-MY",

      "help.pageTitle": "Cara Guna | 🐷 Kongsi Bil",
      "help.guideTitle": "❓ Panduan Pengguna",
      "help.guideDesc": "Aplikasi untuk mengongsi pelbagai pembayaran antara rakan semasa perjalanan dan perjumpaan.",
      "help.groupTitle": "🆕 Buat atau Sertai Kumpulan",
      "help.groupCreate": "<b>Untuk membuat kumpulan baru</b><br>Pilih \"Buat Kumpulan Baru\" di skrin utama, masukkan bilangan ahli dan nama mereka, dan <b>kod kumpulan 6 aksara</b> (cth: <code>AB12CD</code>) akan dijana.",
      "help.groupJoin": "<b>Jika dijemput oleh rakan</b><br>Pilih \"Sertai dengan Kod Jemputan\" di skrin utama dan masukkan kod kumpulan yang diterima untuk menyambung ke data kumpulan.",
      "help.groupHint": "Semua orang yang tahu kod kumpulan boleh berkongsi data pembayaran secara langsung. Apabila seseorang menambah pembayaran di telefon mereka, ia akan muncul secara automatik di skrin semua orang.",
      "help.membersTitle": "👥 Bilangan & Nama",
      "help.membersDesc": "Gunakan butang \"+\" dan \"−\" untuk memilih bilangan ahli, kemudian masukkan nama setiap orang di skrin seterusnya.",
      "help.membersHint": "Ketik butang 🎤 di sebelah medan input untuk input suara. Sebut nombor dengan jelas untuk jumlah dan bilangan ahli (cth: \"4\", \"3000\").",
      "help.recordTitle": "💰 Merekod Pembayaran",
      "help.recordDesc": "Setiap kali pembayaran dibuat, isi maklumat berikut dan ketik \"＋ Tambah\":",
      "help.recordFields": "・<b>Dibayar oleh</b>: Pilih siapa yang membayar<br>・<b>Jumlah</b>: Jumlah yang dibayar (¥)<br>・<b>Keterangan</b>: Memo (pilihan, cth: Makan malam)<br>・<b>Kongsi antara</b>: Pilih siapa yang berkongsi perbelanjaan menggunakan cip",
      "help.recordHint": "Secara lalai, semua ahli dipilih untuk setiap pembayaran (semua berkongsi sama rata). Jika hanya sebahagian ahli perlu berkongsi pembayaran, ketik cip untuk menghidupkan/mematikannya.",
      "help.totalsTitle": "📊 Jumlah Dibayar Setiap Ahli",
      "help.totalsDesc": "Menunjukkan jumlah keseluruhan yang telah dibayar oleh setiap ahli.",
      "help.totalsEdit": "<b>✏️ Tukar Nama</b>: Edit dan simpan nama — sejarah akan dikemas kini dengan nama baru.",
      "help.totalsAdd": "<b>➕ Tambah Ahli</b>: Jika seseorang menyertai di pertengahan perjalanan, tambahkan mereka di sini. Ahli baru boleh disertakan dalam kongsi masa depan (mereka tidak akan ditambah secara retroaktif ke pembayaran lalu).",
      "help.historyTitle": "🧾 Sejarah Pembayaran",
      "help.historyDesc": "Semua pembayaran yang direkodkan disenaraikan di sini. Pembayaran yang dikongsi hanya oleh sebahagian ahli menunjukkan \"Kongsi: ○○ · △△\" dengan peserta. Gunakan butang \"×\" untuk memadam entri.",
      "help.settleTitle": "✨ Selesaikan",
      "help.settleDesc": "Ketik \"Selesaikan\" untuk melihat <b>siapa berhutang kepada siapa dan berapa banyak</b>, dikira untuk meminimumkan bilangan pemindahan berdasarkan pembayaran dan penyertaan kongsi setiap orang.",
      "help.leaveTitle": "🔄 Keluar Kumpulan & Mula Semula",
      "help.leaveDesc": "Memutuskan sambungan peranti ini dari kumpulan dan kembali ke skrin utama.",
      "help.leaveHint": "Data kumpulan itu sendiri tidak dipadam. Ahli lain boleh terus menggunakan kumpulan yang sama. Gunakan ini apabila anda ingin memulakan perjalanan baru.",
      "help.envTitle": "📱 Pelayar yang Disokong & Nota",
      "help.envDesc": "・Input suara berfungsi pada <b>Google Chrome / Microsoft Edge</b> (PC, Android, iOS). Pada pelayar lain, butang mikrofon dilumpuhkan secara automatik, tetapi input manual berfungsi seperti biasa.<br>・Sesiapa yang mempunyai kod kumpulan boleh membaca dan menulis data kumpulan. Jangan kongsi kod dengan orang yang tidak dikenali.<br>・Merekod dan menyegerakkan pembayaran memerlukan sambungan internet.",
      "help.backBtn": "◀ Kembali ke Aplikasi",
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
    if (langSelect) {
      langSelect.value = currentLang;
      Object.keys(LANG_NAMES).forEach(function (code) {
        var opt = langSelect.querySelector('option[value="' + code + '"]');
        if (opt) opt.textContent = LANG_NAMES[code];
      });
    }
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
