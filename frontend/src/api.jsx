import axios from 'axios';

const API_URL = 'https://node-projects-2.onrender.com/api';

export const createMentor = async (mentorData) => {
  return await axios.post(`${API_URL}/mentor`, mentorData);
};

export const createStudent = async (studentData) => {
  return await axios.post(`${API_URL}/student`, studentData);
};

export const assignStudents = async (data) => {
  return await axios.post(`${API_URL}/assign-student`, data);
};

export const changeMentor = async (studentId, data) => {
  return await axios.put(`${API_URL}/change-mentor/${studentId}`, data);
};

export const getStudentsByMentor = async (mentorId) => {
  return await axios.get(`${API_URL}/students-by-mentor/${mentorId}`);
};

export const getMentors = async () => {
  return await axios.get(`${API_URL}/mentor`);
};

export const getStudents = async () => {
  return await axios.get(`${API_URL}/student`);
};

export const getPreviousMentor = async (studentId) => {
  return await axios.get(`${API_URL}/previous-mentor/${studentId}`);
};
