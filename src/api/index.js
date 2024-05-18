import axios from 'axios';

export const getQuestions = async (id) => {
  const { data } = await axios.get(`https://api.g0-100.p-e.kr/api/v1/question/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
};

export const getAnswers = async (id) => {
  const { data } = await axios.get(`https://api.g0-100.p-e.kr/api/v1/answers/${id}`);

  return data;
};

export const getWeights = async (id) => {
  const { data } = await axios.get(`https://api.g0-100.p-e.kr/api/v1/answers/weight/${id}`);

  return data;
};

export const getResult = async (weight) => {
  const { data } = await axios.get(`https://api.g0-100.p-e.kr/api/v1/result/${1}/${weight}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
};
