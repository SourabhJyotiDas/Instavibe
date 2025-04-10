const postSchema = new mongoose.Schema({
   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   imageUrl: { type: String, required: true },
   caption: { type: String },
   tags: [{ type: String }],
   likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
   comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
   createdAt: { type: Date, default: Date.now }
 });
 
 export default mongoose.models.Post || mongoose.model('Post', postSchema);
 