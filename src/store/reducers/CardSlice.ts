import { ICard } from '@/models/ICard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardState {
	cards: ICard[];
	isLoading: boolean;
	error: string;
	originalCards: ICard[];
}

const initialState: CardState = {
	cards: [],
	isLoading: false,
	error: '',
	originalCards: [],
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
			state.originalCards = action.payload;
		},
		cardsFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},

		toggleLike(state, action: PayloadAction<{ id: number }>) {
			const originalCard = state.originalCards.find(
				(card) => card.id === action.payload.id
			);

			const currentCard = state.cards.find(
				(card) => card.id === action.payload.id
			);

			if (originalCard && currentCard) {
				currentCard.isLiked = !currentCard.isLiked;
				originalCard.isLiked = currentCard.isLiked;
			}
		},

		removeCard(state, action: PayloadAction<{ id: number }>) {
			const originalCard = state.originalCards.find(
				(card) => card.id === action.payload.id
			);

			const currentCard = state.cards.find(
				(card) => card.id === action.payload.id
			);

			if (originalCard && currentCard) {
				state.originalCards = state.originalCards.filter(
					(card) => card.id !== action.payload.id
				);
				state.cards = state.cards.filter(
					(card) => card.id !== action.payload.id
				);
			}
		},

		filterLikedCards(state, action: PayloadAction<boolean>) {
			if (action.payload) {
				state.cards = state.cards.filter((card) => card.isLiked);
			} else {
				state.cards = state.originalCards;
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
