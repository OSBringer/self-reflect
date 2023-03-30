"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./styles/question.scss";
import ReactLogo from "../public/logo.svg";
import { NavigationMenu } from "./(components)/NavigationMenu";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className} container`}>
      <NavigationMenu />

      <div className="logoContainer">
        <Image className="logo" src={ReactLogo} alt="React Logo" />
      </div>
      <div className="question">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="question__title">
            {" "}
            Toto je otázka ktorá sa ťa pýta na niečo na, na viacerých riadkoch?
          </div>
        </motion.div>
        <textarea
          maxLength={256}
          className="answer"
          name="answerContent"
          rows={3}
          autoFocus
          cols={40}
        />
      </div>
    </div>
  );
}
