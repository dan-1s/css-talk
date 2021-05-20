import { writable } from 'svelte/store';

export const gridAreasSelected = writable(null);

export const gridLinesCols = writable(2);
export const gridLinesRows = writable(2);

export const gridRepeatSelected = writable(null);
export const gridRepeatCards = writable(0);
