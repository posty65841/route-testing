const { Schema, Types } = require('mongoose');

const assignmentSchema = new Schema(
  {
   
    userName: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
     
    },
    email: {
      type: string,
      required: true,
      unique: true,
    },
    thoughts:[{
      type: Schema.Types.ObjectId,
      ref: 'thought',
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'user',
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = assignmentSchema;
