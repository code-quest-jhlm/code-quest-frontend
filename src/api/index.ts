import axios from 'axios';

const CodeQuestAPI = axios.create({
  baseURL: 'http://localhost:5173/home',
});

export default CodeQuestAPI;
