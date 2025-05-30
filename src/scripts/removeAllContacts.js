import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
  } catch (error) {
    console.log('Контакти не було видалено:', error.message);
  }
};

removeAllContacts();
