import { useState } from "react";
import Image from "next/image";

import { MyButton } from "../components";

function About() {
  const [showDialog, setShowDialog] = useState(false);
  const toggle = () => setShowDialog((prevState) => !prevState);

  return (
    <div>
      About
      <MyButton
        name="Loc"
        age="26"
        height="1m7
      "
      />
      <Image src="/avatar.jpeg" alt="me" width="510" height="765" />
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <img
          src="https://images.pexels.com/photos/2479439/pexels-photo-2479439.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <text>Dialog: {showDialog.toString()}</text>
        <button
          onClick={toggle}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default About;
