const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/user/:Id
router.route('/:Id').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/friend 
router.route('/:userId/friends').post(addFriend);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendsId').delete(removeFriend);

module.exports = router;
