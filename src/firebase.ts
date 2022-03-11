import { cert } from "firebase-admin/app"

export const FIREBASE_PUBLIC_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  databaseURL: process.env.NEXT_PUBLIC_databaseURL,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId,
}

const FIREBASE_ADMIN_CONFIG_CERT = {
  projectId: process.env.NEXT_PUBLIC_projectId,
  privateKey: process.env.PRIVATE_KEY,
  clientEmail: process.env.CLIENT_EMAIL,
}

export const FIREBASE_ADMIN_CONFIG = (certFn: typeof cert) => ({
  credential: certFn(FIREBASE_ADMIN_CONFIG_CERT),
  databaseURL: process.env.NEXT_PUBLIC_databaseURL,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
})
