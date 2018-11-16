var eid = document.location.href.substring(document.location.href.indexOf("uidEvent/") + 9)

newWindow()
          
function newWindow(){
    window.open('https://redash.motorsportreg.com/queries/233/source?p_Event%20ID=' + eid + '#297')
}
