import axios from 'axios';

const CodeQuestAPI = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export default CodeQuestAPI;
