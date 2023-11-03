import React, { useId, useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { setDoc, doc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { db, storage } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { BiLoaderAlt } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import Data from "../../Data/MentorShipCategories";
export default function JoinMentor({ setjoinmentor }) {
  const dpref = useRef(null);
  const id = useId();
  const navigate = useNavigate();
  const [loader, setloader] = useState();
  const [blobimg, setblogimg] = useState({ image: "" });
  const [uploadimage, setuploadimage] = useState();

  const [mentor, setmentor] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Categeory: "",
    image: "",
    bio: "",
  });

  const sendEmail = (email) => {
    emailjs
      .send(
        "service_m5ql7ex",
        "template_s697m1j",
        {
          from_name: "MentorHeal",
          to_name: mentor.Name,
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

  // Creating a mentor profile
  const uploadImage = async () => {
    if (!blobimg) {
      console.log("No image selected.");
      return;
    }
    if (
      mentor.Name !== "" &&
      mentor.Email !== "" &&
      mentor.Phone !== "" &&
      mentor.Categeory !== ""
    ) {
      setloader(true);
      const storageRef = ref(storage, `${id}/${uploadimage.name}`);
      try {
        await uploadBytes(storageRef, uploadimage);
        const downloadURL = await getDownloadURL(storageRef);
        const updatedMentor = {
          ...mentor,
          image: downloadURL,
        };
        setmentor(updatedMentor);
        const mentorRef = doc(db, "MENTORS", mentor.Name);
        await setDoc(mentorRef, updatedMentor);
        setloader(false);
        localStorage.setItem("mentorjwt", id);
        navigate("/mentors");
        sendEmail(mentor.Email);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("An error occurred while uploading the image.");
      }
    } else {
      alert("Enter all the details");
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center h-full p-3 overflow-y-scroll bg-black bg-opacity-70 backdrop-blur animate__animated animate__fadeIn">
        <div className="w-[80vw] md:w-[60vw] lg:w-[45vw] px-10 bg-white rounded-md py-3 overflow-y-scroll ">
          <div className="flex justify-end">
            <RxCross2
              onClick={() => {
                setjoinmentor(false);
              }}
              size={25}
              color="gray"
              className="cursor-pointer"
            />
          </div>

          <form className="flex flex-col gap-5  md:grid md:grid-cols-2 md:gap-7 text-[#8ca1b3] font-semibold">
            <div className="flex flex-col space-y-3 md:col-span-2">
              <input
                ref={dpref}
                type="file"
                id="files"
                className="hidden"
                onChange={(e) => {
                  setblogimg({
                    ...blobimg,
                    image: URL.createObjectURL(e.target.files[0]),
                  });
                  setuploadimage(e.target.files[0]);
                }}
              />
              {blobimg.image ? (
                <img
                  src={blobimg.image}
                  className="mx-auto rounded-full w-28 h-28"
                  alt=""
                />
              ) : null}
              {blobimg.image ? null : (
                <div className="flex flex-col items-center gap-1 mx-auto">
                  <FiUploadCloud
                    size={65}
                    className="cursor-pointer"
                    color="gray"
                    onClick={() => {
                      dpref.current.click();
                    }}
                  />
                  <p>Your image</p>
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={mentor.Name}
                onChange={(e) => {
                  setmentor({ ...mentor, Name: e.target.value });
                }}
                className="p-3 outline-none border-[0.5px] border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <input
                type="text"
                value={mentor.Phone}
                placeholder="Phone"
                onChange={(e) => {
                  setmentor({ ...mentor, Phone: e.target.value });
                }}
                className="p-3 outline-none border-[0.5px] border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <input
                type="text"
                value={mentor.Email}
                placeholder="Email"
                onChange={(e) => {
                  setmentor({ ...mentor, Email: e.target.value });
                }}
                className="p-3 outline-none border-[0.5px] border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <select
                className="p-3 outline-none border-[0.5px] border-gray-300 rounded-md"
                onChange={(e) => {
                  setmentor({ ...mentor, Categeory: e.target.value });
                }}
              >
                {Data.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <option value={item}>{item}</option>
                    </React.Fragment>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col space-y-3 md:col-span-2">
              <textarea
                type="text"
                value={mentor.bio}
                placeholder="Bio"
                maxLength={250}
                onChange={(e) => {
                  setmentor({ ...mentor, bio: e.target.value });
                }}
                className="p-3 outline-none border-[0.5px] border-gray-300 rounded-md"
              />
            </div>
          </form>
          <div className="flex justify-center my-5 md:my-7">
            <button
              onClick={uploadImage}
              className=" px-28  py-3 bg-[#00b8d3] text-white font-semibold rounded-3xl"
            >
              {loader ? (
                <BiLoaderAlt
                  size={27}
                  color="white"
                  className="duration-300 ease-in-out animate-spin"
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
