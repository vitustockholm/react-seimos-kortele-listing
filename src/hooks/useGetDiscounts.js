import { useState, useEffect } from 'react';
import useEndpoint from './useEndpoint';
import axios from 'axios';

const useGetDiscounts = (discount_type) => {
  // Hooks
  // -- state
  const [discounts, setDiscounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // -- auth, route logic
  const { route } = useEndpoint(discount_type);

  // --- side effects
  useEffect(() => {
    // cleanup go on
    let mounted = true;
    axios
      .get(route, {
        method: 'GET',
        headers: {
          // 'application/json' is the modern content-type for JSON, but some
          // older servers may use 'text/json'.
          // See: http://bit.ly/text-json

          'Content-Type': 'application/javascript',
        },
      })
      .then((data) => {
        if (mounted) {
          setDiscounts(data.data);
          // console.log(data.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.message);
          setIsLoading(false);
        }
      });
    return () => (mounted = false);
  }, [route]);

  return { discounts, isLoading, error };
};

export default useGetDiscounts;
