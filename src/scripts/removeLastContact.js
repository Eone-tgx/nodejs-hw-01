import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const existingContacts = await readContacts();
    if (existingContacts.length > 0) {
      existingContacts.pop();
      await writeContacts(existingContacts);
    } else {
      console.log('Список контактів порожній');
    }
  } catch (error) {
    console.log('Не вдальось видалити останній контакт:', error.message);
  }
};

removeLastContact();
