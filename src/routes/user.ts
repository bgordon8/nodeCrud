import express from 'express';
import { getAllUsers, getUserById } from '../controllers/userController';
const router = express.Router();

router.get('/users', async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({ success: true, users });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    });
  }
});

router.get('/users/:id', async (req, res, next) => {
  try {
    const user = await getUserById(parseInt(req.params.id));
    res.status(200).json({ success: true, user });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    });
  }
});

export default router;
