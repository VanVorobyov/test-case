'use client';

import React, { FC } from 'react';

interface CardProps {
	id: number;
	image: string;
	title: string;
}

const Card: FC<CardProps> = ({ image, title }) => {
	return (
		<div className="card">
			<img src={image} alt={title} />
			<div className="card-content">
				<h3>{title}</h3>
			</div>
		</div>
	);
};

export default Card;
