import express from 'express'
import { verifyToken } from '../middleware/auth.js'
const router = express.Router();
import { getUser,getUserFriends,addRemoveFriend } from '../controllers/users.js';

// READ 
router.get("/:id", verifyToken,getUser);
router.get("/:id/friends", verifyToken, getUserFriends);


// UPDATE 
router.put("/:id/:friendId", verifyToken,addRemoveFriend)

export default router