import dotenv from "dotenv";
dotenv.config();

const baseUrl = process.env.BASE_URL;

module.exports = {
	browsers: ["chrome", "firefox"],
	baseUrl: baseUrl,
	skipJsErrors: true,
	debugMode: true,
	debugOnFail: true,
	customActions: {
		async messageValidation(validation) {
			switch (validation) {
				case "login":
					await this.Selector("#loginMessage").textContent;
					break;
				case "address":
					await this.Selector("#addressMessage").textContent;
					break;
				case "cart":
					await this.Selector("#cartItems p").textContent;
					break;
				case "order":
					await this.Selector("#orderMessage").textContent;
					break;
				default:
					break;
			}
		},
	},
};
