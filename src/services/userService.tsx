import Axios from "axios";

const developmentDB = process.env.REACT_APP_DB;

export const createProductToDB = async (product) => {
  try {
    const res = await Axios.put(developmentDB + "/create-product", product);
    console.log(res.data);
    return res.data;
  } catch (err) {
    // return err.response.data.message;
  }
};
