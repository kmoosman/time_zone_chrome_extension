function regCheck(){
    chrome.tabs.executeScript(null, {file: "regCheck.js"});
    };

function checkNesting(){
    chrome.tabs.executeScript(null, {file: "regNesting.js"});
    };

function goGoLink(){
    chrome.tabs.executeScript(null, {file: "goGolink.js"});
    window.close()
    
    };

document.getElementById("regCheck").onclick = regCheck;
document.getElementById("regNesting").onclick = checkNesting;
document.getElementById("goGoLink").onclick = goGoLink;
