export function generatePairs(users: string[]): [string, string][] {
    const pairs: [string, string][] = [];

    for (let i = 0; i < users.length; i++) {
        for (let j = i + 1; j < users.length; j++) {
            pairs.push([users[i], users[j]]);
        }
    }

    return pairs;
}
