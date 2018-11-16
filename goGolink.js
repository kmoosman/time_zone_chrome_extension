var uid = ''

var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "chrome_extension_page_broadcast")) {
    console.log("Content script received: " , event.data.PAGE);
    uid = event.data.PAGE.uidClub
    port.postMessage(event.data.PAGE.uidClub);
    !function (a) {var b = document.createElement("textarea"), c = document.getSelection();b.textContent = a, document.body.appendChild(b), c.removeAllRanges(), b.select(), document.execCommand("copy"), c.removeAllRanges(), document.body.removeChild(b)}(window.location.href + '/gogoorg/' + uid)()
    
  }
}, false);

!function injectScript () {
  const script = document.createElement("script");
  script.text = `window.postMessage({ type:'chrome_extension_page_broadcast',  PAGE:window.PAGE || {}});`;
  document.documentElement.appendChild(script);
}()



