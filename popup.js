const btn = document.getElementById('autofill-button');

try {
    btn.addEventListener('click', () => {
        console.log("in popup")
        chrome.runtime.sendMessage({ action: 'injectContentScript' });
    });
    
} catch (error) {
    console.log(error)
}