import React from "react";
import { PostQuestion, Posts } from "../features/index";
import { NavBar } from "../components";
export default function Community() {
  return (
    <>
      <NavBar />
      <PostQuestion />
      <Posts />
    </>
  );
}
