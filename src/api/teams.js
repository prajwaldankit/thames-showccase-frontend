import { get, post, put, del } from "./base";

export const createTeam = (data) => post("/teams", data);

export const getAllTeams = () => get("/teams");

export const getTeamById = (id) => get(`/teams/${id}`);

export const updateTeamById = (id, data) => put(`/teams/${id}`, data);

export const deleteTeamById = (id) => del(`/teams/${id}`);
