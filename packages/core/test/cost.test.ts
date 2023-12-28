import { expect, test } from "vitest";
import { calculateCost } from "../src/cost";

test("Lowest tier", () => {
    const storage = 10;

    const expectedCost = 4 * storage * 100;
    const cost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});

test("Middle tier", () => {
    const storage = 100;

    const expectedCost = 2 * storage * 100;
    const cost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});

test("Highest tier", () => {
    const storage = 101;

    const expectedCost = 1 * storage * 100;
    const cost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});
