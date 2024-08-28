let contacts = [ 
    { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" }, 
    { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" }, 
    { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" }
];

// Function to display contacts
const displayContacts = () => {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = contacts.map(contact => `
        <div>
            <h3>${contact.name}</h3>
            <p>Phone: ${contact.phone}</p>
            <p>Email: ${contact.email}</p>
        </div>
    `).join('');
};

// Function with callback
const processContacts = (callback) => {
    contacts.forEach(callback);
};

// Simulate delay with setTimeout
const updateDisplayWithDelay = () => {
    setTimeout(() => {
        displayContacts();
    }, 2000); // 2 seconds delay
};

// Periodic logging with setInterval
setInterval(() => {
   // console.log(`Total contacts: ${contacts.length}`);
}, 5000); // Every 5 seconds

// Recursive function to find contact by name
const findContactByName = (name, index = 0) => {
    if (index >= contacts.length) return null;
    if (contacts[index].name === name) return contacts[index];
    return findContactByName(name, index + 1);
};

// Function to add new contacts
const addContact = () => {
    do {
        let name = prompt('Enter contact name:');
        let phone = prompt('Enter contact phone:');
        let email = prompt('Enter contact email:');
        
        if (name && phone && email) {
            contacts.push({ name, phone, email });
            updateDisplayWithDelay();
        } else {
            alert('All fields are required!');
        }

        var continueAdding = confirm('Do you want to add another contact?');
    } while (continueAdding);
};

// Function to find contact
const findContact = () => {
    let name = prompt('Enter the name of the contact to find:');
    let contact = findContactByName(name);
    
    if (contact) {
        alert(`Contact found: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
    } else {
        alert('Contact not found!');
    }
};

// Change background color every 5 seconds
const colors = ['#e3341F', '#e99ec5', '#dee2e7', '#ced45d', '#adb35b'];
let colorIndex = 0;

setInterval(() => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 5000);

// Initial display
displayContacts();
