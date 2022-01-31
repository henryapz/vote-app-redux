const baseUrl = "http://localhost:8080/candidates";

export const getCandidates = () => {
  return fetch(baseUrl).then((res) => res.json());
};
