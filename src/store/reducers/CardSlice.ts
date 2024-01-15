import { ICard } from '@/models/ICard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardState {
	cards: ICard[];
	isLoading: boolean;
	error: string;
	filteredCards: ICard[];
}

const initialState: CardState = {
	cards: [],
	isLoading: false,
	error: '',
	filteredCards: [],
};

export const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		cardsFetching(state) {
			state.isLoading = true;
		},
		cardsFetchingSuccess(state, action: PayloadAction<ICard[]>) {
			state.isLoading = false;
			state.error = '';
			state.cards = action.payload;
			state.filteredCards = action.payload;
		},
		cardsFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},

		toggleLike(state, action) {
			const toggledLike = state.cards.find(
				(card) => card.id === action.payload.id
			);
			state.filteredCards = state.cards;
			if (toggledLike) {
				toggledLike.isLiked = !toggledLike.isLiked;
			}
		},

		removeCard(state, action: PayloadAction<{ id: number }>) {
			state.cards = state.cards.filter((card) => card.id !== action.payload.id);
			state.filteredCards = state.cards;
		},

		filterLikedCards(state, action: PayloadAction<boolean>) {
			if (action.payload) {
				state.cards = state.cards.filter((card) => card.isLiked);
			} else {
				state.cards = state.filteredCards;
			}
		},
	},
});

export const {
	toggleLike,
	cardsFetching,
	cardsFetchingSuccess,
	cardsFetchingError,
	removeCard,
	filterLikedCards,
} = cardSlice.actions;
export default cardSlice.reducer;
