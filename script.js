function toggleMode() {
    document.body.classList.toggle('light-mode');
    const modeButton = document.getElementById('modeButton');
    if (document.body.classList.contains('light-mode')) {
        modeButton.textContent = 'Dark Mode';
    } else {
        modeButton.textContent = 'Light Mode';
    }
}