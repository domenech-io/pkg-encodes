const { describe, it } = require("node:test");
const assert = require("node:assert");
const { Letterize, Numerize } = require("../encodes.js");

const numbers = Array.from({ length: 27 }, (_, i) => i * 26);

numbers.forEach((n) => {
	describe(`letterize ${n}`, () => {
		it(`should correctly convert ${n} to letter and back`, () => {
			const letter = Letterize.From(n);
			const code = Numerize.From(letter);
			assert.equal(code, n);
		});
	});
});
