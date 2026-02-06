const API_URL =
  'https://restcountries.com/v3.1/all?fields=name,population,continents,languages';

export async function getCountries() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Error al obtener los países');
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Formato de datos inválido');
    }

    return data;
  } catch (error) {
    console.error('[API ERROR]', error.message);
    return [];
  }
}
