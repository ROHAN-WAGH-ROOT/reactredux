import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions';
import style from './todo.module.css';
const Todo = () => {
	const dispatch = useDispatch();
	const [ inputData, setInputData ] = useState('');
	const list = useSelector((state) => state.Reducer.list);
	return (
		<div className={style.body}>
			<div>
				<figure className={style.Heading}>Hello,Buddy</figure>
			</div>
			<div className={style.input}>
				<input
					className={style.inputValue}
					value={inputData}
					onChange={(e) => {
						setInputData(e.target.value);
					}}
					type="text"
					placeholder="Write"
				/>
				<button className={style.addButton} onClick={() => dispatch(addTodo(inputData), setInputData(''))}>
					ADD
				</button>
			</div>
			<div>
				<div className={style.output}>
					{list.map((datas) => {
						return (
							<div style={{ display: 'inline-flex' }}>
								<p
									style={{
										margin: '10px',
										background: 'linear-gradient(to right, #33ccff 0%, #ff99cc 100%)',
										width: '300px',
										height: '50px',
										textAlign: 'center',
										justifyItems: 'center'
									}}
								>
									{datas.data}
								</p>
								<button className={style.addButton} onClick={() => dispatch(deleteTodo(datas.id))}>
									Delete
								</button>
							</div>
						);
					})}
				</div>
			</div>
			<div style={{ textAlign: 'center' }}>
				<button className={style.addButton} onClick={() => dispatch(removeTodo())}>
					Delete All
				</button>
			</div>
		</div>
	);
};
export default Todo;
