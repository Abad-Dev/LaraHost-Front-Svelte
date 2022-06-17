import { writable } from 'svelte/store';

const storedTheme = localStorage.getItem('theme')

export const darkMode = writable(storedTheme === 'dark')

darkMode.subscribe(value => {
    localStorage.setItem("theme", value === true ? 'dark' : 'light');
});