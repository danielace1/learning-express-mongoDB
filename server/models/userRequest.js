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

// create
export const createOperation = async (data) => {
  try {
    const result = await learningMongoDBModel.create(data);
    console.log("Result of createOperation", result);
  } catch (error) {
    throw error;
  }
};

// read data
export const getAllData = async (data) => {
  try {
    const data = await learningMongoDBModel.find({});
    return data;
  } catch (error) {}
};

// update data
export const updateData = async (id, data) => {
  try {
    return await learningMongoDBModel.updateOne({ _id: id }, data, {
      new: true,
    });
  } catch (error) {
    throw error;
  }
};

// delete data
export const deleteDataById = async (id) => {
  try {
    return await learningMongoDBModel.deleteOne({ _id: id });
  } catch (error) {
    throw error;
  }
};
