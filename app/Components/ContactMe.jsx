"use client";
import React from "react";
import {fredoka} from "../layout";

const ContactSection = () => {
  return (
    <section
  id="contacts"
  className="bg-white text-black py-16 px-4 flex flex-col items-center justify-center text-center"
>
  <h2 className={`${fredoka.className} text-4xl font-bold text-[#FFA8CA] mb-8`}>Contact Me</h2>

  <div className="flex flex-col space-y-3">
    <p className="text-lg">
      📧 nklinh62@gmail.com
    </p>
    <p className="text-lg">
        📞 (650)-656-6684
    </p>
  </div>
</section>
  );
};

export default ContactSection;
