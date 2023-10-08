// services/ContactService.ts
import Contact from '../models/Contact';

class ContactService {
  private contacts: Contact[] = [];

  addContact(contact: Contact): void {
    if (!contact) {
      throw new Error('Invalid contact object.');
    }
    this.contacts.push(contact);
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  deleteContact(id: number): void {
    const index = this.contacts.findIndex(
      (contact: Contact) => contact.id === id
    );
    if (index === -1) {
      throw new Error(`Contact with ID ${id} not found.`);
    }
    this.contacts.splice(index, 1);
  }

  updateContact(id: number, updatedContact: Contact): void {
    if (!updatedContact) {
      throw new Error('Invalid updated contact object.');
    }
    const existingContact = this.contacts.find(
      (contact: Contact) => contact.id === id
    );

    if (!existingContact) {
      throw new Error(`Contact with ID ${id} not found.`);
    }

    // Update the existing contact with the new data
    existingContact.name = updatedContact.name;
    existingContact.email = updatedContact.email;
    existingContact.phone = updatedContact.phone;
  }
}

export default ContactService;
