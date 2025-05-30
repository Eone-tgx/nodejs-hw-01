import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const oneContact = createFakeContact();
    const updatedContacts = [...existingContacts, oneContact];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.log('Помилка при додаванні контакту:', error.message);
  }
};

addOneContact();
