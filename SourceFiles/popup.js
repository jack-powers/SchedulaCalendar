// popup.js
document.addEventListener('DOMContentLoaded', function () {
  var checkButton = document.getElementById('check');
  checkButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { method: "changePage" }
      )
      // .then(response => {
      //   console.log("complete");
      // }).catch(onError)



        // function () {//response
        // if (response.method == "changePage") {
        //   // alert(response.text);
        //   var i = 2; 
        // }
    });

  }, false);
}, false);