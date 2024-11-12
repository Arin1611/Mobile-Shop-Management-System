// Mobile inventory data
let mobiles = [];

// Function to add a mobile to the inventory
function addMobile(event) {
    event.preventDefault();

    const model = document.getElementById("model").value;
    const price = parseFloat(document.getElementById("price").value);
    const stock = parseInt(document.getElementById("stock").value);

    // Check for valid inputs
    if (!model || isNaN(price) || isNaN(stock)) {
        alert("Please enter valid mobile details.");
        return;
    }

    // Add the new mobile to the inventory
    mobiles.push({ model, price, stock });

    // Reset form fields
    document.getElementById("addMobileForm").reset();

    // Update UI
    displayMobiles();
    updateSummary();
}

// Function to display mobiles in the inventory
function displayMobiles() {
    const mobileList = document.getElementById("mobileList");
    mobileList.innerHTML = ''; // Clear previous entries

    mobiles.forEach((mobile, index) => {
        const mobileItem = document.createElement("div");
        mobileItem.className = "mobile-item";
        mobileItem.innerHTML = `
            <span><strong>${mobile.model}</strong> - $${mobile.price.toFixed(2)}</span>
            <span>Stock: ${mobile.stock}</span>
        `;
        mobileList.appendChild(mobileItem);
    });
}

// Function to update the stock summary
function updateSummary() {
    const totalMobiles = mobiles.length;
    const totalStock = mobiles.reduce((sum, mobile) => sum + mobile.stock, 0);

    document.getElementById("totalMobiles").textContent = `Total Mobiles: ${totalMobiles}`;
    document.getElementById("totalStock").textContent = `Total Stock Quantity: ${totalStock}`;
}

// Event listener for form submission
document.getElementById("addMobileForm").addEventListener("submit", addMobile);

// Initial display
displayMobiles();
updateSummary();