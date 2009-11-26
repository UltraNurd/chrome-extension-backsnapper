/***
 * backsnapper.js
 *
 * This is the content script injected into each page by the extension.
 *
 * Nicolas Ward
 * @ultranurd
 * 2009.11.25
 ***/

/***
This file is part of BackSnapper.

Copyright 2009, Nicolas Ward
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
list of conditions and the following disclaimer in the documentation and/or
other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
***/

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
