class ContactService {
    constructor() {
        this.contacts = [];
    }
    addContact(contact) {
        this.contacts.push(contact);
    }
    getContacts() {
        return this.contacts;
    }
    deleteContact(id) {
        const index = this.contacts.findIndex((contact) => contact.id === id);
        if (index !== -1) {
            this.contacts.splice(index, 1);
        }
    }
    updateContact(id, updatedContact) {
        const existingContact = this.contacts.find((contact) => contact.id === id);
        if (existingContact) {
            // Update the existing contact with the new data
            existingContact.name = updatedContact.name;
            existingContact.email = updatedContact.email;
            existingContact.phone = updatedContact.phone;
        }
    }
}
export default ContactService;
