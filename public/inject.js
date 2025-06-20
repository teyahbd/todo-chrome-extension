// Inject style
const linkStyle = document.createElement("link");
linkStyle.rel = "stylesheet";
linkStyle.href = chrome.runtime.getURL("bundle.css"); // update to your actual filename if hashed
document.head.appendChild(linkStyle);

// Inject root div
const container = document.createElement("div");
container.id = "my-floating-extension-root";
document.body.appendChild(container);

// Add styles for positioning
const inlineStyle = document.createElement("style");
inlineStyle.textContent = `
  #my-floating-extension-root {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 999999;
    width: 300px;
    height: auto;
  }
`;
document.head.appendChild(inlineStyle);

// Load React app bundle
const script = document.createElement("script");
script.src = chrome.runtime.getURL("bundle.js");
document.body.appendChild(script);
