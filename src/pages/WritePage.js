import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { create } from '../modules/memo';
function WritePage({ history }) {
	const [Title, setTitle] = useState('');
	const [Desc, setDesc] = useState('');
	const onTitleHandler = (e) => {
		setTitle(e.currentTarget.value);
	};
	const onDescHandler = (e) => {
		setDesc(e.currentTarget.value);
	};
	let data = { title: Title, desc: Desc };
	const dispatch = useDispatch({ create });

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'center',
				width: '100%',
				height: '50vh',
			}}>
			<div>
				<input type="radio" name="check" value="memo" checked="checked" />
				Memo
				<input type="radio" name="check" value="todo" />
				Todo
			</div>
			<br />
			<input
				type="text"
				placeholder="제목"
				value={Title}
				onChange={onTitleHandler}
			/>
			<br />
			<textarea
				cols="36"
				rows="20"
				placeholder="내용"
				value={Desc}
				onChange={onDescHandler}
			/>
			<br />
			<div>
				<button
					onClick={() => {
						dispatch(create(data));
						history.push('/memo');
					}}>
					create
				</button>
				<button>cancel</button>
			</div>
		</div>
	);
}
export default withRouter(WritePage);
