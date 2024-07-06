import { Schema, model } from "mongoose";
import { TBlog } from "./blog.interface";





const blogSchema = new Schema<TBlog>({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,

    },
    imageLink: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    readingTime: {
        type: String,
        required: true,
    },
})

export const BlogModel = model<TBlog>('Blog', blogSchema);
