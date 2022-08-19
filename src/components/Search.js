import React, { useContext } from "react";

import CountryDropdown from "./CountryDropdown";
import { HouseContext } from "./HouseContext";
/*import { HouseContext } from "./HouseContext";*/
import PriceRangeDropdown from "./PriceRangeDropdown";
import PropertyDropdown from "./PropertyDropdown";
import { RiSearch2Line } from "react-icons/ri";
import TimeDropdown from "./TimeDropdown";

const Search = () => {

  const{handleClick} = useContext(HouseContext)
  
  return (
    <div className='px-[30px] py-6 max-w-[1350px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <CountryDropdown />
      <TimeDropdown/>
      <PropertyDropdown />
      <PriceRangeDropdown />
      
      <button onClick={() => handleClick() } className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
