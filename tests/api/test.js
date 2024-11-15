import {
	auth,
	createBook,
	deleteBook,
	getBookId,
	updateBook,
} from "../../utils/utils.js";
import { createdBook, updatedBook } from "../../data/books.json";
import dotenv from "dotenv";

dotenv.config();
const username = process.env.USER_API;
const password = process.env.PASS_API;

let response;
let token;
let bookingId;

fixture`TestCafe Discovery`.beforeEach(async (t) => {
	token = await auth(t, username, password);
	console.log("token:", token);
});

test("Should http requests successfully", async (t) => {
	response = await createBook(t, createdBook);

	await t.expect(response.status).eql(200);
	await t.expect(response.body.booking.firstname).eql("Eric");
	console.log(response.body);
	bookingId = response.body.bookingid;

	response = await updateBook(t, bookingId, updatedBook, token);

	await t.expect(response.status).eql(200);
	await t.expect(response.body.firstname).eql("Jimi");
	console.log(response.body);

	response = await getBookId(t, bookingId);

	await t.expect(response.status).eql(200);
	await t.expect(response.body.firstname).eql("Jimi");
	console.log(response.status);
	console.log(response.body);

	response = await deleteBook(t, bookingId, token);

	await t.expect(response.status).eql(201);
	console.log(response.status);
});
