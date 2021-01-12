const axios = require("axios");

const fetchData = async (url) => {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (err) {
    return err;
  }
};

export default fetchData;
