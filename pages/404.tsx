import React from "react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { seoConfig } from "../lib/constants";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {

  const { theme } = useTheme();

  return (
    <>
      <Helmet title={seoConfig.defaultTitle} />
      <div
        className={`mode__${theme.type} main common flex flex-col min-h-screen text-2xl flex flex-col justify-center items-center text-center`}>
        <section className="main__section ">
          <h1 className="main__title mb-5">404 | This page could not be found</h1>
          <div className="main__description">
            <Link href="/">
              <button className={`md:text-xl border-solid border-2 p-2 rounded 
        hover:scale-110 transform transition duration-y
        ${theme.type === "light" ? "border-light-mode-dark-color" : "border-dark-mode-alt-color"}
        ${theme.type === "light" ? "hover:bg-light-mode-dark-color" : "hover:bg-dark-mode-light-bg"}
        ${theme.type === "light" ? "hover:text-white" : "hover:text-black"}`}>
                Go Back
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFoundPage;
