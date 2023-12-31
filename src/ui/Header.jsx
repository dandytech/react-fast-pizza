import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <header className="flex justify-between border-b border-stone-500 bg-yellow-400 px-4 py-4 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
