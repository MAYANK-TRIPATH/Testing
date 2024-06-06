import { describe, it, expect} from '@jest/globals';
import request from "supertest";
import {app} from "../index";

describe("POST /sum", () => {
    it("should return the sum ", async () => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        });

        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    });
})