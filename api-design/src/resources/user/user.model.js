const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    settings: {
      theme: {
        type: String,
        required: true,
        default: 'dark',
      },
    },
    notifications: {
      type: Boolean,
      required: true,
      default: true,
    },
    compactMode: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

const User = mongoose.model('user', userSchema);
