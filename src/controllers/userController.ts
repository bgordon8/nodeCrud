import db from '../db';

async function getAllUsers() {
  const users = await db('users').select();

  return users;
}

export default getAllUsers;
