import React, { createContext, useEffect, useState } from 'react';

import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [time, settime] = useState('When to Move  (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove 
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    // set countries
    setCountries(uniqueCountries);
  }, []);
 

  useEffect(() => {
    
    const allProperties = houses.map((house) => {
      return house.type;
    });

    //remove
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

    // set countries 
    setProperties(uniqueProperties);
  }, []);
 
  const handleClick = () => {
    
    setLoading(true);
    
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

    
    const minPrice = parseInt(price.split(' ')[0]);
    
    const maxPrice = parseInt(price.split(' ')[2]);

    const minTime = parseInt(time.split(' ')[0]);
    
    const maxTime = parseInt(time.split(' ')[2]);
    

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      const houseTime = parseInt(house.moveIn);

      
      
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice &&
        houseTime >= minTime &&
        houseTime<= maxTime
      ) {
        return house;
      }
      // default
      if (isDefault(country) && isDefault(property) && isDefault(price) && isDefault(time)) {
        return house;
      }
      //not default
      if (!isDefault(country) && isDefault(property) && isDefault(price) && isDefault(time)) {
        return house.country === country;
      }
      // property not default
      if (!isDefault(property) && isDefault(country) && isDefault(price) && isDefault(time)) {
        return house.type === property;
      }
      // price not default
      if (!isDefault(price) && isDefault(country) && isDefault(property) && isDefault(time)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      if (!isDefault(time) && isDefault(country) && isDefault(property) && isDefault(price)) {
        if (houseTime >= minTime && houseTime <= maxTime) {
          return house;
        }
      }
      // country property not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price) && isDefault(time)) {
        return house.country === country && house.type === property;
      }
      // country price  not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price) && isDefault(time)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      if (!isDefault(country) && isDefault(property) && isDefault(price) && !isDefault(time)) {
        if (houseTime >= minTime && houseTime <= maxTime) {
          return house.country === country;
        }
      }
      // property price  not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price) && isDefault(time)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
      if (isDefault(country) && !isDefault(property) && isDefault(price) && !isDefault(time)) {
        if (houseTime >= minTime && houseTime <= maxTime) {
          return house.type === property;
       
        }
      }
      if (isDefault(country) && isDefault(property) && !isDefault(price) && !isDefault(time)) {
        if (houseTime >= minTime && houseTime <= maxTime) {
          return house.type === property;
        }
      }
    });
    
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  }; 

  return (
    <HouseContext.Provider
      value={{
        
        setHouses,
        country,
        setCountry,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
       handleClick, 
        houses,
        loading,
        setLoading,
        time,
        settime,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;