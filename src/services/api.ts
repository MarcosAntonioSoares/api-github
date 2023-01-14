import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000/',
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
