const textArea = document.getElementById('textArea');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const alertMessage = document.getElementById('alert');

function updateCounts() {
    const text = textArea.value;
    const charCountValue = text.length;
    const words = text.trim().split(/\s+/).filter(Boolean);
    const wordCountValue = words.length;

    charCount.textContent = `Characters: ${charCountValue}`;
    wordCount.textContent = `Words: ${wordCountValue}`;

    if (charCountValue > 200) {
        alertMessage.style.display = 'block'; 
    } else {
        alertMessage.style.display = 'none'; 
    }
}
textArea.addEventListener('input', updateCounts);
