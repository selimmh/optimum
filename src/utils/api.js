import axios from "axios";

// users
const usersUrl = "http://localhost:8000/users";

export const getallUsers = async (id) => {
  id = id || "";
  return await axios.get(`${usersUrl}/${id}`);
};

export const addUser = async (user) => {
  return await axios.post(usersUrl, user);
};

export const editUser = async (id, user) => {
  return await axios.put(`${usersUrl}/${id}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${usersUrl}/${id}`);
};

// buildings
const buildingsUrl = "http://localhost:8000/buildings";

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
const officesUrl = "http://localhost:8000/offices";

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
