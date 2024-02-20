import db from '../db';
import { Request } from 'express';

async function getAllUsers() {
  const users = await db('users').select();

  return users;
}

async function getUserById(id: number) {
  const user = await db('users').where({ id }).first();

  return user;
}

async function deleteUser(id: number) {
  const user = await db('users').where({ id }).del().returning('*');
  return user;
}

async function createUser(req: Request) {
  const [user] = await db('users')
    .insert({
      email: req.body.email,
      username: req.body.username,
    })
    .returning('*');

  return user;
}

export { getAllUsers, getUserById, deleteUser, createUser };
