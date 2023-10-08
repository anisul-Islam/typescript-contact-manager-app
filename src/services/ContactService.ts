// services/ContactService.ts
import Contact from '../models/Contact';

class ContactService {
  private contacts: Contact[] = [];

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  deleteContact(id: number): void {
    const index = this.contacts.findIndex(
      (contact: Contact) => contact.id === id
    );
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }

  updateContact(id: number, updatedContact: Contact): void {
    const existingContact = this.contacts.find(
      (contact: Contact) => contact.id === id
    );
    if (existingContact) {
      // Update the existing contact with the new data
      existingContact.name = updatedContact.name;
      existingContact.email = updatedContact.email;
      existingContact.phone = updatedContact.phone;
    }
  }
}

export default ContactService;
