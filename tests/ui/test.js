import { Selector } from "testcafe";
import config from "../../testcaferc.js";
import dotenv from "dotenv";

import loginPage from "../../pages/LoginPage.js";
import productPage from "../../pages/CartPage.js";
import addressPage from "../../pages/AddressPage.js";
import checkoutPage from "../../pages/CheckoutPage.js";

import address from "../../data/address.json";

dotenv.config();
const username = process.env.USER;
const password = process.env.PASS;

fixture`TestCafe Discovery`.page`${config.baseUrl}`;

test("Should complete order successfully", async (t) => {
	await loginPage.loginUser(username, password);
	await t.expect(loginPage.loginMessage.textContent).eql("Login bem-sucedido!");

	await productPage.addProcuct("pick");

	await addressPage.userAddress(address.address, address.city, address.state);
	await t
		.expect(addressPage.addressMessage.textContent)
		.eql("Endereço salvo com sucesso!");

	await checkoutPage.paymentMethod();
	await t
		.expect(checkoutPage.productValidation.textContent)
		.eql("Produto 1 - R$ 100.00 x 1 = R$ 100.00");

	await checkoutPage.finalizeOrder();
	await t
		.expect(checkoutPage.orderMessage.textContent)
		.eql("Pedido finalizado com sucesso!");
});
