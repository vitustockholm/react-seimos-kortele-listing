import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Discount = ({ discount }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className='gridas'>
      <div
        key={discount.id}

        // style={{ display: 'grid', gridAutoColumns: 'repeat(3, 1fr)' }}
      >
        <Link to={`/all-discounts/${discount.id}`} className='item'>
          {/* <img
          src={discount.images[0].src}
          alt={discount.name}
          style={{ maxWidth: '200px' }}
        /> */}
          <br />
          {/* <h5>{discount.yoast_head_json.og_image[0].url}</h5> */}
          <p
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {discount.acf.imones_pavadinimas}
          </p>
          {isShown && (
            <div>
              Adresas: [{discount.acf.imones_adresas}] - [
              {discount.acf.imones_internetinis_tinklapis}] - [
              {discount.acf.imones_telefonas}]<p className='hr'></p>{' '}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Discount;
