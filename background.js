let color = '#3aa757';
let size = 100;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ size });
});

chrome.contextMenus.create({
  id: "readText",
  title: "Read selected text: %s", 
  contexts:[ "selection" ],
  onclick: function(info, tabs) {
    var s = info.selectionText;
    if(s && s.length) {
      narrate(s, function(response) {
        if(response) { 
          console.log(response); 
        }
      });
    } else {
      console.log("Nothing to narrate.");
    }
  }
});