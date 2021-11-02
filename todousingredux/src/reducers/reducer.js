const initialData = {
	list: []
};
const reducer = (state = initialData, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			const { id, data } = action.payload;
			return {
				...state,
				list: [
					...state.list,
					{
						id: id,
						data: data
					}
				]
			};
		case 'DELETE_TODO':
			const newList = state.list.filter((datas) => datas.id !== action.id);

			return {
				...state,
				list: newList
			};
		case 'REMOVEALL_TODO':
			return {
				...state,
				list: []
			};

		default:
			return state;
	}
};
export default reducer;
