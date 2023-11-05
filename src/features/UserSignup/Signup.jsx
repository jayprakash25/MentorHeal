import React, { useId } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../Firebase";
import { addDoc, doc, setDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";
export default function Signup() {
  const GoogleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const UserToken = useId();

  const sendEmail = (email, name) => {
    emailjs
      .send(
        "service_m5ql7ex",
        "template_s697m1j",
        {
          from_name: "MentorHeal",
          to_name: name,
          from_email: "chrahulofficial@gmail.com",
          to_email: email,
          message:
            "A warm welcome to our mentor team at MentorHeal! We're excited to have you on board. Your expertise will be invaluable in guiding our team. Let's embark on this journey together!",
        },
        "pskEHJBdJUVoAlloz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const GoogleSignin = async () => {
    try {
      const res = await signInWithPopup(auth, GoogleProvider);
      const User = {
        Name: res.user.displayName,
        email: res.user.email,
        pic: res.user.photoURL,
      };
      await addDoc(doc(db, "USERS", UserToken), User);
      localStorage.setItem("userToken", UserToken);
      sendEmail(User.email, User.Name);
      navigate("/mentors");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link to="/">
        <div className="p-9 flex items-center space-x-0.5">
          <p className="text-2xl font-bold text-transparent bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text md:text-3xl">
            MentorHeal
          </p>
        </div>
      </Link>

      <main className="pt-7">
        <div>
          <div className="my-11">
            <div className=" space-y-1.5 text-center">
              <h1 className="text-2xl font-bold lg:text-3xl md:text-4xl">
                Get MentorShip
              </h1>
              <p className="text-[#676b5f] font-semibold md:text-lg">
                Sign Up for free!
              </p>
            </div>
            <div className="flex flex-col justify-center max-w-md mx-auto my-10 space-y-8">
              <h2 className="text-[#676b5f]  text-center mx-auto max-w-md md:max-w-xl text-sm md:text-base ">
                By continuing, you agree to MentorHeal's Terms and Conditions
                and confirm you have read our Privacy Notice.
              </h2>
              <button
                className="flex items-center justify-center rounded-full space-x-3 border-[1px] hover:bg-[#eeefea] ease-in-out duration-500 border-slate-300 px-8 text-sm py-3.5"
                onClick={GoogleSignin}
              >
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png"
                  }
                  className="w-7 h-7"
                />
                <h1>Sign up with Google</h1>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
