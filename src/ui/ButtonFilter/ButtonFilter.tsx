'use client';

import React, { FC, useState } from 'react';
import styles from './index.module.scss';
import { useAppDispatch } from '@/hooks/redux';
import { cardSlice } from '@/store/reducers/CardSlice';

interface ButtonProps {
	onClick?: () => void;
	text: string;
}

const ButtonFilter: FC<ButtonProps> = ({ onClick, text }) => {
	const dispatch = useAppDispatch();
	const { filterLikedCards } = cardSlice.actions;

	const [isLiked, setIsLiked] = useState(true);

	const handleFilterLikedCards = () => {
		setIsLiked(!isLiked);
		dispatch(filterLikedCards(isLiked));
	};

	return (
		<button className={styles.filter} onClick={handleFilterLikedCards}>
			{text}
		</button>
	);
};

export default ButtonFilter;
