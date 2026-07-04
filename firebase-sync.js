import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  onValue,
  off,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjnyumq8EScxowyb7Pkfxf9g4EItYcTsg",
  authDomain: "warikan-app-275bf.firebaseapp.com",
  databaseURL: "https://warikan-app-275bf-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "warikan-app-275bf",
  storageBucket: "warikan-app-275bf.firebasestorage.app",
  messagingSenderId: "699015216001",
  appId: "1:699015216001:web:0a270444eb4a770cc34680",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 紛らわしい文字（0/O, 1/I）を除いたグループコード用の文字セット
const CODE_CHARS = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

function generateRoomCode() {
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  }
  return code;
}

function roomRef(code) {
  return ref(db, `rooms/${code}`);
}

let activeRef = null;
let activeCallback = null;

async function createRoom(members) {
  let code = generateRoomCode();
  for (let i = 0; i < 5; i++) {
    const snap = await get(roomRef(code));
    if (!snap.exists()) break;
    code = generateRoomCode();
  }
  await set(roomRef(code), { members, expenses: [] });
  return code;
}

async function roomExists(code) {
  const snap = await get(roomRef(code));
  return snap.exists();
}

function subscribeRoom(code, onData) {
  unsubscribeRoom();
  activeRef = roomRef(code);
  activeCallback = (snapshot) => {
    const data = snapshot.val();
    if (data) onData(data);
  };
  onValue(activeRef, activeCallback);
}

function unsubscribeRoom() {
  if (activeRef && activeCallback) {
    off(activeRef, "value", activeCallback);
  }
  activeRef = null;
  activeCallback = null;
}

function updateRoom(code, data) {
  return set(roomRef(code), data);
}

window.WarikanSync = {
  createRoom,
  roomExists,
  subscribeRoom,
  unsubscribeRoom,
  updateRoom,
};
