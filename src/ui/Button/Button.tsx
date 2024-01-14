'use client';

import React, { FC } from 'react';
import styles from './index.module.scss';
import HeartIcon from '@/ui/Icons/HeartIcon';
import HeartFillIcon from '@/ui/Icons/HeartFillIcon';
import DeleteIcon from '@/ui/Icons/DeleteIcon';

interface ButtonProps {
	likeButton?: boolean;
	deleteButton?: boolean;
	onClick?: () => void;
	isLiked?: boolean;
}

const Button: FC<ButtonProps> = ({
	likeButton,
	deleteButton,
	onClick,
	isLiked,
}) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{!isLiked && likeButton && <HeartIcon />}
			{deleteButton && <DeleteIcon />}
			{isLiked && likeButton && <HeartFillIcon />}
		</button>
	);
};

export default Button;
