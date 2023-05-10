import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getUserAlbums = async (userId) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAlbumPhotos = async (albumId) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );
    const limitedPhotos = response.data.slice(0, 5);
    return limitedPhotos;
  } catch (error) {
    console.log(error);
    return [];
  }
};
