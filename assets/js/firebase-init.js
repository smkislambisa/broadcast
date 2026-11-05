// Starter Firebase modular SDK untuk tahap integrasi berikutnya.
// Halaman publik tetap dapat berjalan tanpa Firebase dikonfigurasi.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const configured = firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith("GANTI_");
export const firebaseApp = configured ? initializeApp(firebaseConfig) : null;
export const auth = firebaseApp ? getAuth(firebaseApp) : null;
export const db = firebaseApp ? getFirestore(firebaseApp) : null;
if (!configured) console.info("AbdUmar Broadcast: Firebase belum dikonfigurasi.");