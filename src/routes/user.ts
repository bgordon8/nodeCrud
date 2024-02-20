import express from 'express';
import {
  getAllUsers,
  getUserById,
  deleteUser,
  createUser,
  updateUser,
} from '../controllers/userController';
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

router.delete('/users/:id', async (req, res, next) => {
  try {
    const user = await deleteUser(parseInt(req.params.id));
    res.status(200).json({ success: true, user });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    });
  }
});

router.post('/users', async (req, res, next) => {
  try {
    const user = await createUser(req);
    res.status(200).json({ success: true, user });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    });
  }
});

router.put('/users/:id', async (req, res, next) => {
  try {
    const user = await updateUser(req);
    res.status(200).json({ success: true, user });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    });
  }
});

export default router;
