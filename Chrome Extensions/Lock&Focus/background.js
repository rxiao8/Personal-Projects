chrome.contextMenus.create({
    id: "eat-page",
    title: "Eat this page"
  });
const tabId = gettab
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "eat-page") {
        chrome.scripting.executeScript({
    //         target: { tabId: tab.Id },
            files: ['script.js'],
      });
    console.log("here");
    }
  });

  