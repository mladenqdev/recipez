import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBY8gp8KKHn5yXxqPf_-kcwlOxHakdMctc',
	authDomain: 'recipezzz.firebaseapp.com',
	projectId: 'recipezzz',
	storageBucket: 'recipezzz.appspot.com',
	messagingSenderId: '300105300426',
	appId: '1:300105300426:web:889dc374c3eb9ffd43f733',
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
