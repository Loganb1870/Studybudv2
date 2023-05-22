chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'highlightKeyword') {
      var keyword = request.keyword;
      highlightKeyword(keyword);
      scrollToKeyword(keyword);
    }
  });
  
  function highlightKeyword(keyword) {
    var regex = new RegExp('(' + keyword + ')', 'gi');
    var matches = document.documentElement.innerHTML.match(regex);
    if (matches) {
      matches.forEach(function(match) {
        document.body.innerHTML = document.body.innerHTML.replace(new RegExp(match, 'g'), '<span class="highlighted">' + match + '</span>');
      });
    }
  }
  function scrollToKeyword(keyword) {
    var element = document.querySelector('.highlighted');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center'});
        
    }
  }
  