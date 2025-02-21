function populateStates() {
    const country = document.getElementById("country").value;
    const stateDropdown = document.getElementById("state");
    stateDropdown.innerHTML = '<option value="">Select a State</option>';

    let states = [];
    if (country === "USA") {
        states = ["California", "Texas", "New York"];
    } else if (country === "India") {
        states = ["Delhi", "Maharashtra", "Karnataka"];
    } else if (country === "UK") {
        states = ["England", "Scotland", "Wales"];
    }
    states.forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateDropdown.appendChild(option);
    });
}
