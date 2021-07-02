import moongose from "mongoose";

const postSchema = moongose.Schema({
    message: String,
    creator: String,
    selectedFile: String,
    likeCount: {
        type:Number,
        default:0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = moongose.model("PostMessage", postSchema);

export default PostMessage;