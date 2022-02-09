import { client, checkError } from './client';

export const fetchEntryList = async () => {
  const response = await client.from('weekly').select('*');
  return checkError(response);
};

export const updateEntryList = async (newEntry) => {
  const response = await client.from('weekly').insert([newEntry]);
  return checkError(response);
};

export const deleteEntryById = async (id) => {
  const response = await client.from('weekly').delete().match({ id });
  return checkError(response);
};
