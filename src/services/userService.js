import axios from '@/services/axios';

export async function fetchUsers() {
  try {
    const response = await axios.get('users/');
    return response.data;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
}
