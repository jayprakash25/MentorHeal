import { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Carddata from "./Data";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

const BookForm = () => {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Options: "",
    // date: null,
  });

  const [date, setdate] = useState(null);

  const handleChange = (date) => {
    setdate(date);
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = {
    //   form,
    //   date
    // };
    try {
      await addDoc(collection(db, "Sessions Booked"), form);
    } catch (error) {
      alert("Error, Try Again......!");
    }

    // TODO: Handle form submission logic here
  };

  return (
    <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
      <div className="mb-4">
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

        <label className="block mb-2 font-bold" htmlFor="name">
          Name
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <label className="block mb-2 font-bold" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <label className="block mb-2 font-bold" htmlFor="options">
          Choose Category
        </label>
        <select
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        className="w-full px-4 py-2 text-white bg-[#00b8b3] rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default BookForm;
