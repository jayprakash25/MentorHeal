import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../Firebase";
import { useState } from "react";

export default function ReadFullQuestion() {
  const { tittle } = useParams();


  return (
    <>
      <h1></h1>
    </>
  );
}
