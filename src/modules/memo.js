const CREATE_MEMO = 'memo/CREATE_MEMO';
const CLICK_MEMO = 'memo/CLICK_MEMO';

export const create = (payload) => ({ type: CREATE_MEMO, data: payload });
export const click = (payload) => ({ type: CLICK_MEMO, data: payload });
const initialMemo = [];

const memo_list = (state = initial, action) => {
	switch (action.type) {
		case CREATE_MEMO:
			return [...state, { Title: action.data.title, Desc: action.data.desc }];

		default:
			return state;
	}
};
export default memo_list;
