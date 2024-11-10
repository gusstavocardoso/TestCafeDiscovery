import { Selector, t } from "testcafe";

class CartPage {
	constructor() {
		this.pick = Selector("#quantity1").nextSibling("button");
		this.pedal = Selector("#quantity2").nextSibling("button");
	}

	async addProcuct(product) {
		if (product === "pick") {
			await t.click(this.pick);
		}

		if (product === "pedal") {
			await t.click(this.pick);
		}
	}
}

export default new CartPage();
