const commentSchema = new mongoose.Schema({
   post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
   text: { type: String, required: true },
   likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
   createdAt: { type: Date, default: Date.now }
 });
 
 export default mongoose.models.Comment || mongoose.model('Comment', commentSchema);
 