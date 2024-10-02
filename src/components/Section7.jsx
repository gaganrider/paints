import React from "react";
import SectionHeader from "./SectionHeader";

// components/BlogGrid.js
import Image from "next/image";

const Section7 = ({ data }) => {
  const blogs = [
    {
      id: 1,
      date: "10 Jan 2024",
      title: "How to choose the perfect wall colour for your office",
    },
    {
      id: 2,
      date: "20 Jan 2024",
      title: "10 stylish cream colour combination for your home",
    },
    {
      id: 3,
      date: "10 Jan 2024",
      title: "How to choose the perfect wall colour for your office",
    },
    {
      id: 4,
      date: "10 Jan 2024",
      title: "How to choose the perfect wall colour for your office",
    },
    {
      id: 5,
      date: "10 Jan 2024",
      title: "How to choose the perfect wall colour for your office",
    },
  ];

  return (
    <div className="px-20 mb-14 text-white">
      <SectionHeader title="Populer colors" subtitle="Colors" button={true} />

      <div className="flex w-full gap-3 items-center">
        <div className="flex-1 h-full flex flex-col justify-between">
          {blogs.slice(0, 2).map((blog, i) => (
            <div
              key={blog.id}
              className="relative h-1/2 rounded  shadow-lg mb-4"
            >
              <div className="h-64 relative">
                <Image
                  src={data ? data[i].image.node.sourceUrl : ""}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="px-10 py-6 absolute top-0 left-0 bg-black bg-opacity-40 w-full h-full flex flex-col items-start justify-end">
                <p className="mb-2">{blog.date}</p>
                <h3 className="font-semibold text-2xl mb-1">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 h-full relative ">

        <Image 
      src={data ? data[2].image.node.sourceUrl : ""}
      width={500}
      height={500}
      alt="Picture of the author"
    //   layout="responsive"
      style={{objectFit: "cover",width:'100%',height:'100%'}}
      />
         

          <div className="absolute top-0 left-0 bg-black bg-opacity-40 w-full h-full flex flex-col items-start justify-end px-10 py-6">
            <p className="mb-2">{blogs[2].date}</p>
            <h3 className="font-semibold text-2xl mb-1">{blogs[2].title}</h3>
            <button className="mt-2 px-8 py-3 text-xl bg-white text-blue-500 hover:bg-blue-600 hover:text-white rounded-full">
              Read More
            </button>
          </div>
        </div>

        <div className="flex-1 h-full flex flex-col justify-between">
          {blogs.slice(3).map((blog, i) => (
            <div
              key={blog.id}
              className="relative rounded overflow-hidden shadow-lg mb-4"
            >
              <div className="h-64 relative">
                <Image
                  src={data ? data[i + 3].image.node.sourceUrl : ""}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="px-10 py-6  absolute top-0 left-0 bg-black bg-opacity-40 w-full h-full flex flex-col items-start justify-end">
                <p className="mb-2">{blog.date}</p>
                <h3 className="font-semibold text-2xl mb-1">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    // <section className="py-12 px-20 text-white">
    //   <SectionHeader title="Populer colors" subtitle="Colors" />

    //   <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-1/2">
    //     <div className="space-y-4 overflow-y-auto h-full">
    //       {blogs.slice(0, 2).map((blog,i) => (
    //         <div key={blog.id} className="relative h-1/2 rounded  shadow-lg mb-4">
    //           <div className="h-64 relative">
    //             <Image
    //               src={data?data[i].image.node.sourceUrl:''}
    //               alt={blog.title}
    //               layout="fill"
    //               objectFit="cover"
    //             />
    //           </div>
    //           <div className="px-10 py-6 absolute top-0 left-0 bg-black bg-opacity-40 w-full h-full flex flex-col items-start justify-end">
    //             <p className='mb-2'>{blog.date}</p>
    //             <h3 className="font-semibold text-2xl mb-1">{blog.title}</h3>

    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Column 2: Single large blog post */}
    //     <div className="row-span-1 lg:row-span-2 overflow-hidden">
    //       <div className="relative rounded overflow-hidden shadow-lg h-full">
    //         <div className="h-2/4 relative">
    //           <Image
    //             src={data?data[2].image.node.sourceUrl:''}
    //             alt={blogs[2].title}
    //             layout="fill"
    //             objectFit="cover"
    //           />

    //         </div>
    //         <div className="absolute top-0 left-0 bg-black bg-opacity-40 w-full h-full flex flex-col items-start justify-end px-10 py-6">
    //         <p className='mb-2'>{blogs[2].date}</p>
    //         <h3 className="font-semibold text-2xl mb-1">{blogs[2].title}</h3>
    //           <button className="mt-2 px-8 py-3 text-xl bg-white text-blue-500 hover:bg-blue-600 hover:text-white rounded-full">
    //             Read More
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Column 3: Two blog posts */}
    //     <div className="space-y-4 overflow-y-auto h-full">
    //       {blogs.slice(3).map((blog,i) => (
    //         <div key={blog.id} className="relative rounded overflow-hidden shadow-lg mb-4">
    //         <div className="h-64 relative">
    //           <Image
    //             src={data?data[i+3].image.node.sourceUrl:''}
    //             alt={blog.title}
    //             layout="fill"
    //             objectFit="cover"
    //           />
    //         </div>
    //         <div className="px-10 py-6  absolute top-0 left-0 bg-black bg-opacity-40 w-full h-full flex flex-col items-start justify-end">
    //           <p className='mb-2'>{blog.date}</p>
    //           <h3 className="font-semibold text-2xl mb-1">{blog.title}</h3>

    //         </div>
    //       </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default Section7;
