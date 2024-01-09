'use client';

import React, { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import Card from '@/ui/Card/Card';

interface CardDataType {
	id: number;
	name: string;
	image: string;
}

const CardList: FC = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const savedData = localStorage.getItem('data');
		if (savedData) {
			setData(JSON.parse(savedData));
		}
	}, []);

	return (
		<>
			<ul className={styles.cardlist}>
				{data.map((card: CardDataType) => (
					<Card
						key={card.id}
						image={card.image}
						title={card.name}
						id={card.id}
					></Card>
				))}
			</ul>
			{!data.length && <p>No data found in local storage.</p>}
		</>
	);
};

export default CardList;
