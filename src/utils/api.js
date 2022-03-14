import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.headers.common['Authorization'] = "AuthToken"


//login
export const loginUser = async (values) => {
  console.log(values);
  return await axios.post('/login', {values})
}

// user
const usersUrl = `/user`;

export const getallUsers = async (id) => {
  id = id || "";

  return await axios.get(`${usersUrl}/${id}`);
};

export const addUser = async (values) => {
  console.log(values)
  return await axios.post('/user', values);
};

export const editUser = async (id, user) => {
  return await axios.put(`${usersUrl}/${id}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${usersUrl}/${id}`);
};

// buildings
const buildingsUrl = `/buildings`;

export const getallBuildings = async (id) => {
  id = id || "";
  return await axios.get(`${buildingsUrl}/${id}`);
};
export const addBuilding = async (building) => {
  return await axios.post(buildingsUrl, building);
};

export const editBuilding = async (id, building) => {
  return await axios.put(`${usersUrl}/${id}`, building);
};

export const deleteBuilding = async (id) => {
  return await axios.delete(`${buildingsUrl}/${id}`);
};

// offices
const officesUrl = `/offices`;

export const getallOffices = async (id) => {
  id = id || "";
  return await axios.get(`${officesUrl}/${id}`);
};
export const addOffice = async (office) => {
  return await axios.post(officesUrl, office);
};

export const editOffice = async (id, office) => {
  return await axios.put(`${usersUrl}/${id}`, office);
};

export const deleteOffice = async (id) => {
  return await axios.delete(`${officesUrl}/${id}`);
};
