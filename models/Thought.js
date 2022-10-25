const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// Schema to create Student model
const studentSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 128,
      min_length: 1,
    },
   createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
     
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Thought = model('thought', studentSchema);

module.exports = Thought;
