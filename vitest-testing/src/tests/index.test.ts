import {describe, it, expect} from "vitest";
import request from "supertest";
import {app} from "../index";

describe("POST /sum", () => {
    it("Should return sum of two", async () => {
        const res = await request(app).post("/sum").send({
            a:0,
            b:0
        });

        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(0);
    });

    it("Should return sum of two numbers", async () => {
        const res = await request(app).post("/sum").send({
            a: ["sdfsfd"]
        });

        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Incorrect inputs");
    });

});

app.listen(3000);