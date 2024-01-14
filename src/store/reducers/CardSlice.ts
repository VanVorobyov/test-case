import { ICard } from '@/models/ICard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardState {
	cards: ICard[];
	isLoading: boolean;
	error: string;
}

const initialState: CardState = {
	cards: [],
	isLoading: false,
	error: '',
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
		},
		cardsFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},

		toggleLike(state, action) {
			const toggledLike = state.cards.find(
				(card) => card.id === action.payload.id
			);
			if (toggledLike) {
				toggledLike.isLiked = !toggledLike.isLiked;
			}
		},
	},
});

export const {
	toggleLike,
	cardsFetching,
	cardsFetchingSuccess,
	cardsFetchingError,
} = cardSlice.actions;
export default cardSlice.reducer;