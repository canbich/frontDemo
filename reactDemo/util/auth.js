import axios from 'axios';

const API_KEY = 'AIzaSyCcqBQ-nXqh-Uinh9JzlfoC6PSUryxNLk0';

export async function createUser(email, password) {
  try {
    const response = await axios.post('https://localhost:7250/api/User/register', {
      email: email,
      password: password,
      firstName: 'string',
      lastName: 'string',
      gender: 'string',
      address: 'string',
    }, {
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
      },
    });

    console.log('Kayıt başarılı:', response.data);
    // Kayıt başarılı olduğunda yapılacak işlemler
  } catch (error) {
    console.error('Kayıt hatası:', error);
    // Kayıt başarısız olduğunda yapılacak işlemler
  }
}
