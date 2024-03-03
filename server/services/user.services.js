import learningMongoDBModel from "../models/userRequest.js";

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
