'use client';

import React from 'react';
import styles from '@/app/page.module.scss';
import CardList from '../ui/CardList/CardList';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import ButtonFilter from '@/ui/ButtonFilter/ButtonFilter';

const Home = () => {
	return (
		<Provider store={store}>
			<main className={styles.main}>
				<article className={styles.cardlist}>
					<h1 className={styles.title}>Тестовое задание</h1>
					<section className={styles.section}>
						<ButtonFilter text={'Фильтровать карточки'} />
						<CardList />
					</section>
				</article>
			</main>
		</Provider>
	);
};

export default Home;
