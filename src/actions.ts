export const initPhone = (data: object) => {
	return {
		type: 'INIT_PHONE',
		data
	};
};
export const setPhoneMoney = (data: object) => {
	return {
		type: 'SET_MONEY',
		data
	};
};