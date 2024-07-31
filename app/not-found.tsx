"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [count, setCount] = useState(3);
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      count !== 0 ? setCount(count - 1) : router.back();
    }, 1000);
  }, [count]);
  return (
    <div>
      <div className="max-w-5xl m-auto flex justify-center items-center text-footerText  mt-20 ">
        <img src="/notfound.png" alt="" />
        <h1 className="text-5xl font-bold">Page not found</h1>
      </div>
      <p className="text-center mt-20 text-4xl font-bold text-buttonColor mb-20">
        You will be redirected in : {count}
      </p>

    </div>
  );
}
