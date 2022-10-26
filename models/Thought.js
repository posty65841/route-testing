const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// Schema to create Student model
const ThoughtSchema = new Schema(
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
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('thought', ThoughtSchema);

module.exports = Thought;
