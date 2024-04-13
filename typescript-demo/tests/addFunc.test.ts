import { describe, expect } from '@jest/globals';
import { add } from "../src/addFunc";

describe("Math functions", () => {
  it("should add two numbers correctly", () => {
    expect(add(1, 2)).toEqual(3);
  });
});