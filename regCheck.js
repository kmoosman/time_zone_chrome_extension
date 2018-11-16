var eid = document.location.href.substring(document.location.href.indexOf("uidEvent/") + 9)

newWindow()
      
function newWindow(){
    window.open('https://redash.motorsportreg.com/queries/180?p_uidEvent=' + eid + '&p_uidevent=' + eid + '#232')
}
