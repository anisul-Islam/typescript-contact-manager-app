// // without DOM
// import Contact from './models/Contact';
// import ContactService from './services/ContactService';
// const contactService = new ContactService();
// // Add contacts
// const contact1 = new Contact(1, 'Alice', 'alice@example.com', '123-456-7890');
// const contact2 = new Contact(2, 'Bob', 'bob@example.com', '987-654-3210');
// contactService.addContact(contact1);
// contactService.addContact(contact2);
// // Get contacts
// const contacts = contactService.getContacts();
// console.log('All Contacts:', contacts);
// // Delete a contact
// const contactIdToDelete = 1;
// contactService.deleteContact(contactIdToDelete);
// console.log('current Contacts:', contactService.getContacts());
// // Update a contact
// const contactIdToUpdate = 1;
// const updatedContact = new Contact(contactIdToUpdate, 'Updated Alice', 'updated@example.com', '555-555-5555');
// contactService.updateContact(contactIdToUpdate, updatedContact);
// With DOM
// Import the Contact and ContactService classes
import Contact from './models/Contact.js';
import ContactService from './services/ContactService.js';
// Create an instance of ContactService
const contactService = new ContactService();
// Get references to the HTML elements
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const addContactButton = document.getElementById('addContactButton');
const contactList = document.getElementById('contactList');
// Function to render the contact list
function renderContactList() {
    if (!contactList)
        return;
    contactList.innerHTML = '';
    const contacts = contactService.getContacts();
    contacts.forEach((contact) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${contact.name} | ${contact.email} | ${contact.phone}`;
        if (contactList)
            contactList.appendChild(listItem);
    });
}
// Event listener for the Add Contact button
if (addContactButton && nameInput && emailInput && phoneInput) {
    addContactButton.addEventListener('click', () => {
        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        if (name && email && phone) {
            const newContact = new Contact(Date.now(), name, email, phone);
            contactService.addContact(newContact);
            renderContactList();
            // Clear input fields
            nameInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
        }
        else {
            alert('Please fill in all fields.');
        }
    });
}
// Initial rendering of the contact list
renderContactList();
