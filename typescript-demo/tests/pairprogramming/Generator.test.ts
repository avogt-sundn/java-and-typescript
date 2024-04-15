
import { generatePairs } from "../../src/pairs/generatePairs";

describe("generatePairs", () => {
    it("should generate pairs of users", () => {
        const users = ["User1", "User2", "User3", "User4", "User5"];
        const pairs = generatePairs(users);

        // Assert that the number of pairs is correct
        expect(pairs.length).toBe(users.length * 2);

        // Assert that each pair contains two distinct users
        pairs.forEach(([user1, user2]) => {
            expect(users.includes(user1)).toBe(true);
            expect(users.includes(user2)).toBe(true);
            expect(user1).not.toBe(user2);
        });
    });
});



