import React from 'react';
import Logo from '../images/Smemo.png';
import NewButton from '../images/newButton.png';
import MemoButton from '../images/memoButton.png';
import TodoButton from '../images/todoButton.png';
import { withRouter } from 'react-router-dom';

function Nav({ history }) {
	return (
		<div
			style={{
				padding: '40px 0px 0px 0px',
				display: 'flex',
				flexDirection: 'column',
			}}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}>
				<img
					alt=""
					style={{
						cursor: 'pointer',
					}}
					src={Logo}
					onClick={() => history.push('/')}
				/>
			</div>
			<div
				style={{
					padding: '40px 0px 40px 0px',
					margin: '40px',
					borderRadius: '20%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					borderBottom: '2px solid #888888',
				}}>
				<img
					alt=""
					style={{ cursor: 'pointer' }}
					src={NewButton}
					onClick={() => history.push('/write')}
				/>
				<img
					alt=""
					style={{ cursor: 'pointer' }}
					src={MemoButton}
					onClick={() => history.push('/memo')}
				/>
				<img
					alt=""
					style={{ cursor: 'pointer' }}
					src={TodoButton}
					onClick={() => history.push('/todo')}
				/>
			</div>
		</div>
	);
}

export default withRouter(Nav);
