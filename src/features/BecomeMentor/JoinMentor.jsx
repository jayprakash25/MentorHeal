import React, { useId, useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { setDoc, doc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { db, storage } from "../../Firebase";

export default function JoinMentor() {
  const dpref = useRef(null);
  const [blobimg, setblogimg] = useState({ image: "" });
  const [uploadimage, setuploadimage] = useState();

  const [mentor, setmentor] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Categeory: "",
    image: "",
  });

  const id = useId();

  const SaveMentor = async () => {
    if (
      mentor.Name !== "" &&
      mentor.Email !== "" &&
      mentor.Phone !== "" &&
      mentor.Categeory !== "" &&
      mentor.image !== undefined
    ) {
      try {
        const mentorRef = doc(db, "MENTORS", mentor.Name);
        await setDoc(mentorRef, mentor);
        alert("Success");
      } catch (error) {
        console.error("Error saving mentor:", error);
        alert("An error occurred while saving the mentor.");
      }
    } else {
      alert("Please enter all details");
    }
  };

  const uploadImage = async () => {
    if (!blobimg) {
      console.log("No image selected.");
      return;
    }
    const storageRef = ref(storage, `${id}/${uploadimage.name}`);
    try {
      await uploadBytes(storageRef, uploadimage);
      const downloadURL = await getDownloadURL(storageRef);
      console.log(downloadURL);
      setmentor({ ...mentor, image: downloadURL });
      SaveMentor();
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred while uploading the image.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full p-3 overflow-y-scroll bg-black bg-opacity-70 backdrop-blur">
      <div className="w-[80vw] md:w-[60vw] lg:w-[50vw] px-10 bg-white rounded-md py-3">
        <div className="flex justify-end">
          <RxCross2 size={25} color="gray" className="cursor-pointer" />
        </div>
        <form className="flex flex-col gap-3  md:grid md:grid-cols-2 md:gap-7 text-[#8ca1b3] font-semibold">
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
            <label>Name</label>
            <input
              type="text"
              value={mentor.Name}
              onChange={(e) => {
                setmentor({ ...mentor, Name: e.target.value });
              }}
              className="p-3 outline-none border-[0.5px] border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label>Phone</label>
            <input
              type="text"
              value={mentor.Phone}
              onChange={(e) => {
                setmentor({ ...mentor, Phone: e.target.value });
              }}
              className="p-3 outline-none border-[0.5px] border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label>Email</label>
            <input
              type="text"
              value={mentor.Email}
              onChange={(e) => {
                setmentor({ ...mentor, Email: e.target.value });
              }}
              className="p-3 outline-none border-[0.5px] border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label>Your Categeory</label>
            <input
              type="text"
              value={mentor.Categeory}
              onChange={(e) => {
                setmentor({ ...mentor, Categeory: e.target.value });
              }}
              className="p-3 outline-none border-[0.5px] border-gray-300 rounded-md"
            />
          </div>
        </form>
        <div className="flex justify-center mt-5 md:mt-7">
          <button
            onClick={uploadImage}
            className=" px-28 py-3 bg-[#00b8d3] text-white font-semibold rounded-3xl"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
