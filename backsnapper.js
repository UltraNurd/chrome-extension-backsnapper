// Snap back to the first page in the history that's not about:blank
function snapBack(request, sender, sendResponse) {
  // Determine how far back we need to snap back
  var historyIndex = 1 - history.length;

  // Check if we need to bother snapping back
  if (historyIndex < 0) {
    // Snap back to the beginning
    history.go(historyIndex);
  }

  // Done; return snapped-to index and URL
  sendResponse({"index":historyIndex});
}

// Add a handler for when this code is called by the extension background page
chrome.extension.onRequest.addListener(snapBack);
