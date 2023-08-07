import React from "react";

function Category({ selected, setSelected }) {
  return (
    <div className="">
      {/* {selected === "tech" &&(
            <button className='rounded-full bg-orange-400'></button>
        )} */}
      <button className="rounded-full h-3 w-3 bg-orange-400"></button>
    </div>
  );
}

export default Category;
