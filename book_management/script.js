// Prices of books
const prices = [500, 350, 400, 450];

const rows = document.querySelectorAll("table tr");

function calculateTotal() {

    let total = 0;

    const values = document.querySelectorAll(".value");

    values.forEach(function(box) {

        if (box.value !== "") {
            total += Number(box.value);
        }

    });

    document.getElementById("totalBill").textContent = total;
}

for (let i = 1; i < rows.length; i++) {

    const checkbox = rows[i].querySelector(".purchase");
    const quantity = rows[i].querySelector(".quantity");
    const value = rows[i].querySelector(".value");

    checkbox.addEventListener("change", function() {

        if (this.checked) {
            quantity.disabled = false;
            value.disabled = false;
        } else {
            quantity.disabled = true;
            value.disabled = true;

            quantity.value = "";
            value.value = "";

            calculateTotal();
        }

    });
    quantity.addEventListener("input", function() {

        let qty = Number(quantity.value);

        if (qty > 0) {
            value.value = qty * prices[i - 1];
        } else {
            value.value = "";
        }

        calculateTotal();
    });

}