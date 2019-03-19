function time(zone) {

    switch(zone) {
        case 'est':
            today = new Date().toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit', timeZone: "America/New_York"})
            return today
          break;
        case 'cst':
            today = new Date().toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit', timeZone: "America/Chicago"})
            return today
          break;
        case 'pst':
            today = new Date().toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit', timeZone: "America/Los_Angeles"})
            return today
        case 'mst':
            today = new Date().toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit', timeZone: "America/Denver"})
            return today
        case 'jst':
            tomorrow = new Date()
            today = new Date().toLocaleString("en-US", {hour: '2-digit', minute:'2-digit',timeZone: 'Asia/Tokyo'})
            day = tomorrow.getDay()
            var textDay
            console.log(textDay)
            switch(day){
                case 0:
                    textDay = "Mon"
                break;
                case 1:
                    textDay = "Tues"
                break;
                case 2:
                    textDay = "Wed"
                break;
                case 3:
                    textDay = "Thurs"
                break;
                case 4:
                    textDay = "Fri"
                break;
                case 5:
                    textDay = "Sat"
                break;
                case 6:
                    textDay = "Sun"
                break;
                default:
                    return "error"
            }

            console.log(textDay)
               

            return `${textDay} ${today}`
        default:
            return "error"

      }
}


// document.getElementById("regCheck").onclick = regCheck;
document.getElementById("cst").textContent = time('cst');
document.getElementById("pst").textContent = time('pst');
document.getElementById("japan").textContent = time('jst');
document.getElementById("mst").textContent = time('mst');
document.getElementById("est").textContent = time('est');