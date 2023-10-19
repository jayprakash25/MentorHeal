import React, { useState } from "react";
import { AskModel } from "../../index";

export default function PostQuestion() {
  const [popup, setpopup] = useState(false);
  const [category, setcategory] = useState();

  return (
    <main className="my-10">
      <div className="p-5 border-[1px] border-gray-300  rounded-md mx-auto space-y-5  w-[80vw] sm:w-[60vw] md:w-[60vw] lg:w-[50vw]">
        <div className="flex items-center gap-2.5 justify-center">
          <img
            src="https://qph.cf2.quoracdn.net/main-thumb-1741383872-50-jkrzkqlzjsjvexpvlkgixgehnnjndhwk.jpeg"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="What do you want to ask "
            className="py-2 outline-none border-[1px] border-slate-300 px-10 w-[70vw] sm:w-[60vw] md:w-[60vw] lg:w-[50vw] cursor-pointer rounded-full"
            onClick={() => {
              setpopup(true);
              setcategory("Ask");
            }}
          />
        </div>
        <div className="flex items-center justify-evenly text-[#8c8d8e] font-semibold">
          <div
            onClick={() => {
              setpopup(true);
              setcategory("Ask");
            }}
          >
            <h1 className="font-bold cursor-pointer">Ask</h1>
          </div>
          |
          <div
            onClick={() => {
              setpopup(true);
              setcategory("Post");
            }}
          >
            <h1 className="font-bold cursor-pointer">Post</h1>
          </div>
        </div>
      </div>
      {popup ? (
        <AskModel category={category} setcategory={setcategory} />
      ) : null}
    </main>
  );
}
