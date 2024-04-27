const request = require('supertest');
const app = require('../server');

describe("Testing /api/offers API", () => {
    let token;

    beforeAll(async () => {
        const response = await supertest(server).post("/auth/login").send({ email: "test@gmail.com", password: "test" });
        token = response.body.access_token;
    });

    describe("POST /api/offers", () => {
        it("should create a new offer", async () => {
            const res = await supertest(server)
                .post("/api/offers")
                .set("Authorization", `Bearer ${token}`)
                .send({ title: "testOffer", description: "testDescription" });
            expect(res.status).toBe(201);
            expect(res.body.title).toBe("testOffer");
        });
    });

    describe("GET /api/offers", () => {
        it("should get all offers", async () => {
            const res = await supertest(server)
                .get("/api/offers")
                .set("Authorization", `Bearer ${token}`);
            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
        });
    });

    describe("GET /api/offers/details/:id", () => {
        it("should get an offer by id", async () => {
            const res = await supertest(server)
                .get("/api/offers/details/123456789012345678901234")
                .set("Authorization", `Bearer ${token}`);
            expect(res.status).toBe(200);
            expect(typeof res.body).toBe("object");
        });
    });

    describe("PATCH /api/offers/:id", () => {
        it("should update an offer by id", async () => {
            const res = await supertest(server)
                .patch("/api/offers/123456789012345678901234")
                .set("Authorization", `Bearer ${token}`)
                .send({ title: "updatedTestOffer", description: "updatedTestDescription" });
            expect(res.status).toBe(200);
            expect(res.body.title).toBe("updatedTestOffer");
        });
    });

    describe("DELETE /api/offers/:id", () => {
        it("should delete an offer by id", async () => {
            const res = await supertest(server)
                .delete("/api/offers/123456789012345678901234")
                .set("Authorization", `Bearer ${token}`);
            expect(res.status).toBe(200);
        });
    });
});

