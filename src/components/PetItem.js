import React from "react";
import { Link, Navigate } from "react-router-dom";

const PetItem = ({ pet }) => {
  return (
    <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
      <h1 className="text-md font-bold">{pet.name}</h1>
      <img
        src={pet.image}
        alt={`${pet.name}-img`}
        className="w-[200px] rounded-md
      "
      />
      <Link to={`/pets/${pet._id}`} className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white">
        View
      </Link>
    </div>
  );
};

export default PetItem;
