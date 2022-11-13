import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://sheets.googleapis.com/v4/spreadsheets/1uBjBThvJR6Eweme8Kd66GKbWmH9oh42Tbf_qKD0qkmQ/values/catalog?alt=json&key=${apiKey}`;

const getProducts = async () => {
  try {
    const { data } = await axios({ url });
    return data;
  } catch (error) {
    console.log('getProducts ', error);
    return null;
  }
}

export default getProducts;
