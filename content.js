// content.js
function parseText() {
    // Select the div with class "view-content"
    const viewContentDiv = document.querySelector('.view-content');
    if (!viewContentDiv) {
        return "No element with class 'view-content' found.";
    }

    // Get first-level children
    const firstLevelChildren = Array.from(viewContentDiv.children);
    
    // Create an array to hold the output
    const output = firstLevelChildren.map(child => {
        const allText = child.textContent;
		
		// Remove any extra whitespace and join into a single line
		return allText.replace(/\s+/g, ' ')
		.trim();
    });

    // Join first-level children text with newline characters
    return output.join('\n');
}


// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "parseText") {
        const result = parseText();
        sendResponse({ result });
    }
});
