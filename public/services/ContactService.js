"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContactService {
    constructor() {
        this.contacts = [];
    }
    addContact(contact) {
        if (!contact) {
            throw new Error('Invalid contact object.');
        }
        this.contacts.push(contact);
    }
    getContacts() {
        return this.contacts;
    }
    deleteContact(id) {
        const index = this.contacts.findIndex((contact) => contact.id === id);
        if (index === -1) {
            throw new Error(`Contact with ID ${id} not found.`);
        }
        this.contacts.splice(index, 1);
    }
    updateContact(id, updatedContact) {
        if (!updatedContact) {
            throw new Error('Invalid updated contact object.');
        }
        const existingContact = this.contacts.find((contact) => contact.id === id);
        if (!existingContact) {
            throw new Error(`Contact with ID ${id} not found.`);
        }
        // Update the existing contact with the new data
        existingContact.name = updatedContact.name;
        existingContact.email = updatedContact.email;
        existingContact.phone = updatedContact.phone;
    }
}
exports.default = ContactService;
