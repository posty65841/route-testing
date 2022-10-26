const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)
  .delete(deleteReaction)

  router.route("/api/thoughts/:thoughtId/reactions")
   .post (addReaction)

   router.route("/api/thoughts/:thoughtId/reactions/:reactionId")
   .delete (deleteReaction)



module.exports = router;



