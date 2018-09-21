const normalizePhone = (value, previousValue) => {
	if (!value) {
		return value;
	}
	const onlyNums = value.replace(/[^\d]/g, '');
	if (!previousValue || value.length > previousValue.length) {
		// typing forward
		if (onlyNums.length === 3) {
			return onlyNums + '-';
		}
		if (onlyNums.length === 6) {
			return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3) + '-';
		}
	}
	if (onlyNums.length <= 3) {
		return onlyNums;
	}
	if (onlyNums.length <= 6) {
		return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3);
	}
	return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6, 10);
};

const normalizePhoneLoose = (value) => {
	if (!value) {
		return value;
	}

	return value.replace(/[^\d\-.+]/g, '');
};

const normalizeZip = (value) => {
	if (!value) {
		return value;
	}

	return value.replace(/[^\d-]/g, '');
};

const normalizeIntegers = (value) => {
	if (!value) {
		return value;
	}

	return value.replace(/[^\d]/g, '');
};

const normalizeNumbers = (value) => {
	if (!value) {
		return value;
	}

	return value.replace(/[^\d.]/g, '');
};

const normalizeMax = (value, previousValue, allValues, previousAllValues) => {
	if (allValues.min !== previousAllValues.min) {
		// min changed
		if (value === undefined || Number(allValues.min) > Number(value)) {
			return allValues.min;
		}
	}
	return value;
};

const normalizeMin = (value, previousValue, allValues, previousAllValues) => {
	if (allValues.max !== previousAllValues.max) {
		// max changed
		if (value === undefined || Number(allValues.max) < Number(value)) {
			return allValues.max;
		}
	}
	return value;
};

export {normalizePhone, normalizePhoneLoose, normalizeMin, normalizeMax, normalizeIntegers, normalizeNumbers, normalizeZip};
