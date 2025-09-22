export  function loadLineSDK(liffId) {
  return new Promise((resolve, reject) => {
    if (window.liff) {
      resolve(window.liff);
      return;
    }
    const script = document.createElement('script');
    script.src = "https://static.line-scdn.net/liff/edge/versions/2.22.3/sdk.js";
    script.onload = () => {
      window.liff.init({ liffId })
        .then(() => {
			console.log('liff init--')
          resolve(window.liff);
        })
        .catch((err) => {
          reject('LIFF Initialization failed: ' + err);
        });
    };
    script.onerror = () => reject('Failed to load the LIFF SDK script');
    document.head.appendChild(script);
  });
}