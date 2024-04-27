const request = require('supertest');
const app = require('../server');


describe("POST /api/purchases", () => {
    it("should create a new purchase", async () => {
        const res = await supertest(server)
            .post("/api/purchases")
            .set("Authorization", `Bearer ${token}`)
            .send({ item: "testItem", amount: 1 });
        expect(res.status).toBe(201);
        expect(res.body.item).toBe("testItem");
        expect(res.body.amount).toBe(1);
    });
});

describe("GET /api/purchases", () => {
    it("should get all purchases", async () => {
        const res = await supertest(server)
            .get("/api/purchases")
            .set("Authorization", `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});

describe("GET /api/purchases/me", () => {
    it("should get all my purchases", async () => {
        const res = await supertest(server)
            .get("/api/purchases/me")
            .set("Authorization", `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});

describe("GET /api/purchases/details/:id", () => {
    it("should get a purchase by id", async () => {
        const res = await supertest(server)
            .get("/api/purchases/details/123456789012345678901234")
            .set("Authorization", `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(typeof res.body).toBe("object");
    });
});

describe("PATCH /api/purchases/:id", () => {
    it("should update a purchase by id", async () => {
        const res = await supertest(server)
            .patch("/api/purchases/123456789012345678901234")
            .set("Authorization", `Bearer ${token}`)
            .send({ amount: 2 });
        expect(res.status).toBe(200);
        expect(res.body.amount).toBe(2);
    });
});

describe("DELETE /api/purchases/:id", () => {
    it("should delete a purchase by id", async () => {
        const res = await supertest(server)
            .delete("/api/purchases/123456789012345678901234")
            .set("Authorization", `Bearer ${token}`);
        expect(res.status).toBe(200);
    });
});

