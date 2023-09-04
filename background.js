// background.js

// Example: Listen for a message from the content script and log it
browser.runtime.onMessage.addListener((message) => {
    if (message.action === 'logMessage') {
      console.log('Message from content script:', message.text);
    }
  });