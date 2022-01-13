


// var timehr = "3:45"
// var timeAMPM = "pm"
// var date=  "26 September 2021"
// var match =  "FQ U23 NPL Women's (2) 2021"
// var loc = "Wakerley Park 2 Synthetic"

// // parsing date
// var date_split = date.split(" ")
// var year = date_split[2]
// var month = date_split[1]
// var day = date_split[0]


// var month_dict = { "January" : 01, "February" : 02, "March":03, "April":04, "May":05, "June":06, "July":07, "August":08, "September":09, "October":10, "November":11, "December":12};
// var month_mm = month_dict[month]

// console.log("ee",month_mm)
// // parsing time
// const convertTime12to24 = time12h => {
//     const [time, modifier] = time12h.split(" ");
  
//     let [hours, minutes] = time.split(":");
  
//     if (hours === "12") {
//       hours = "00";
//     }
  
//     if (modifier === "pm") {
//       hours = parseInt(hours, 10) + 12;
//     }
  
//     return `${hours}:${minutes}`;
//   };

// var convertedTime = convertTime12to24(timehr + " " +timeAMPM); //3:45pm

// var hour = convertedTime.split(":")[0]
// var min = convertedTime.split(":")[1]

// var end_hour = parseInt(hour,10)+2


// if (hour.toString().length == 1) {
//     hour = "0" + hour;
// }

// if (end_hour.toString().length == 1) {
//     end_hour = "0" + end_hour;
// }

// if (day.toString().length == 1) {
//     day = "0" + day;
// }

// if (month_mm.toString().length == 1) {
//     month_mm = "0" + month_mm;
// }


// startTime = year + month_mm + day  + "T" + hour + min + "00"
// endTime = year + month_mm + day  + "T" + end_hour + min + "00"

// var url = "https://www.google.com/calendar/render?action=TEMPLATE&text=" + match +  "&location=" + loc + "&dates=" + startTime + "/" + endTime //"&details=" + "DES" +
// url = url.replace(/\s/g,"+")
// url = url.replace("'", "%27")




// console.log(startTime)
// console.log(endTime)
// console.log(url)