import Image from "next/image";
import React from "react";

const Section6 = () => {
  return (
    <div className="w-full  h-96 bg-slate-500 relative text-white">
      <Image
                src="https://plus.unsplash.com/premium_photo-1670271544153-dd9933f0f119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRleHR1cmUlMjBiYWNrZ3JvdW5kJTIwJTIwYmx1ZXxlbnwwfHwwfHx8MA%3D%3D"
                width={500}
                height={500}
                alt="Picture of the author"
                //   layout="responsive"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
      <div className="items-center h-full absolute flex justify-center flex-col w-full z-10 top-0 left-0">
        <span className="text-2xl mb-3">Join the Success Journey</span>
        <span className="text-5xl mb-3 font-semibold">Become A Dealer</span>
        <span className="text-xl">
          Lorem ipsum dolor sit amet consectetur. Integer dui quam nisi
        </span>
        <span className="text-xl mb-4">
          in ornare. Nec in tristique et ultrices sit ullamcorper massa tempor
          et.
        </span>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Section6;
