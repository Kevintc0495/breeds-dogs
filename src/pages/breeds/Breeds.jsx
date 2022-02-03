import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './breeds.css';

const Breeds = () => {
  const { letter } = useParams();
  const [ breeds, setBreeds ] = useState([]);

  useEffect(() => {
    setBreeds([]);
    const breedsList = async () => {
      let res = await fetch('https://dog.ceo/api/breeds/list/all');
      let data = await res.json();

      for ( let [key, value] of Object.entries(data.message) ) {

        if (key.indexOf(letter.toLowerCase(), 0) === 0) {
          // console.log(key);
          setBreeds(breeds => ([...breeds, key]))
        } 
      }
    }

    breedsList();
    
  }, []);

  return (
    <>
      <section className="breed-container">
        {breeds.map((el, index) => {
          return (
            <div className="breed-link" key={index}>
              <Link className='breed-list' to={`/${letter}/${el}`}>{el}</Link>
            </div>
          )
        })}
      </section>
    </>
  );
};

export default Breeds;

