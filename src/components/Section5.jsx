import React from "react";
import SectionHeader from "./SectionHeader";

const Section5 = () => {
  const arr = [
    { name: "Gray", code: "#808080" },
    { name: "Yellow", code: "#FFFF00" },
    { name: "Pink", code: "#FFC0CB" },
    { name: "Blue", code: "#0000FF" },
    { name: "Purple", code: "#800080" },
    { name: "Green", code: "#00FF00" },
  ];

  return (
    <div className="px-20 mb-14">
      <SectionHeader title="Populer colors" subtitle="Colors" button={true}/>

      <div className="flex justify-between">
        {arr.map((x) => {
          return (
            <div
              key={x.code}
              className="flex items-center flex-col color-parent py-1"
              // style={{display:'flex',flexDirection:'column',alignItems:'center'}}
            >
              <h5 className="font-semibold text-lg my-2 color-child">
                Astral Paints
              </h5>
              <div
                className="w-60 h-60 p-2"
                style={{ border: `5px solid ${x.name}` }}
              >
                <div
                  className="w-full h-full"
                  style={{ backgroundColor: x.name }}
                ></div>
              </div>
              <h6 className="font-medium text-xl my-2">{x.name}</h6>
              <p className="mb-1">{x.code}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section5;
