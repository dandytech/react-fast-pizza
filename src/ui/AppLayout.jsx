import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

export default function AppLayout() {
  //using generic loader hook for loader
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen  grid-rows-[auto_1fr_auto] ">
      {/* note any style here is apply to all components in the Applayout */}

      {isLoading && <Loader />}

      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <h1>
            <Outlet />
          </h1>
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
