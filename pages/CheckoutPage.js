import { Selector, t } from "testcafe";

class CheckoutPage {
	constructor() {
		this.boleto = Selector("#boleto");
		this.pix = Selector("#cartao");
		this.order = Selector("#finalizeOrder");
	}

	async paymentMethod(paymentMethod) {
		if (paymentMethod === "boleto") {
			await t.click(this.boleto);
		}

		if (paymentMethod === "pix") {
			await t.click(this.pix);
		}
	}

	async finalizeOrder() {
		await t.click(this.order);
	}
}

export default new CheckoutPage();
