// services/productService.js
import * as httpRequest from "../utils/httpRequest";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getAllNews = async () => {
  try {
    const response = await httpRequest.get("api/news/all", authHeader());
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error getAllNew", error);
    return [];
  }
};

export const getNewById = async (id) => {
  try {
    const response = await httpRequest.get(`api/news/${id}`, authHeader());
    return response;
  } catch (error) {
    console.error("Error getNewById", error);
    return null;
  }
};

export const createNew = async (newData) => {
  try {
    const formData = new FormData();
    for (let key in newData) {
      formData.append(key, newData[key]);
    }
    const response = await httpRequest.post("api/news", formData, authHeader());
    return response;
  } catch (error) {
    console.error("Error createNew", error);
    return null;
  }
};

export const updateNew = async (id, data) => {
  try {
    const response = await httpRequest.put(
      `api/news/${id}`,
      data,
      authHeader()
    );
    return response;
  } catch (error) {
    console.error("Error updateNew", error);
    return null;
  }
};

export const deleteNew = async (id) => {
  try {
    const response = await httpRequest.del(`api/news/${id}`, authHeader());
    return response;
  } catch (error) {
    console.error("Error deleteNew", error);
    return null;
  }
};
