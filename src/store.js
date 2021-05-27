import { writable } from "svelte/store";

// save auth data in localstorage
let auth_saved = window.localStorage.getItem("auth") || "false";
let auth_ready = JSON.parse(auth_saved);

export const auth = writable(auth_ready);
export const active_item = writable(0);
