import axios from '@/services/axios';

export async function fetchLocations() {
  try {
    const response = await axios.get('locations/');
    return response.data;
  } catch (error) {
    console.error('Error al obtener Ubicaciones:', error);
    throw error;
  }
}
