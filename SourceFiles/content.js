
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.method == "changePage") {

      var timeregex = new RegExp("([0-9]+:[0-9]+)(pm|am)")
      var dateregex = new RegExp("\>[a-zA-Z]+ ([1-9]+[ a-zA-Z0-9]+)\<")
      var match_reg = new RegExp("[1-2]+[pt]*\"\>([a-zA-Z0-9' ()-]+)\</div")
      var location_reg = new RegExp("\n\<b>([A-Za-z0-9 -]+)\<")
      var referees_name = new RegExp("\\t([a-zA-Z -']+)\\t", "g")
      var discipline_reg = new RegExp("am|pm\\t([A-Za-z0-9]+)\\nThe","g")
      var teams_reg = new RegExp(">(.*)<font style=\"font-size: 12pt\"> v <\/font>(.*)</div>")

      var timehr = document.documentElement.innerText.match(timeregex)[1]
      var timeAMPM = document.documentElement.innerText.match(timeregex)[2]
      var date = document.documentElement.innerHTML.match(dateregex)[1]
      var match = document.documentElement.innerHTML.match(match_reg)[1]
      var loc = document.documentElement.innerHTML.match(location_reg)[1]
      var names = [...document.documentElement.innerText.matchAll(referees_name)]
      var team1 = document.documentElement.innerHTML.match(teams_reg)[1]
      var team2 = document.documentElement.innerHTML.match(teams_reg)[2]
      

      try{
        var referee_name = names[1][1]
      }
      catch(err){
        var referee_name = "N/A"
      }

      try{
        var AR1 =names[2][1]
      }
      catch(err){
        var AR1= "N/A"
      }
      
      try{
        var AR2 =names[3][1]
      }
      catch(err){
        var AR2= "N/A"
      }
      var discipline = [...document.documentElement.innerText.matchAll(discipline_reg)][1][1] //[0][1]
      
      // parsing date
      var date_split = date.split(" ")
      var year = date_split[2]
      var month = date_split[1]
      var day = date_split[0]

      var month_dict = { "January": 01, "February": 02, "March": 03, "April": 04, "May": 05, "June": 06, "July": 07, "August": 08, "September": 09, "October": 10, "November": 11, "December": 12 };
      var month_mm = month_dict[month]

      // message
      var message = "Your " + match + " match (" + team1 + " v "+ team2 + ") at " + loc + " as " + discipline + ":%0A" + "Referee: " + referee_name + "%0AAR1: " + AR1 + "%0AAR2: " + AR2

      // parsing time
      var convertTime12to24 = time12h => {
        var [time, modifier] = time12h.split(" ");

        let [hours, minutes] = time.split(":");

        if (hours === "12") {
          hours = "00";
        }

        if (modifier === "pm") {
          hours = parseInt(hours, 10) + 12;
        }

        return `${hours}:${minutes}`;
      };

      var convertedTime = convertTime12to24(timehr + " " + timeAMPM); //3:45pm

      var hour = convertedTime.split(":")[0]
      var min = convertedTime.split(":")[1]

      var end_hour = parseInt(hour, 10) + 2


      if (hour.toString().length == 1) {
        hour = "0" + hour;
      }

      if (end_hour.toString().length == 1) {
        end_hour = "0" + end_hour;
      }

      if (day.toString().length == 1) {
        day = "0" + day;
      }

      if (month_mm.toString().length == 1) {
        month_mm = "0" + month_mm;
      }

      startTime = year + month_mm + day + "T" + hour + min + "00"
      endTime = year + month_mm + day + "T" + end_hour + min + "00"

      var matchName = match + " Match - " + team1 + " v " + team2

      var url = "https://www.google.com/calendar/render?action=TEMPLATE&text=" + matchName + "&details=" + message + "&location=" + loc + "&dates=" + startTime + "/" + endTime
      url = url.replace(/\s/g, "+")
      url = url.replace("'", "%27")

      window.open(url)

      sendResponse({ text: "SENT", method: "changePage" }); //same as innerText
    }
  }
);






