'use client';

import React, { FC, useState } from 'react';
import styles from './index.module.scss';
import HeartIcon from '@/ui/Icons/HeartIcon';
import HeartFillIcon from '@/ui/Icons/HeartFillIcon';
import DeleteIcon from '@/ui/Icons/DeleteIcon';

interface ButtonProps {
	likeCard: boolean;
	deleteCard: boolean;
}

const Button: FC<ButtonProps> = ({ likeCard, deleteCard }) => {
	const [isLiked, setIsLiked] = useState(false);

	const handleIsLiked = () => {
		setIsLiked((prevState) => !prevState);
	};

	console.log(isLiked);

	return (
		<button
			className={styles.button}
			onClick={() => {
				likeCard && handleIsLiked();
			}}
		>
			{likeCard && !isLiked && <HeartIcon />}
			{isLiked && <HeartFillIcon />}
			{deleteCard && <DeleteIcon />}
		</button>
	);
};

export default Button;
