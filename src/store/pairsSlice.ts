import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { Pair } from "../api/types";
import { RootState } from ".";

export type fieldKeys = "" | "base_currency_symbol.en" | "buy";
export type directionKeys = "" | "asc" | "desc";

export interface SortConfig {
  field: fieldKeys;
  direction: directionKeys;
}

interface PairsState {
  pairs: Pair[];
  searchQuery: string;
  sortConfig: SortConfig;
}

const initialState: PairsState = {
  pairs: [],
  searchQuery: "",
  sortConfig: {
    field: "",
    direction: "",
  },
};

const pairsSlice = createSlice({
  name: "pairs",
  initialState,
  reducers: {
    setPairs: (state, action: PayloadAction<Pair[]>) => {
      state.pairs = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSortConfig: (state, action: PayloadAction<SortConfig>) => {
      state.sortConfig = action.payload;
    },
  },
});

export const { setPairs, setSearchQuery, setSortConfig } = pairsSlice.actions;

export default pairsSlice.reducer;

export const selectPairsState = (state: RootState): PairsState => state.pairs;

export const selectSearchQuery = (state: RootState): string =>
  selectPairsState(state).searchQuery;

export const selectSortConfig = (state: RootState): SortConfig =>
  selectPairsState(state).sortConfig;

export const selectPairs = (state: RootState): Pair[] =>
  selectPairsState(state).pairs;

const filterPairsBySearch = (pairs: Pair[], query: string): Pair[] => {
  if (!query) return pairs;
  const lowerQuery = query.toLowerCase();
  return pairs.filter(
    (pair) =>
      pair.base_currency_symbol.en.toLowerCase().includes(lowerQuery) ||
      pair.base_currency_symbol.fa.includes(lowerQuery)
  );
};

const sortPairs = (pairs: Pair[], sortConfig: SortConfig): Pair[] => {
  const { field, direction } = sortConfig;
  if (!field || !direction) return pairs;

  return [...pairs].sort((a, b) => {
    let compareValue = 0;

    if (field === "base_currency_symbol.en") {
      compareValue = a.base_currency_symbol.en.localeCompare(
        b.base_currency_symbol.en
      );
    } else if (field === "buy") {
      compareValue = a.buy - b.buy;
    }

    return direction === "asc" ? compareValue : -compareValue;
  });
};

export const selectFilteredSortedPairs = createSelector(
  [selectPairs, selectSearchQuery, selectSortConfig],
  (pairs, searchQuery, sortConfig) => {
    const filteredPairs = filterPairsBySearch(pairs, searchQuery);
    return sortPairs(filteredPairs, sortConfig);
  }
);
