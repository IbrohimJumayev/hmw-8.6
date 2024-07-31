import React from "react";

export default function Footer() {
  return (
    <div className="bg-footerColor mt-20 text-white ">
      <div className="max-w-7xl m-auto pt-20">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl text-white font-semibold">
              Let’s start working <br /> to build a brighter <br /> future.
            </h1>
            <p className="font-light mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Elementum posuere eget elementum vulputate elementum <br />
              viverra sapien tellus aenean.
            </p>
            <ul className="flex gap-5 mt-5 text-footerText  font-bold ">
              <li className="hover:text-white cursor-pointer">Fb</li>
              <li className="hover:text-white cursor-pointer">In</li>
              <li className="hover:text-white cursor-pointer">Tw</li>
              <li className="hover:text-white cursor-pointer">Ln</li>
            </ul>
          </div>

          <div>
            <div className="border-footerText border-2 px-5 py-5 flex justify-between gap-36 ">
              <p>Join our mailing list</p>
              <button className="hover:text-buttonColor duration-500">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-28 pb-10 items-center">
          <img src="/footerlogo.svg" alt="" />
          <p className="text-sm font-light">
            Copyright 2021. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
