'use client';

import React, { FC, useEffect } from 'react';
import styles from './index.module.scss';
import Card from '@/ui/Card/Card';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchCards } from '@/store/reducers/ActionCreators';

interface CardDataType {
	id: number;
	image: string;
	title: string;
	isLiked: boolean;
}

const CardList: FC = () => {
	const { cards, error, isLoading } = useAppSelector((state) => state.cards);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCards());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) {
		return <h1 className={styles.loading}>Идет загрузка...</h1>;
	}

	if (error) {
		return <h1 className={styles.error}>{error}</h1>;
	}

	return (
		<>
			<ul className={styles.cardlist}>
				{cards.map((card: CardDataType) => (
					<Card
						key={card.id}
						image={card.image}
						title={card.title}
						id={card.id}
						isLiked={card.isLiked}
					/>
				))}
			</ul>
		</>
	);
};

export default CardList;
