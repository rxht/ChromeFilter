(function init() {
  chrome.storage.sync.set({ "filters" : 'data' }, () => {
    console.log('save success')
  })
  chrome.storage.sync.get("filters", (data) => {
    console.log(data);
  })
})()
