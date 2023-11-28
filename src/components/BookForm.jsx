import { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Carddata from "./Data";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Footer, NavBar} from "./index";

const BookForm = () => {
  const [date, setdate] = useState(null);
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Options: "",
  });
  const navigate = useNavigate();
  const handleChange = (date) => {
    setdate(date);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(form).every((i) => i == "")) {
      alert("Please Fill the form");
    } else {
      const Bookingdate = date.$d;
      try {
        await addDoc(collection(db, "Sessions Booked"), { form, Bookingdate });
        navigate("/");
      } catch (error) {
        alert("Error, Try Again......!");
      }
    }
  };

  return (
    <>
      <NavBar />
      <form className="max-w-md p-8 mx-auto pt-28" onSubmit={handleSubmit}>
        <div className="mb-4 space-y-5">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DemoItem label="Select date & time">
                <DateTimePicker
                  disablePast={true}
                  name="date"
                  value={date}
                  onChange={handleChange}
                  defaultValue={dayjs("2023-06-17T15:30")}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>

          <label className="block  text-[#8ca1b3] mb-2 " htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md outline-none"
            type="text"
            name="Name"
            value={form.Name}
            onChange={(e) =>
              setForm({
                ...form,
                Name: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="mb-4 space-y-5">
          <label className="block text-[#8ca1b3] mb-2 " htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md outline-none "
            type="email"
            name="Email"
            value={form.Email}
            onChange={(e) =>
              setForm({
                ...form,
                Email: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-[#8ca1b3] " htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md outline-none "
            type="tel"
            name="Phone"
            value={form.Phone}
            onChange={(e) =>
              setForm({
                ...form,
                Phone: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#8ca1b3] mb-2 " htmlFor="options">
            Choose Category
          </label>
          <select
            className="w-full px-4 py-2 border rounded-md outline-none "
            name="Options"
            value={form.Options}
            onChange={(e) =>
              setForm({
                ...form,
                Options: e.target.value,
              })
            }
          >
            {Carddata.map((item, index) => {
              return <option key={index}>{item.Title}</option>;
            })}
          </select>
        </div>

        <button
          className="w-full px-4 py-2 mt-5 text-white rounded-md bg-[#4a7999]"
          type="submit"
        >
          Submit
        </button>
      </form>


      <Footer />
    </>
  );
};

export default BookForm;
