
const selectDom = document.getElementById('selectDom');

selectDom.addEventListener("click", async () => {
  console.log('选择元素')
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: initSelectDom
  });
});
