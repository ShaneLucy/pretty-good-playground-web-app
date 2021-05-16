import { writable } from "svelte/store";

export const darkMode = writable(false);

export const percentage = writable(0);

export const sideMenuOpen = writable(false);

export const sideMenuClosed = writable(true);

export const publicKey = writable(true);

export const privateKey = writable(true);
