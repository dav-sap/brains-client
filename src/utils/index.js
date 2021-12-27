
const safeParsing = (jsonStr) => {
	try {
		return JSON.parse(jsonStr);
	} catch (e) {
		return null;
	}
};

export {
	safeParsing
}
