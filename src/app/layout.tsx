import type { Metadata } from 'next';
import { inter } from '@/vendor/fonts';
import './globals.css';

export const metadata: Metadata = {
	title: 'Тестовое задание',
	description: 'Тестовое задание',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
