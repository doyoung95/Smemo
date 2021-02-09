import React from 'react';
import TodoEmpty from '../images/todoEmpty.png';

function TodoPage() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<img alt="" src={TodoEmpty} />
		</div>
	);
}

export default TodoPage;
