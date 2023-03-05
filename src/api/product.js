import axios from "../axiosConfig";

export const getAllProducts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/api/product",
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const getProduct = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `/api/product/detail/${id}`,
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const addProduct = (data, token) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `/api/product/add`,
        method: "post",
        headers: {
          "x-access-token": token,
        },
        data,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const deleteProduct = (id, token) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `/api/product/delete/${id}`,
        method: "delete",
        headers: {
          "x-access-token": token,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const updateProduct = (id, name, token) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `/api/product/update/${id}`,
        method: "put",
        headers: {
          "x-access-token": token,
        },
        data: { name },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
