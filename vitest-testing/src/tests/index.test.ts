import {describe, it, expect, vi} from "vitest";
import request from "supertest";
import {app} from "../index";

//very basic mock function
vi.mock('../db', () => ({
primsaClient: {sum: { create: vi.fn() }}
})); 


// Another mock function eg.

vi.mock("../db", () => {
    return {
        prismaClient: {
            request: {
                create: vi.fn()
            }
        }
    }
})

// for deepmocking only this much code is enough
vi.mock("../db")

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