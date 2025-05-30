import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const allContacts = await readContacts(); // const totalContacts = await readContacts().length
  const totalContacts = allContacts.length;
  return totalContacts;
};

console.log(await countContacts());
