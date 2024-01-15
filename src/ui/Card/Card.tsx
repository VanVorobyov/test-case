'use client';

import React, { FC } from 'react';
import styles from './index.module.scss';
import Button from '@/ui/Button/Button';
import { useAppDispatch } from '@/hooks/redux';
import { cardSlice } from '@/store/reducers/CardSlice';
import Image from 'next/image';

interface CardProps {
	id: number;
	image: string;
	title: string;
	isLiked: boolean;
}

const Card: FC<CardProps> = ({ image, title, id, isLiked }) => {
	const dispatch = useAppDispatch();
	const { toggleLike, removeCard } = cardSlice.actions;

	const handleLikeButtonClick = () => {
		dispatch(toggleLike({ id }));
	};

	const handleDeleteButtonClick = () => {
		dispatch(removeCard({ id }));
	};

	return (
		<div className={styles.card}>
			<div className={styles.card__wrapper}>
				<Image
					width={150}
					height={200}
					priority={true}
					src={image}
					alt={title}
					className={styles.card__image}
				/>
			</div>
			<h3 className={styles.card__title}>{title}</h3>
			<div className={styles.card__buttons}>
				<Button
					likeButton={true}
					onClick={handleLikeButtonClick}
					isLiked={isLiked}
				></Button>
				<Button deleteButton={true} onClick={handleDeleteButtonClick}></Button>
			</div>
		</div>
	);
};

export default Card;
