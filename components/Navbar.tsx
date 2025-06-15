"use client";
import { nav } from "motion/react-client";
import React, { useState } from "react";

export function Navbar() {
  return (
    <nav className="flex justify-center">
      <ul>
        <li>
          <a href="#footer">footer</a>
        </li>
        <li>
          <footer></footer>
        </li>
      </ul>
    </nav>
  );
}
