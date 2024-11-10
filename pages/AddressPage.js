import { Selector, t } from "testcafe";

class AddressPage {
	constructor() {
		this.street = Selector("#street");
		this.city = Selector("#city");
		this.state = Selector("#state");
		this.option = Selector(this.state).find("option");
		this.addressButton = Selector('#addressForm button[type="submit"]');
	}

	async userAddress(street, city, state) {
		await t
			.typeText(this.street, street)
			.typeText(this.city, city)
			.click(this.state)
			.click(this.option.withText(state))
			.click(this.addressButton);
	}
}

export default new AddressPage();
