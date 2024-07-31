export default function Home() {
  return (
    <div className="mt-36">
      <div className="flex-col text-center">
        <h1 className="text-6xl font-bold">
          Become a better <br /> business with us.
        </h1>
        <p className="text-xl mt-5 font-thin mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nullam
          turpis tortor, ultricies ut justo eu.
        </p>
        <button className="bg-buttonColor text-white py-4 px-16 rounded-full mb-32 border-2 border-buttonColor duration-500 font-bold text-xl hover:text-black hover:border-2 hover:border-buttonColor hover:bg-transparent">
          Our Business
        </button>
      </div>
      <div>
        <img src="/img.png" alt="" />
      </div>
      <div className="max-w-7xl m-auto">
        <p className="text-sm font-bold text-buttonColor mt-32">
          WHAT WE OFFER
        </p>
        <h2 className="text-5xl mt-5 font-bold">
          Agile focused business <br /> services and more.
        </h2>
        <div className="flex gap-5 mt-20 scroll-auto mb-10">
          <div>
            <img src="/homeimg.png" alt="" />
            <h3 className="font-bold text-xl mt-3">Lorem ipsum dolor</h3>
            <p className="mt-1 mb-1 font-light">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <a className="underline font-bold" href="#">
              Browse
            </a>
          </div>
          <div>
            <img src="/homeimg.png" alt="" />
            <h3 className="font-bold text-xl mt-3">Lorem ipsum dolor</h3>
            <p className="mt-1 mb-1 font-light">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <a className="underline font-bold" href="#">
              Browse
            </a>
          </div>
          <div>
            <img src="/homeimg.png" alt="" />
            <h3 className="font-bold text-xl mt-3">Lorem ipsum dolor</h3>
            <p className="mt-1 mb-1 font-light">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <a className="underline font-bold" href="#">
              Browse
            </a>
          </div>
          <div>
            <img src="/homeimg.png" alt="" />
            <h3 className="font-bold text-xl mt-3">Lorem ipsum dolor</h3>
            <p className="mt-1 mb-1 font-light">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <a className="underline font-bold" href="#">
              Browse
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
