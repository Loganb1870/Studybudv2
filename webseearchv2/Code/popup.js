document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function() {
      var searchInput = document.getElementById('searchInput').value;
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { message: 'highlightKeyword', keyword: searchInput });
      });
    });
  });
  