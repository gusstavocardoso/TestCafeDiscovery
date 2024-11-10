import { Selector, t } from "testcafe";

class LoginPage {
	constructor() {
		this.username = Selector("#username");
		this.password = Selector("#password");
		this.rememberMe = Selector("#rememberMe");
		this.access = Selector('#loginForm button[type="submit"]');
	}

	async loginUser(user, pass) {
		await t
			.typeText(this.username, user)
			.typeText(this.password, pass)
			.click(this.rememberMe)
			.click(this.access);
	}
}

export default new LoginPage();
