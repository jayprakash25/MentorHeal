import React from "react";
import { Ask, Guildline, Post } from "../.././index";

export default function AskModel({ category, setcategory }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full p-3 overflow-y-scroll bg-black bg-opacity-70 backdrop-blur">
      <div className="p-5 bg-white w-[90vw] md:w-[60vw] lg:w-[50vw] rounded-md">
        <div className="flex items-center justify-around">
          <div
            onClick={() => {
              setcategory("Ask");
            }}
            className={`border-b-2 w-[50vw] cursor-pointer duration-300 ease-in-out  ${
              category === "Ask" ? "border-[#3adaf2]" : "border-[#dee0e1]"
            }  text-center`}
          >
            <h1>Ask</h1>
          </div>
          <div
            onClick={() => {
              setcategory("Post");
            }}
            className={`border-b-2 w-[50vw] cursor-pointer duration-300 ease-in-out  ${
              category === "Post" ? "border-[#3adaf2]" : "border-[#dee0e1]"
            }  text-center`}
          >
            <h1>Post</h1>
          </div>
        </div>
        {category === "Ask" && <Guildline />}
        {category === "Ask" ?  <Ask /> : <Post/>  }
      </div>
    </div>
  );
}
