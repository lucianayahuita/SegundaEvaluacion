require('dotenv').config();
const axios = require('axios');

const registerUser = async (input) => {
  try {
    const response = await axios.post(`${process.env.API_URL}/register`, input);

    const { code, message, user } = response.data;
    return {
      code,
      message,
      user: user || null, 
    };
  } catch (error) {
    console.error('Error al registrar usuario:', error.response?.data || error.message);

    return {
      code: 500,
      message: 'Error al registrar usuario',
      user: null,
    };
  }
};

module.exports = { registerUser };
