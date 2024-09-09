document.getElementById('parseButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "parseText" }, (response) => {
            if (response) {
                document.getElementById('output').value = response.result; // Set the value of the textarea
            } else {
                document.getElementById('output').value = "No text found.";
            }
        });
    });
});

// Add event listener for the copy button
document.getElementById('copyButton').addEventListener('click', () => {
    const textarea = document.getElementById('output');
    textarea.select(); // Select the text in the textarea
    document.execCommand('copy'); // Copy the selected text to the clipboard
    alert('Text copied to clipboard!'); // Optional: Alert the user
});
