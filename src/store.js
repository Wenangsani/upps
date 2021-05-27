import { writable } from "svelte/store";

// save auth data in localstorage
let auth_saved = window.localStorage.getItem("auth") || "false";
let auth_ready = JSON.parse(auth_saved);

export const auth = writable(auth_ready);
export const active_item = writable(0);
export const userdata = writable([
    {
        sub: "1.1",
        item: 1,
        lengkap: 1,
        nama_dokumen: "Ayam kampung",
        halaman: 100
    },
]);
