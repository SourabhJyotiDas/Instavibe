import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
   username: { type: String, required: true, unique: true, trim: true },
   fullName: { type: String },
   email: { type: String, required: true, unique: true },
   passwordHash: { type: String },
   bio: { type: String, default: '' },
   avatar: { type: String }, // profile picture URL
   followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
   following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
   isVerified: { type: Boolean, default: false },
   createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.User || mongoose.model('User', userSchema);
