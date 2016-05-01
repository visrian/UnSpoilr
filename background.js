chrome.runtime.onInstalled.addListener(function () {
    var arrOfStrings = [];
    chrome.storage.sync.set({ 'input': arrOfStrings });
});
chrome.tabs.onUpdated.addListener(function (id, info, tab) {
  if (tab.url.toLowerCase().indexOf("facebook.com") > -1)  {
    chrome.pageAction.show(tab.id);
  }    
});