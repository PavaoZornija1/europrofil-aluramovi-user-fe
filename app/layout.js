"use client";

import { Roboto } from "next/font/google";
import "./globals.css";
import ProtectedRoute from "./protectedRoute/page";
import Footer from "./footer/page";
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import store from "./store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// export const metadata = {
//   title: "Europrofil",
//   description: "Generated by create next app",
// };
let persistor = persistStore(store);

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <html lang="en">
          <body className={`${roboto.className} overflow-x-hidden`}>
            <div className="flex flex-col bg-white min-h-screen">
              <PersistGate persistor={persistor}>
                <ProtectedRoute>
                  <div className="flex-grow">{children}</div>
                </ProtectedRoute>
              </PersistGate>
              <div className="mt-14">
                <Footer />
              </div>
            </div>
          </body>
        </html>
      </AuthProvider>
    </Provider>
  );
}
