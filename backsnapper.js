// Snap back to the first page in the history that's not about:blank
function snapBack(request, sender, sendResponse) {
  // Determine how far back we need to snap back
  var firstHistoryIndex = 1 - history.length;
  console.log("snapping back to " + firstHistoryIndex);

  // Check if we need to bother snapping back
  if (firstHistoryIndex < 0) {
    // Jump back to the beginning
    history.go(firstHistoryIndex);
  }

  // Done; empty ACK
  sendResponse({});
}

// Add a handler for when this code is called by the extension background page
chrome.extension.onRequest.addListener(snapBack);
