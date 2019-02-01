var initState = {
	name: '',
	money: 0
};

export default function (state = initState, action: any) {
	switch (action.type) {
			case 'INIT_PHONE':
				return {
					...state,
					name: action.data.name,
					money: action.data.money
				};
			case 'SET_MONEY':
				return {
					...state,
					money: action.data.money
				};
			default:
				return state;
	}
}