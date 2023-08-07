import React from "react";
import PostTitle from "./PostTitle";
import PostDescription from "./PostDescription";
import PostDate from "./PostDate";
import Category from "./Category";

function Feed({ selected }) {
  const thumbnailArray = [
    {
      title: "The Benefits of Protein and Carb Listening",
      description:
        "This is the description and it's supposed to show what the description could look like.",
      date: "08.07.23",
      tech: false,
      travel: false,
      misc: false,
      health: false,
      visual: false,
      audio: false,
      other: false,
    },
    {
      title: "The Benefits of Protein and Carb Listening",
      description:
        "This is the description and it's supposed to show what the description could look like.",
      date: "08.07.23",
      tech: false,
      travel: false,
      misc: false,
      health: false,
      visual: false,
      audio: false,
      other: false,
    },
    {
      title: "The Benefits of Protein and Carb Listening",
      description:
        "This is the description and it's supposed to show what the description could look like.",
      date: "08.07.23",
      tech: false,
      travel: false,
      misc: false,
      health: false,
      visual: false,
      audio: false,
      other: false,
    },
    {
      title: "The Benefits of Protein and Carb Listening",
      description:
        "This is the description and it's supposed to show what the description could look like.",
      date: "08.07.23",
      tech: false,
      travel: false,
      misc: false,
      health: false,
      visual: false,
      audio: false,
      other: false,
    },
    {
      title: "The Benefits of Protein and Carb Listening",
      description:
        "This is the description and it's supposed to show what the description could look like.",
      date: "08.07.23",
      tech: false,
      travel: false,
      misc: false,
      health: false,
      visual: false,
      audio: false,
      other: false,
    },
    {
      title: "The Benefits of Protein and Carb Listening",
      description:
        "This is the description and it's supposed to show what the description could look like.",
      date: "08.07.23",
      tech: false,
      travel: false,
      misc: false,
      health: false,
      visual: false,
      audio: false,
      other: false,
    },
    {
      title: "The Benefits of Protein and Carb Listening",
      description:
        "This is the description and it's supposed to show what the description could look like.",
      date: "08.07.23",
      tech: false,
      travel: false,
      misc: false,
      health: false,
      visual: false,
      audio: false,
      other: false,
    },

    {
      title: "test2",
      description: "test2",
      date: "tes2",
      tech: false,
      travel: false,
      misc: false,
      health: false,
      visual: false,
      audio: false,
      other: false,
    },
  ];

  const filteredThumbnails =
    selected === ""
      ? thumbnailArray.sort((thumbnail) => thumbnail)
      : thumbnailArray.filter((thumbnail) => thumbnail.category === selected);

  return (
    <div className="flex flex-col mt-20 mx-4">
      <div className="flex space-x-2 mb-5 items-center">
        <p className="text-sm font-bold text-black/30">FILTER</p>
        <button className="font-bold border-2 border-black/20 rounded-md  px-2 text-xs">
          CATEGORY
        </button>
        <button className="font-bold border-2 border-black/20 rounded-md  px-2 text-xs">
          MONTH
        </button>
      </div>
      {filteredThumbnails.map((thumbnail) => (
        <div key={thumbnail.title} className="mb-12 space-y-1">
          <PostTitle title={thumbnail.title} />
          <PostDescription description={thumbnail.description} />
          <div className="flex space-x-2 items-center">
            <PostDate date={thumbnail.date} />
            <Category selected={selected} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
