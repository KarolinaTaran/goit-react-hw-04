import axios from "axios";

const ACCESS_KEY = "koIxD-H7FXNiGBFhuJFP3mDWSx3jDApFHYZ-bNUD84I";

export const requestPicsByQuery = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=20`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );

  return data;
};
