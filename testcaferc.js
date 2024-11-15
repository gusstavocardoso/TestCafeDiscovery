import dotenv from "dotenv";
dotenv.config();

const baseUrl = process.env.BASE_URL;

module.exports = {
	browsers: ["chrome", "firefox"],
	baseUrl: baseUrl,
	skipJsErrors: true,
	debugMode: true,
	debugOnFail: true,
	customActions: {},
};
