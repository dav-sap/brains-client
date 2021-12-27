import React from 'react';

const Quest = ({title, img}) => {
	
	return (
		<div className="quest">
			<div className="title">{title}</div>
			<img src={`images/${img}`} />
		</div>
	)
}

export default Quest;
