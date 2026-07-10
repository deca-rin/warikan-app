if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // 登録に失敗してもブラウザ版として通常通り動作する
    });
  });
}
