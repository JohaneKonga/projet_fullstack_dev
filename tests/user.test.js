describe("POST /api/users", () => {
    it("should create a new user", async () => {
        const res = await supertest(server)
            .post("/api/users")
            .send({ name: "testUser", email: "test@gmail.com", password: "test" });
        expect(res.status).toBe(201);
        expect(res.body.name).toBe("testUser");
        expect(res.body.email).toBe("test@gmail.com");
    });
});

describe("GET /api/users", () => {
    it("should get all users", async () => {
        const res = await supertest(server)
            .get("/api/users")
            .set("Authorization", `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});

describe("GET /api/users/details/:id", () => {
    it("should get a user by id", async () => {
        const res = await supertest(server)
            .get("/api/users/details/123456789012345678901234")
            .set("Authorization", `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(typeof res.body).toBe("object");
    });
});

describe("PATCH /api/users/:id", () => {
    it("should update a user by id", async () => {
        const res = await supertest(server)
            .patch("/api/users/123456789012345678901234")
            .set("Authorization", `Bearer ${token}`)
            .send({ name: "updatedTestUser", email: "updatedTest@gmail.com" });
        expect(res.status).toBe(200);
        expect(res.body.name).toBe("updatedTestUser");
        expect(res.body.email).toBe("updatedTest@gmail.com");
    });
});

describe("DELETE /api/users/:id", () => {
    it("should delete a user by id", async () => {
        const res = await supertest(server)
            .delete("/api/users/123456789012345678901234")
            .set("Authorization", `Bearer ${token}`);
        expect(res.status).toBe(200);
    });
});


