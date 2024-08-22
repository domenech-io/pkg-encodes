declare namespace encodes {
	type Options = {
		charcode: number;
		symbolsQtty: number;
	};

	class Letterize {
		static From(n: number, options?: { charcode?: number; symbolsQtty?: number }): string;
	}

	class Numerize {
		static From(str: string, options?: { charcode?: number; symbolsQtty?: number }): number;
	}
}

export = encodes;
