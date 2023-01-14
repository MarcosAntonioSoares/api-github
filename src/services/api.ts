import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export async function getUser(login: string) {
  try {
    const response = await api.get(`/users/${login}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getRepositories(login: string) {
  try {
    const response = await api.get(`/users/${login}/repos`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
