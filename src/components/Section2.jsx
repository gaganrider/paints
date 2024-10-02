import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const Section2 = ({data}) => {
  return (
    <div className="flex items-center px-20 mb-14">
      <div className="flex-1 pr-6">
        <SectionHeader
          title="Bringing Your Dreams To Life"
          subtitle="About Astral Paints"
        />
        <p className="w-[75%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore
          obcaecati dolorum ducimus!
        </p>
        <p className="w-[75%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          consequatur cum. Saepe suscipit unde voluptates.
        </p>
        <button className="text-xl text-red-500 px-6 py-2 rounded-full border mt-5 border-solid border-red-500">Read More</button>
      </div>
      <Image 
      src={data?.node.sourceUrl}
      width={500}
      height={500}
      alt="Picture of the author"
    //   layout="responsive"
      style={{objectFit: "cover",flex:1,height:'100%'}}
      />
     
    </div>
  );
};

export default Section2;
