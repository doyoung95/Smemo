import React from 'react';
import MemoEmpty from '../images/memoEmpty.png';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
function MemoPage() {
	const memo_list = useSelector((state) => state.memo_list);

	if (memo_list.length < 1) {
		return (
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<img alt="" src={MemoEmpty} />
			</div>
		);
	} else {
		return (
			<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
				<ol
					style={{
						display: 'flex',
						justifyContent: 'left',
					}}>
					{memo_list.map((cur, idx) => (
						<li
							style={{
								cursor: 'pointer',
								textDecoration: 'underline',
								font: '25px',
								fontWeight: 'bold',
							}}
							key={idx}>
							{cur.Title}
						</li>
					))}
				</ol>
				<div>sdfa</div>
			</div>
		);
	}
}

export default withRouter(MemoPage);
