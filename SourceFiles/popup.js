// popup.js
document.addEventListener('DOMContentLoaded', function () {
  var checkButton = document.getElementById('google');
  checkButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { method: "google" }
      )});
  }, false);
  var checkButton = document.getElementById('outlook');
  checkButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { method: "outlook" }
      )});
  }, false);
  var checkButton = document.getElementById('outlookOnline');
  checkButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { method: "outlookOnline" }
      )});
  }, false);
  var checkButton = document.getElementById('office');
  checkButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { method: "office" }
      )});
  }, false);

}, false);