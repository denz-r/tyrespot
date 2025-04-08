function showHide(sectionId) {
    let sections = document.querySelectorAll('.ShowHide');
    sections.forEach(section => section.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
}


const cart = JSON.parse(localStorage.getItem("cart")) || []; 
const tyreData = {
    car: {
        Toyota: { Corolla: "195/65R15", Camry: "215/55R17", Etios: "185/60R15" ,Fortuner: "265/65R17" },
        Honda: { Civic: "215/55R16", Accord: "225/50R17" , City: "185/55R16", CRV: "235/60R18" },
        Tata: {Nexon: "215/60R16",Curv:"225/55R17",Safari:"235/70R16"},
        BMW:{"3 series":"225/50R17","5 series":"245/45R18",X3:"255/50R19"},
    },
    bike: {
        Yamaha: { R15: "140/70ZR17", FZ: "140/60R17", R1 : "190/50R17" },
        Honda: { CRB1000: "190/50ZR17", Shine: "80/100R18" ,CBR150: "140/70R17" },
        TVS: {RR310:"150/60R17","Scooty pept":"90/90R10",Raider:"100/90R17"},
        Kawasaki:{"Ninja 300":"140/70R17","Ninja 400":"150/60R17","ZX-10r":"190/55ZR17"},
  
    },
    SCV: {
     Tata: { Ace: "145R12LT","Super Ace":"175R14LT",Intra:"165R14LT"},
     Mahindra:{Jeeto:"145R12LT",Supro:"155R13LT","Bolero maxi truck":"195R15LT"},
     "Ashok Leyland":{"BadaDost":"185R14LT",Panther:"195/80 R15 LT",Dost:"185R14LT"},
     "Maruti Suzuki":{"Super carry":"155R13LT","Eco(cargo)":"155R13LT"},
    }
  };
  
  const availableTyres =[
   
        { brand: "Apollo", model: "Alnac 4G", size: "195/65R15", price: 5000, image: "https://www.motorindiaonline.in/wp-content/uploads/2022/08/Apollo-Endurace-RA.jpg" },
        { brand: "MRF", model: "ZLX", size: "195/65R15", price: 4500, image: "https://m.media-amazon.com/images/I/516XMsYkqXL.jpg" }, 
       { brand: "Ceat", model: "SecuraDrive", size: "195/65R15", price: 4800, image: "https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg" },
        { brand: "Apollo", model: "Aspire 4G", size: "215/55R17", price: 5000, image: "https://www.motorindiaonline.in/wp-content/uploads/2022/08/Apollo-Endurace-RA.jpg" },
        { brand: "MRF", model: "Perfinza CLX1", size: "215/55R17", price: 4500, image: "https://m.media-amazon.com/images/I/516XMsYkqXL.jpg" },
        { brand: "Ceat", model: "SportDrive", size: "215/55R17", price: 4800, image: "https" },
        { brand: "Apollo", model: "Amazer 4G Life", size: "185/60R15", price: 5000, image: "Apollo.jpg" },
        { brand: "MRF", model: "ZVTV", size: "185/60R15", price: 4500, image: "https://m.media-amazon.com/images/I/516XMsYkqXL.jpg" },
        { brand: "Ceat", model: "Milaze X3", size: "185/60R15", price: 4800, image: "https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg" },
        { brand: "Apollo", model: "Apteerra AT2", size: "265/65R17", price: 5000, image: "Apollo.jpg" },
        { brand: "MRF", model: "Wanderer A/T", size: "185/60R15", price: 4500, image: "https://m.media-amazon.com/images/I/516XMsYkqXL.jpg" },
        { brand: "Ceat", model: "CrossDrive", size: "185/60R15", price: 4800, image: "https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg" },
        { brand: "Apollo", model: "Alnac 4G", size: "215/55R16", price: 5000, image: "Apollo.jpg" },
        { brand: "MRF", model: "Perfinza", size: "215/55R16", price: 4500, image: "https://m.media-amazon.com/images/I/516XMsYkqXL.jpg" },
        { brand: "Ceat", model: "SecuraDrive", size: "215/55R16", price: 4800, image: "https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg" },
        { brand: "Apollo", model: "Aspire 4G", size: "225/50R17", price: 5000, image: "Apollo.jpg" },
        { brand: "MRF", model: "ZLO", size: "225/50R17", price: 4500, image: "https://m.media-amazon.com/images/I/516XMsYkqXL.jpg" },
        { brand: "Ceat", model: "SportDrive", size: "225/50R17", price: 4800, image: "https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg" },
        { brand: "Apollo" , model:"Alpha H1", size:"140/70R17", price:5600, image: "https://www.motorindiaonline.in/wp-content/uploads/2022/08/Apollo-Endurace-RA.jpg"},
        { brand: "MRF" , model:"REVZ-S", size:"140/60R17", price:5400, image: "https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg"},
        { brand: "Ceat" , model:"Zoom RAD", size:"140/70R17", price:5500, image: "https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg"},
        { brand: "Apollo" , model:"Alpha S1", size:"140/60R17", price:5300, image: "https://www.motorindiaonline.in/wp-content/uploads/2022/08/Apollo-Endurace-RA.jpg"},
        { brand: "MRF" , model:"REVZ-FC1", size:"140/60R17", price:5200, image: "https://m.media-amazon.com/images/I/516XMsYkqXL.jpg"},
        { brand: "Ceat" , model:"Zoom X3", size:"140/60R17", price:5250, image: "https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg"},
        { brand: "Apollo" , model:"Aplha H1", size:"190/50ZR17", price:8000, image: "https://www.motorindiaonline.in/wp-content/uploads/2022/08/Apollo-Endurace-RA.jpg"},
        { brand: "MRF" , model:"Zapper Vyde", size:"190/50ZR17", price:8600, image: "https://m.media-amazon.com/images/I/516XMsYkqXL.jpg"},
        { brand: "Ceat" , model:"RAD X1", size:"190/50ZR17", price:8700, image: "https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg"},
        { brand: "Apollo" , model:"ActiGrip R1", size:"80/100R18", price:3200, image: "https://www.motorindiaonline.in/wp-content/uploads/2022/08/Apollo-Endurace-RA.jpg"},
        { brand: "MRF" , model:"Zapper FS", size:"80/100R18", price:3100, image: "https://m.media-amazon.com/images/I/516XMsYkqXL.jpg"},
        { brand: "Ceat" , model:"Gripp X3", size:"80/100R18", price:3150, image: "https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg"},
        { brand: "Apollo" , model:"Actizip S3", size:"90/90R10", price:2800, image: "https://www.motorindiaonline.in/wp-content/uploads/2022/08/Apollo-Endurace-RA.jpg"},
        { brand: "MRF" , model:"Nylogrip", size:"90/90R10", price:2700, image:"https://m.media-amazon.com/images/I/516XMsYkqXL.jpg"},
        { brand: "Ceat",model: "Gripp X3",size:"90/90R10", price: 2750, image:"https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg" },
        {brand : "Apollo",model: "Actizip R4",size:"100/90R17", price: 4000, image:"https://www.motorindiaonline.in/wp-content/uploads/2022/08/Apollo-Endurace-RA.jpg" },
        { brand: "MRF" ,model:" Zapper FS " ,size:"100/90R17", price: 3900,image:"https://m.media-amazon.com/images/I/516XMsYkqXL.jpg" },
        { brand: "Ceat" ,model:" Zoom X3" ,size:"100/90R17", price: 3950, image:"https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg" },
        { brand: "Apollo",model:" Alpha H1" ,size:"150/60R17", price: 6000, image:"https://www.motorindiaonline.in/wp-content/uploads/2022/08/Apollo-Endurace-RA.jpg" },
        { brand: "MRF" , model:" Revz-S" , size:"150/60R17", price: 5900,image:"https://m.media-amazon.com/images/I/516XMsYkqXL.jpg" },
        { brand: "Ceat",model: "Zoom Rad",size:"150/60R17", price: 5950,image:"https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg" },
        { brand: "Apollo",model:"Alpha H1",size:"190/55ZR17", price: 9000,image:"https://www.motorindiaonline.in/wp-content/uploads/2022/08/Apollo-Endurace-RA.jpg" },
        { brand: "MRF", model:" Zapper Vyde",size: "190/55ZR17", price: 8800,image:"https://m.media-amazon.com/images/I/516XMsYkqXL.jpg" },
        { brand: "Ceat", model:" Rad X1" ,size: "190/55ZR17",price:8900,image:"https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg"},
        { brand: "Ceat", model:" SecureDrive" ,size: "195/65R15",price:7750,image:"https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg"},
        { brand: "Apollo", model:" tramplr XR" ,size: "140/17R17",price:4300,image:"https://www.motorindiaonline.in/wp-content/uploads/2022/08/Apollo-Endurace-RA.jpg"},
        { brand: "Apollo", model:"Alnac 4g " ,size: "185/55R16",price:8900,image:"https://www.motorindiaonline.in/wp-content/uploads/2022/08/Apollo-Endurace-RA.jpg"},
        { brand: " Apollo", model:" Apterra HP" ,size: "235/60R18",price:6000,image:"https://www.motorindiaonline.in/wp-content/uploads/2022/08/Apollo-Endurace-RA.jpg"},
        { brand: "MRF ", model:" Perfinza CLX1" ,size: "225/50R17",price:5500,image:"https://m.media-amazon.com/images/I/516XMsYkqXL.jpg"},
        { brand: "Ceat", model:" Milaz lt" ,size: "145R12lt",price:4500,image:"https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg"},
        { brand: "Ceat ", model:" Ceat 14" ,size: "175R14lt",price:5000,image:"https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg"},
        { brand: "MRF", model:"Zigma CTP" ,size: "145R12LT",price:6000,image:"https://m.media-amazon.com/images/I/516XMsYkqXL.jpg"},
        { brand: "MRF", model:"Savari LUG" ,size: "185R14LT",price:7320,image:"https://m.media-amazon.com/images/I/516XMsYkqXL.jpg"},
        { brand: "Ceat", model:"Milaze ECO " ,size: "155R13lt",price:5000,image:"https://5.imimg.com/data5/MD/WZ/SW/GLADMIN-12/3.jpg"},
        { brand: "Apollo", model:"perfinza " ,size: "225/50R17",price:6100,image:"https://www.motorindiaonline.in/wp-content/uploads/2022/08/Apollo-Endurace-RA.jpg"},
     
  ];



function updateBrands() {
    const vehicleType = document.getElementById("vehicleType").value;
    const brandSelect = document.getElementById("brand");
    brandSelect.innerHTML = `<option value="">Select Brand</option>`;
    
    if (vehicleType && tyreData[vehicleType]) {
        Object.keys(tyreData[vehicleType]).forEach(brand => {
            brandSelect.innerHTML += `<option value="${brand}">${brand}</option>`;
        });
    }
    updateModels();
}

function updateModels() {
    const vehicleType = document.getElementById("vehicleType").value;
    const brand = document.getElementById("brand").value;
    const modelSelect = document.getElementById("model");
    modelSelect.innerHTML = `<option value="">Select Model</option>`;

    if (vehicleType && brand && tyreData[vehicleType][brand]) {
        Object.keys(tyreData[vehicleType][brand]).forEach(model => {
            modelSelect.innerHTML += `<option value="${model}">${model}</option>`;
        });
    }
}

function suggestTyres() {
    const vehicleType = document.getElementById("vehicleType").value;
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = "";

    if (!vehicleType || !brand || !model) {
        resultsDiv.innerHTML = "<p>Please select all fields to find tyres.</p>";
        alert("Please select all fields to find tyres.");
        return;
    }

    const size = tyreData[vehicleType][brand][model];
    const matchingTyres = availableTyres.filter(tyre => tyre.size === size);

    if (matchingTyres.length > 0) {
        matchingTyres.forEach(tyre => {
            resultsDiv.innerHTML += `
                <div>
                    <img src="${tyre.image}" alt="${tyre.model}" width="100">
                    <p>${tyre.brand} ${tyre.model} - ${tyre.size} - ₹${tyre.price}</p>
                    <button onclick='addToCart("${tyre.brand}", "${tyre.model}", "${tyre.size}", ${tyre.price}, "${tyre.image}")'>Add to Cart</button>
                </div>
            `;
        });
    } else {
        resultsDiv.innerHTML = "<p>No tyres available for this selection.</p>";
    }
    document.getElementById("SuggestedTyres").style.display = "block";
}

function searchBySize() {
    const tyreSize = document.getElementById("tyre-size").value.trim();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `<p>Searching for tyres of size ${tyreSize}...</p>`;
    
    setTimeout(() => {
        const filteredTyres = availableTyres.filter(tyre => tyre.size === tyreSize);
        if (filteredTyres.length > 0) {
            let tyreList = filteredTyres.map(tyre => 
                `<div><img src="${tyre.image}" alt="${tyre.brand} ${tyre.model}" style="width:100px;height:100px;"> 
                <p>${tyre.brand} ${tyre.model} (Size: ${tyre.size}) - ₹${tyre.price}</p>
                <button onclick='addToCart("${tyre.brand}", "${tyre.model}", "${tyre.size}", ${tyre.price}, "${tyre.image}")'>Add to Cart</button></div>`
            ).join("");
            resultsDiv.innerHTML = `<p>Available tyres for size ${tyreSize}:</p>` + tyreList;
        } else {
            resultsDiv.innerHTML = `<p>No tyres found for the selected size.</p>`;
        }
    }, 1000);

    document.getElementById("SuggestedTyres").style.display = "block";
}

function updateCartDisplay() {
    const cartDiv = document.getElementById("cart-items");
    if (!cartDiv) return;
    cartDiv.innerHTML = `<h3>Cart</h3>`;
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        cartDiv.innerHTML += `<div><img src="${item.image}" alt="${item.brand} ${item.model}" style="width:50px;height:50px;"> 
            ${item.brand} ${item.model} (Size: ${item.size}) - ₹${item.price} 
            <button onclick="removeFromCart(${index})">Remove</button></div>`;
    });

    cartDiv.innerHTML += `<p><strong>Total: ₹${total}</strong></p>`;
}

function addToCart(brand, model, size, price, image) {
    cart.push({ brand, model, size, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    alert(`${brand} ${model} added to cart!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}









let lastTotal = 0; // Store the final total before checkout

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Calculate total before clearing the cart
    lastTotal = cart.reduce((sum, item) => sum + item.price, 0);

    alert(`Order Summary:\n${cart.map(item => `${item.brand} ${item.model} - ₹${item.price}`).join("\n")}\nTotal: ₹${lastTotal}`);

    localStorage.removeItem("cart"); // Clear local storage
    cart.length = 0; // Empty cart array
    updateCartDisplay(); // Refresh cart UI
    
    if (typeof showHide === "function") {
        showHide("payment-container");
    }
}

// Ensure cart display updates on page load
updateCartDisplay();

function checkPassword() {
    const passwordInput = document.getElementById('passwordd').value;
    if (passwordInput === '1234') {
        alert('Password correct! You can now click the button.');
        document.getElementById("AddingTyre").style.display = "block";
        document.getElementById("password").style.display = "none";
    } else {
        alert('Incorrect password. Try again.');
    }
}

function addNewTyre() {
    const brand = document.getElementById("newTyreBrand").value;
    const model = document.getElementById("newTyreModel").value;
    const size = document.getElementById("newTyreSize").value;
    const price = parseFloat(document.getElementById("newTyrePrice").value);
    const image = document.getElementById("newTyreImage").value;
    
    if (!brand || !model || !size || isNaN(price) || !image) {
        alert("Please fill all the fields correctly.");
        return;
    }
    
    availableTyres.push({ brand, model, size, price, image });
    alert(`Tyre ${brand} ${model} added successfully!`);
    
    document.getElementById("newTyreBrand").value = "";
    document.getElementById("newTyreModel").value = "";
    document.getElementById("newTyreSize").value = "";
    document.getElementById("newTyrePrice").value = "";
    document.getElementById("newTyreImage").value = "";
}

function formatCardNumber(input) {
    input.value = input.value.replace(/\D/g, '');
    input.value = input.value.replace(/(.{4})/g, '$1 ').trim();
}

function validateExpiry(input) {
    input.value = input.value.replace(/\D/g, '').slice(0, 4);
    if (input.value.length >= 2) {
        input.value = input.value.slice(0, 2) + '/' + input.value.slice(2);
    }
}

function processPayment() {
    let message = document.getElementById("message");
    let payButton = document.getElementById("payButton");
    let downloadButton = document.getElementById("downloadReceipt");
    
    payButton.disabled = true;
    payButton.innerText = "Processing...";
    
    setTimeout(() => {
        message.style.display = "block";
        payButton.innerText = "Pay Now";
        payButton.disabled = false;
        downloadButton.style.display = "block";
    }, 2000);
}






function downloadReceipt() {
    if (lastTotal === 0) {
        alert("No items in the cart to generate a receipt.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const currentDate = new Date().toLocaleString();

    doc.text("THE TYRE SPOT", 10, 10);
    doc.text("Payment Receipt", 10, 20);
    doc.text("-------------------", 10, 30);
    doc.text("Date: " + currentDate, 10, 40);
    doc.text("Card Number: **** **** **** " + document.getElementById("cardNumber").value.slice(-4), 10, 50);
    doc.text("Expiry Date: " + document.getElementById("expiry").value, 10, 60);
    doc.text("Amount: Rs" + lastTotal, 10, 70);
    doc.text("Payment Status: Successful", 10, 80);
    doc.save("receipt.pdf");
}




// Reuse the showSection function for login and signup forms
document.getElementById('loginBtn').addEventListener('click', function() {
    showHide('loginForm'); // Show the login form
});

document.getElementById('signupBtn').addEventListener('click', function() {
    showHide('registrationForm'); // Show the signup form
});


// Function to hide both forms
function hideForms() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'none';
}

// Hide forms on page load
document.addEventListener('DOMContentLoaded', function () {
    hideForms();
});

// Toggle between login and signup forms
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registrationForm').style.display = 'none';
});

document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
});


// document.getElementById("mobile").addEventListener("input", function (e) {
//     this.value = this.value.replace(/\D/g, ""); // Remove non-digit characters
// });
// Optional: Hide forms when clicking outside of them
document.addEventListener('click', function (event) {
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    if (
        !loginForm.contains(event.target) &&
        !registrationForm.contains(event.target) &&
        event.target !== loginBtn &&
        event.target !== signupBtn
    ) {
        hideForms();
    }
});

// Switch links inside forms
document.getElementById('switchToSignup').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signupBtn').click();
});

document.getElementById('switchToLogin').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginBtn').click();
});

// Login form validation
document.getElementById('loginFormElement').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[name="email"]').value;
    const password = this.querySelector('input[name="password"]').value;
    
    if (!email || !password) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Here you would typically send data to server
    alert('Login successful!');
    this.submit();
});
   

//product page code
const productListElement = document.getElementById('product-list');

availableTyres.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productName = document.createElement('h2');
    productName.textContent = product.brand;
    productDiv.appendChild(productName);

     const productModel = document.createElement('h3');
     productModel.textContent = product.model;
    productDiv.appendChild(productModel); 


    
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.width = 200; // Set width in pixels
    productImage.height = 200; // Set height in pixels
    productDiv.appendChild(productImage);

    const productPrice = document.createElement('h3');
    productPrice.textContent = product.price;
    productDiv.appendChild(productPrice);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => addToCartt(product));
    productDiv.appendChild(addToCartButton);


    productListElement.appendChild(productDiv);


});

// JavaScript to handle the address form and show the payment section
function ShowPayment() {
    const form = document.getElementById('addressForm');

    // Validate form inputs
    if (form.checkValidity()) {
        const formData = {
            fullName: document.getElementById('fullName').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            pincode: document.getElementById('pincode').value
        };

        console.log("Shipping Details:", formData); // Debug or use it later

        // Hide address form
        document.getElementById('Address').style.display = 'none';

        // Show payment section
        const paymentSection = document.getElementById('Payment');
        if (paymentSection) {
            paymentSection.style.display = 'block';
        }
    } else {
        // Highlight validation errors
        form.reportValidity();
    }
}

//address reagan
function ShowPayment() {
    const requiredFields = ['fullName', 'phoneNumber', 'address', 'city', 'state', 'pincode'];
    let allFilled = true;

    requiredFields.forEach(id => {
        const field = document.getElementById(id);
        if (!field || !field.value.trim()) {
            allFilled = false;
            field.style.border = '2px solid red';
        } else {
            field.style.border = '';
        }
    });

    if (allFilled) {
        showHide('payment-container');
    } else {
        alert('Please fill in all required address fields.');
    }
}