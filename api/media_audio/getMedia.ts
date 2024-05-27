import axios from "axios"


export const getMedia = async (url: string) => {
  try {
    const response = await axios(url,
      {
        headers: {
          "Authorization": `Bearer ${process.env.GRAPH_API_TOKEN}`
        },
        responseType: "stream"
      });

    return response.data

  } catch (error: any) {
    console.log("ERRORAUDIOMEDIA", error.message);
  }
};