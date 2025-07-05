const API_BASE_URL =
	// @ts-ignore
	import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const get = async (url) => {
	const headers = {};
	// @ts-ignore
	const res = await fetch(`${API_BASE_URL}${url}`, { method: "GET", headers });

	if (!res.ok) throw new Error(`GET ${url} failed`);
	return res.json();
};

export const post = async (url, data) => {
	const headers = { "Content-Type": "application/json" };

	const res = await fetch(`${API_BASE_URL}${url}`, {
		method: "POST",
		headers,
		body: JSON.stringify(data),
	});

	if (!res.ok) throw new Error(`POST ${url} failed`);
	return res.json();
};

export const put = async (url, data) => {
	const headers = { "Content-Type": "application/json" };

	const res = await fetch(`${API_BASE_URL}${url}`, {
		method: "PUT",
		headers,
		body: JSON.stringify(data),
	});

	if (!res.ok) throw new Error(`PUT ${url} failed`);
	return res.json();
};

export const del = async (url) => {
	const headers = {};

	const res = await fetch(`${API_BASE_URL}${url}`, {
		method: "DELETE",
		// @ts-ignore
		headers,
	});

	if (!res.ok) throw new Error(`DELETE ${url} failed`);
	return res.json();
};
