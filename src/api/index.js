import axios from 'axios';

export const getQuestions = async (id) => {
  const { data } = await axios.get(`https://api.g0-100.p-e.kr/api/v1/question/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      memberId: '1',
    },
  });

  return data;
};

export const getAnswers = async (id) => {
  const { data } = await axios.get(`https://api.g0-100.p-e.kr/api/v1/answers/${id}`, {
    headers: {
      memberId: 1,
    },
  });

  return data;
};

export const getWeights = async (id) => {
  const { data } = await axios.get(`https://api.g0-100.p-e.kr/api/v1/answers/weight/${id}`, {
    headers: {
      memberId: 1,
    },
  });

  return data;
};

export const getResult = async (weight) => {
  const { data } = await axios.get(`https://api.g0-100.p-e.kr/api/v1/result/${1}/${weight}`, {
    headers: {
      'Content-Type': 'application/json',
      memberId: 1,
    },
  });

  return data;
};
