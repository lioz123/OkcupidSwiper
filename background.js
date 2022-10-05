let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

console.log("tet");

chrome.tabs.onUpdated.addListener(function (tabId , info) {
  if (info.status === 'complete') {
    console.log("fhinished loading");
  }
  console.log("this info: " + info.status);
});