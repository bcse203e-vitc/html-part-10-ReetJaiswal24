const pizzaForm = document.getElementById('pizzaForm');
const orderSummary = document.getElementById('orderSummary');
const summarySize = document.getElementById('summarySize');
const summaryToppings = document.getElementById('summaryToppings');

pizzaForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let pizzaSize = '';
    const sizeRadioButtons = document.querySelectorAll('input[name="size"]');
    for (let i = 0; i < sizeRadioButtons.length; i++) {
        if (sizeRadioButtons[i].checked) {
            pizzaSize = sizeRadioButtons[i].value;
        }
    }
    let toppings = [];
    const toppingCheckboxes = document.querySelectorAll('input[name="topping"]:checked');
    toppingCheckboxes.forEach(function(checkbox) {
        toppings.push(checkbox.value);
    });

    if (pizzaSize) {
        summarySize.textContent = `Pizza Size: ${pizzaSize}`;
    } else {
        summarySize.textContent = 'Pizza Size: Not selected';
    }

    if (toppings.length > 0) {
        summaryToppings.textContent = `Toppings: ${toppings.join(', ')}`;
    } else {
        summaryToppings.textContent = 'Toppings: No toppings selected';
    }

    orderSummary.style.display = 'block';
});
