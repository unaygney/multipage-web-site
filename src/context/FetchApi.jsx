import axios from 'axios';

const getData = async () => {
  try {
     
    const response = await axios.get('src/context/data.json');
    return response.data;
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    return null;
  }
};

export default getData


