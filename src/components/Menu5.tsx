const Menu5 = () => {
  return (
    <div className="flex flex-col space-y-10items-center bg-black w-fit mx-20 p-10">
      <div className="group relative ">
        <div className=" transition-all absolute  opacity-0 group-hover:opacity-100 group-hover:-top-[4px] group-hover:-left-[4px]">
          <p className="text-4xl font-extrabold text-teal-300">Home</p>
        </div>
        <div className="transition-all delay-150 absolute  opacity-0 group-hover:opacity-100 group-hover:-top-[8px] group-hover:-left-[8px]">
          <p className="text-4xl font-extrabold text-teal-700">Home</p>
        </div>
        <p className="transition-all delay-300 text-4xl font-extrabold text-teal-400 group-hover:text-white">Home</p>
      </div>


      <div className="group relative ">
        <div className=" transition-all absolute  opacity-0 group-hover:opacity-100 group-hover:-top-[4px] group-hover:-left-[4px]">
          <p className="text-4xl font-extrabold text-teal-300">Services</p>
        </div>
        <div className="transition-all delay-150 absolute  opacity-0 group-hover:opacity-100 group-hover:-top-[8px] group-hover:-left-[8px]">
          <p className="text-4xl font-extrabold text-teal-700">Services</p>
        </div>
        <p className="transition-all delay-300 text-4xl font-extrabold text-teal-400 group-hover:text-white">Services</p>
      </div>


      <div className="group relative ">
        <div className=" transition-all absolute  opacity-0 group-hover:opacity-100 group-hover:-top-[4px] group-hover:-left-[4px]">
          <p className="text-4xl font-extrabold text-teal-300">Portfolio</p>
        </div>
        <div className="transition-all delay-150 absolute  opacity-0 group-hover:opacity-100 group-hover:-top-[8px] group-hover:-left-[8px]">
          <p className="text-4xl font-extrabold text-teal-700">Portfolio</p>
        </div>
        <p className="transition-all delay-300 text-4xl font-extrabold text-teal-400 group-hover:text-white">Portfolio</p>
      </div>


    </div>
  );
};

export default Menu5;
