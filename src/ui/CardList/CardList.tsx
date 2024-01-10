'use client';

import React, { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import Card from '@/ui/Card/Card';
import getData from '@/api/api';

interface CardDataType {
	id: number;
	image: string;
	title: string;
}

const CardList: FC = () => {
	const [data, setData] = useState<CardDataType[]>([]);

	useEffect(() => {
		// getData.then((data) => setData(data));
		getData.then((data) => console.log(data));
	}, []);

	return (
		<>
			<ul className={styles.cardlist}>
				{data.map((card: CardDataType) => (
					<Card
						key={card.id}
						image={card.image}
						title={card.title}
						id={card.id}
					/>
				))}
			</ul>
			{!data.length && <p>No data found in local storage.</p>}
		</>
	);
};

export default CardList;
