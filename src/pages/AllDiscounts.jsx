import React from 'react';
import useGetDiscounts from '../hooks/useGetDiscounts';
import Discount from '../components/Discount';

const AllDiscounts = () => {
  const { discounts, isLoading, error } = useGetDiscounts('all-discounts');

  return isLoading ? (
    <p> Loading ... </p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    discounts.map((discount) => (
      <Discount discount={discount} key={discount.id}>
        {' '}
      </Discount>
    ))
  );
};

export default AllDiscounts;
