import React from 'react';
import styles from '@/app/page.module.scss';
import CardList from '../ui/CardList/CardList';
import Button from '@/ui/Button/Button';

const Home = () => {
	return (
		<main className={styles.main}>
			<article className={styles.cardlist}>
				<h1 className={styles.title}>Тестовое задание</h1>
				<section className={styles.todolist__section}>
					<Button likeCard={true} deleteCard={false}></Button>
					<Button deleteCard={true} likeCard={false}></Button>
					<CardList />
				</section>
			</article>
		</main>
	);
};

export default Home;
