'use client';

import React, { FC } from 'react';
import styles from './index.module.scss';
import Button from '@/ui/Button/Button';
import { cardSlice } from '@/store/reducers/CardSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

interface CardProps {
	id: number;
	image: string;
	title: string;
}

const Card: FC<CardProps> = ({ image, title }) => {
	const { isLiked } = useAppSelector((state) => state.cardReducer);
	const { likeCard } = cardSlice.actions;
	const dispatch = useAppDispatch();

	return (
		<div className={styles.card}>
			<div className={styles.card__wrapper}>
				<img src={image} alt={title} className={styles.card__image} />
			</div>
			<h3 className={styles.card__title}>{title}</h3>
			<div className={styles.card__buttons}>
				<Button likeButton={true}></Button>
				<Button deleteButton={true}></Button>
			</div>
		</div>
	);
};

export default Card;
