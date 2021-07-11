import moongose from "mongoose";

const postSchema = moongose.Schema({
    message: String,
    creator: String,
    name: String,
    selectedFile: String,
    likes: {
        type:[String],
        default:[],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const PostMessage = moongose.model("PostMessage", postSchema);

export default PostMessage;