import db from '../db';

async function getAllUsers() {
  const users = await db('users').select();

  return users;
}

async function getUserById(id: number) {
  const user = await db('users').where({ id }).first();

  return user;
}

export { getAllUsers, getUserById };
