import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './breedImage.css'

const BreedImage = () => {
  let { breed } = useParams();
  const [breedImage, setBreedImage] = useState('');

  useEffect(() => {
    const breedImg = async () => {
      let res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
      let data = await res.json();
      setBreedImage(data.message);
    }

    breedImg();
    
  }, []);

  return (
    <>
      <section className="breed-container">
        <div className='breed-img'>
          <picture>
            <img src={breedImage} alt={breed} />
            <figcaption>{breed}</figcaption>
          </picture>
        </div>
      </section>
    </>
  );
};

export default BreedImage;
