import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "foucus:ring-yellow-300 text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + "px-4 py-3 md:py-4 md:px-6",
    small: base + "px-4 py-2 md:px-6 md:py-3 mb-2 text-xs",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-xs",

    secondary:
      "px-4 py-2.5 md:py-3.5 text-sm  md:px-6 foucus:ring-stone-200 inline-block rounded-full bg-stone-200 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed focus:text-stone-800 focus:text-stone-800 text-stone-400 border-2 border-stone-300 hover:text-stone-700",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={styles[type]}
        to={to}
      >
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]} to={to}>
      {children}
    </button>
  );
}
