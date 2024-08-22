export class Letterize {
	static From(n, options = { charcode: 65, symbolsQtty: 26 }) {
		let result = "";
		let { charcode, symbolsQtty } = options;
		n++; // Adjust to make 0 correspond to 'A'
		while (n > 0) {
			n--; // Adjust for 0-based index
			let R = n % symbolsQtty; // R === remainder
			result = String.fromCharCode(R + charcode) + result;
			n = Math.trunc(n / symbolsQtty);
		}
		return result;
	}
}

export class Numerize {
	static From(str, options = { charcode: 65, symbolsQtty: 26 }) {
		const { charcode, symbolsQtty } = options;
		let result = 0;
		for (let i = 0; i < str.length; i++) {
			result = result * symbolsQtty + (str.charCodeAt(i) - charcode + 1);
		}
		return result - 1;
	}
}
