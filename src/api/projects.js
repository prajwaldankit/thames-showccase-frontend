import { get, post, put, del } from "./base";

export const createProject = (data) => post("/projects", data);

export const getAllProjects = () => get("/projects");

export const getProjectById = (id) => get(`/projects/${id}`);

export const updateProjectById = (id, data) => put(`/projects/${id}`, data);

export const deleteProjectById = (id) => del(`/projects/${id}`);
