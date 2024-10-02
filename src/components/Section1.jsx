import Image from "next/image";
import React from "react";

const Section1 = ({ data }) => {
  return (
    <div className="mb-14" style={{ height: "100vh", position: "relative" ,overflowY:'hidden' }}>
      <Image
        src={data ? data[0].bannerImage.node.sourceUrl : ""}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className=" absolute left-0 top-0 w-full h-full p-40 pt-48">
        {data ? <h3 className="text-6xl font-semibold mb-6 ">{data[0].bannersTitle}</h3> : null}

        {data ? <p className="text-xl mb-12">{data[0].bannerDescription}</p> : null}
        <button className="bg-white rounded-full px-7 py-2 text-xl">Read More</button>
      </div>
    </div>
  );
};

export default Section1;
