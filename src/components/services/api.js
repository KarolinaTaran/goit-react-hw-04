import axios from "axios";

const ACCESS_KEY = "koIxD-H7FXNiGBFhuJFP3mDWSx3jDApFHYZ-bNUD84I";

// export const requestPics = async (imageSize = "small") => {
//   try {
//     const response = await axios.get("https://api.unsplash.com/photos", {
//       headers: {
//         Authorization: `Client-ID ${ACCESS_KEY}`,
//       },
//     });
//     const pics = response.data.map((pic) => {
//       const imageUrl = pic.urls && pic.urls[imageSize];
//       return {
//         ...pic,
//         imageUrl: imageUrl || "",
//       };
//     });
//     return pics;
//   } catch (error) {
//     console.error("Error pics", error);
//     return [];
//   }
// };

export const requestPicsByQuery = async (query) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?page=1&query=${query}`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );
  return data;
};
