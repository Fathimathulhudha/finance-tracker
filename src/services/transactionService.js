import axios from "axios";

const API =
  "http://localhost:5000/api/transactions";

export const getTransactions = () =>
  axios.get(API);

export const addTransaction = (data) =>
  axios.post(API, data);

export const getSummary = () =>
  axios.get(`${API}/summary`);

export const getChartData = () =>
  axios.get(`${API}/chart`);

export const getInsight = () =>
  axios.get(`${API}/insight`);