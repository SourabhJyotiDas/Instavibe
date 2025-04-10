const storySchema = new mongoose.Schema({
   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
   mediaUrl: { type: String, required: true },
   mediaType: { type: String, enum: ['image', 'video'], required: true },
   viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
   createdAt: { type: Date, default: Date.now },
   expiresAt: { type: Date } // 24 hours expiry logic
 });
 
 export default mongoose.models.Story || mongoose.model('Story', storySchema);
 