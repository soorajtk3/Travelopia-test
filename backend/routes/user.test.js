const request = require("supertest");
const app = require("../app");
// GET CALL
describe("Get all users", () => {
  it("should get all users", async () => {
    await request(app)
      .get("/users")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

// POST CALL
describe("POST /users", () => {
  describe("when name,email,destination,travellers,budget", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/users").send({
        name: "sample",
        email: "sample@gmail.com",
        destination: "Africa",
        travellers: 2,
        budget: 100,
      });
      expect(response.statusCode).toBe(200);
    });
  });
});
// Error case
describe("when the name or email or destination or travellers or budget is missing from request body", () => {
  test("should return a 400 status code", async () => {
    const response = await request(app).post("/users").send({
      name: "sample",
      email: "sample@gmail.com",
      travellers: 2,
      budget: 100,
    });
    expect(response.statusCode).toBe(400);
  });
});
