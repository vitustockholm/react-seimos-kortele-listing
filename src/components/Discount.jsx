import React from 'react';
import { Link } from 'react-router-dom';

const Discount = ({ discount }) => {
  return (
    <div key={discount.id}>
      <Link to={`/all-discounts/${discount.id}`}>
        {/* <img
          src={discount.images[0].src}
          alt={discount.name}
          style={{ maxWidth: '200px' }}
        /> */}
        <br />
        {/* <h5>{discount.yoast_head_json.og_image[0].url}</h5> */}
        <h3> {discount.title.rendered}</h3>
      </Link>
    </div>
  );
};

export default Discount;
