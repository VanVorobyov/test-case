'use client';

import React, { FC } from 'react';
import styles from './index.module.scss';
import HeartIcon from '@/ui/Icons/HeartIcon';
import HeartFillIcon from '@/ui/Icons/HeartFillIcon';
import DeleteIcon from '@/ui/Icons/DeleteIcon';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { cardSlice } from '@/store/reducers/CardSlice';

interface ButtonProps {
	likeButton?: boolean;
	deleteButton?: boolean;
}

const Button: FC<ButtonProps> = ({ likeButton, deleteButton }) => {
	const { isLiked } = useAppSelector((state) => state.cardReducer);
	const { likeCard } = cardSlice.actions;
	const dispatch = useAppDispatch();

	const handleLikeButtonClick = () => {};

	return (
		<button className={styles.button} onClick={() => dispatch()}>
			{!isLiked && likeButton && <HeartIcon />}
			{deleteButton && <DeleteIcon />}
			{isLiked && likeButton && <HeartFillIcon />}
		</button>
	);
};

export default Button;
