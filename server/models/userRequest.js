import mongoose from "mongoose";
import { Schema } from "mongoose";

const rules = new Schema({
  technology: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 10,
  },
  title: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 180,
  },
  desc: {
    type: String,
    required: true,
    minLength: 150,
    maxLength: 2000,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

const learningMongoDBModel = mongoose.model("learning-mongodb", rules);

export default learningMongoDBModel;
