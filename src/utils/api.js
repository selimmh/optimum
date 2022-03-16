import axios from "axios";
// axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.baseURL = "http://e994-109-98-171-136.ngrok.io";
axios.defaults.headers.common["Authorization"] = "AuthToken";

//login
export const loginUser = async (values) => {
  console.log(values);
  return await axios.post("/login", { values });
};

// users
const usersUrl = `/allUsers`;
// const usersUrl = `/users`;
const addUserUrl = `/user`;

export const getallUsers = async (id) => {
  id = id || "";
  return await axios.get(`${usersUrl}/${id}`);
};

export const addUser = async (user) => {
  return await axios.post(addUserUrl, user);
};

export const editUser = async (id, user) => {
  return await axios.put(`${usersUrl}/${id}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${usersUrl}/${id}`);
};

// buildings
const buildingsUrl = `/allBuildings`;
const addBuildingUrl = `/building`;

export const getallBuildings = async (id) => {
  id = id || "";
  return await axios.get(`${buildingsUrl}/${id}`);
};
export const addBuilding = async (building) => {
  return await axios.post(addBuildingUrl, building);
};

export const editBuilding = async (id, building) => {
  return await axios.put(`${buildingsUrl}/${id}`, building);
};

export const deleteBuilding = async (id) => {
  return await axios.delete(`${buildingsUrl}/${id}`);
};

// offices
const officesUrl = `/allOffices`;
const officeUrl = `/office`;

export const getallOffices = async (id) => {
  id = id || "";
  return await axios.get(`${officesUrl}/${id}`);
};
export const addOffice = async (office) => {
  return await axios.post(officeUrl, office);
};

export const editOffice = async (id, office) => {
  return await axios.put(`${officeUrl}/${id}`, office);
};

export const deleteOffice = async (id) => {
  return await axios.delete(`${officeUrl}/${id}`);
};

// assign office

const assignUrl = `/assignToOffice`;

export const assignToOffice = async (user) => {
  return await axios.post(officeUrl, user);
};
