import dotenv from "dotenv";
dotenv.config();

const API_URL = process.env.API_URL
let response;
let bookingId;

module.exports = {
	async auth(t, username, password) {
		response = await t.request.post({
			url: `${API_URL}/auth`,
			headers: {
				"Content-Type": "application/json",
			},
			body: { username: username, password: password },
		});

		const token = response.body.token;
		return token;
	},

	async createBook(t, book) {
		response = await t.request.post({
			url: `${API_URL}/booking`,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: book
		});
		bookingId = response.body.bookingid;
		return response
	},

	async updateBook(t, bookingId, book, token) {
		response = await t.request.put({
			url: `${API_URL}/booking/${bookingId}`,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Cookie: `token=${token}`,
			},
			body: book
		});
		return response
	},

	async getBookId(t, bookingId) {
		response = await t.request.get({
			url: `${API_URL}/booking/${bookingId}`,
			headers: {
				Accept: "application/json",
			},
		});
		return response
	},

	async deleteBook(t, bookingId, token) {
		response = await t.request.delete({
			url: `${API_URL}/booking/${bookingId}`,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Cookie: `token=${token}`,
			},
		});
		return response
	},
};

// export async function auth(t, username, password) {
// 	// auth
// 	const response = await t.request.post({
// 		url: `${API_URL}/auth`,
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: { username: username, password: password },
// 	});

// 	const token = response.body.token;
// 	return token;
// }
