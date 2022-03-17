// import axips
import axios from "axios";

// base url
axios.defaults.baseURL = "http://192.168.1.100:8080";

//login
export const loginUser = async (values) => {
  console.log(values);
  return await axios.post("/login", { values });
};

// users
const usersUrl = `/allUsers`;
const addUserUrl = `/user`;

export const getallUsers = async (id) => {
  id = id || "";
  return await axios.get(`${usersUrl}/${id}`);
};

export const addUser = async (user) => {
  return await axios.post(addUserUrl, user);
};

export const editUser = async (id, user) => {
  console.log(id, user);
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
const addOfficeUrl = `/office`;

export const getallOffices = async (id) => {
  id = id || "";
  return await axios.get(`${officesUrl}/${id}`);
};
export const addOffice = async (office) => {
  return await axios.post(addOfficeUrl, office);
};

export const editOffice = async (id, office) => {
  return await axios.put(`${officesUrl}/${id}`, office);
};

export const deleteOffice = async (id) => {
  return await axios.delete(`${officesUrl}/${id}`);
};

// assign, de-assing office

const assignUrl = `/assignToOffice`;
const deassignUrl = `/deassignFromOffice`;

export const assignToOffice = async (userId, officeId) => {
  return await axios.post(assignUrl, {
    userId: parseInt(userId),
    officeId: parseInt(officeId),
  });
};

export const deAssignToOffice = async (userId, officeId) => {
  return await axios.post(deassignUrl, {
    userId: parseInt(userId),
    officeId: parseInt(officeId),
  });
};

// remote requests

const remoteReq = `/remoteReq`;
const getRemoteReq = `/allRemoteReq`;

export const addRemoteReq = async (request) => {
  console.log(request);
  return await axios.post(remoteReq, request);
};

export const getallRemoteReqs = async (id) => {
  id = id || "";
  return await axios.get(`${allOfficeAdmins}/${id}`);
};

export const getallRemoteReqsAdmin = async (id) => {
  id = id || "";
  return await axios.get(`${allOfficeAdmins}/${id}`);
};

export const rejectReason = async (id, request) => {
  return await axios.put(`${remoteReq}/${id}`, request);
};

// pending

const getPendingReq = `/pendingRemoteReq`;

export const getallPendingReqs = async (id) => {
  id = id || "";
  return await axios.get(`${getPendingReq}/${id}`);
};

// office admin
const allOfficeAdmins = `/allOfficeAdmins`;

export const getAllOfficeAdmins = async (id) => {
  id = id || "";
  return await axios.get(`${allOfficeAdmins}/${id}`);
};
