import Image from "next/image";
import React from "react";
import SectionHeader from "./SectionHeader";

const Section4 = () => {
  const data=[{
    title:'wall painting',url:'https://plus.unsplash.com/premium_photo-1681044639284-8fa36bcd1958?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGwlMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D'
  },{
    title:"Water Solution",url:'https://images.unsplash.com/photo-1536755668196-cf1fa5822f98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhbGwlMjBwYWludHxlbnwwfHwwfHx8MA%3D%3D'
  },{
    title:'painting',url:'https://plus.unsplash.com/premium_photo-1682145450217-63f7ffc88a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FsbCUyMHBhaW50fGVufDB8fDB8fHww'
  }]
  return (
    <div className="px-20 mb-14">
      <SectionHeader title="Make Your Life Comfertable" subtitle="Services" />
      <div className="flex justify-between gap-6">
        {data.map((x) => {
          return (
            <div key={x.title} className=" relative flex-1 h-96">
              <Image
                src={x.url}
                width={500}
                height={500}
                alt="Picture of the author"
                //   layout="responsive"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className="absolute bottom-0 h-32 w-full bg-yellow-400 bg-opacity-50 backdrop-blur-md px-5 flex flex-col items-start justify-center">
                <h5 className="text-2xl font-semibold">{x.title}</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="mt-3 rounded-full px-4 py-2 font-semibold bg-white">
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section4;
