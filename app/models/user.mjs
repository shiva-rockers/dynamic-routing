import mongoose from 'mongoose';

const user = new mongoose.Schema(
    {
       username: String,
       email: String,
    },
);

export default mongoose.model('users', user);