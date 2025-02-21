const multiplicationForm = document.getElementById('multiplicationForm');
const tableContainer = document.getElementById('tableContainer');
multiplicationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actually submitting
    const number = document.getElementById('number').value;
    if (number < 1 || number > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }
    let table = '<table>';
    table += '<tr><th>Multiplier</th><th>Result</th></tr>';
    for (let i = 1; i <= 10; i++) {
        table += `<tr><td>${i}</td><td>${i * number}</td></tr>`;
    }
    table += '</table>';
    tableContainer.innerHTML = table;
});
