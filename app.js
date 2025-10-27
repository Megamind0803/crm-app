// Wait until firebase scripts are ready
(function waitForFirebase(){ if(!window.firebaseApp) return setTimeout(waitForFirebase,150); initApp(); })();


function initApp(){
const auth = window.auth;
const db = window.db;
const messaging = window.messaging;


// UI refs
const email = document.getElementById('email');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');
const btnLogout = document.getElementById('btnLogout');
const authArea = document.getElementById('authArea');
const formSection = document.getElementById('formSection');
const formRecord = document.getElementById('formRecord');
const recordsList = document.getElementById('recordsList');
const bell = document.getElementById('bell');
const bellCount = document.getElementById('bellCount');
const listTitle = document.getElementById('listTitle');
const search = document.getElementById('search');
const filterStatus = document.getElementById('filterStatus');


let currentUser = null; let currentRole = 'staff'; let unsubscribe = null;


// Auth
btnSignup.addEventListener('click', async ()=>{
try{ await auth.createUserWithEmailAndPassword(email.value, password.value); alert('Signed up. Now login.'); }
catch(e){ alert('Signup error: '+e.message); }
});
btnLogin.addEventListener('click', async ()=>{ try{ await auth.signInWithEmailAndPassword(email.value, password.value); } catch(e){ alert('Login error: '+e.message); } });
btnLogout.addEventListener('click', async ()=>{ await auth.signOut(); });


auth.onAuthStateChanged(async user=>{
if(user){ currentUser = us
