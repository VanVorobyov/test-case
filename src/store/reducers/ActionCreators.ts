import { AppDispatch } from '@/store/store';
import axios from 'axios';
import { ICard } from '@/models/ICard';
import {
	cardsFetching,
	cardsFetchingError,
	cardsFetchingSuccess,
} from '@/store/reducers/CardSlice';

export const fetchCards = () => async (dispatch: AppDispatch) => {
	dispatch(cardsFetching());
	try {
		const response = await axios.get<ICard[]>(
			'https://fakestoreapi.com/products'
		);
		const cardsData: ICard[] = response.data.map((card) => ({
			...card,
			isLiked: false,
		}));

		dispatch(cardsFetchingSuccess(cardsData));
	} catch (e: any) {
		dispatch(cardsFetchingError(e.message));
	}
};
