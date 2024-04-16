import axios from '@/services/axios';

export async function fetchUnits() {
  try {
    const response = await axios.get('units/');
    return response.data;
  } catch (error) {
    console.error('Error al obtener unidades:', error);
    throw error;
  }
}
