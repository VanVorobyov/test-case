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
		const fetchData = async () => {
			try {
				const response = await getData;
				setData(response);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
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
			{!data.length && <p>No data found.</p>}
		</>
	);
};

export default CardList;
