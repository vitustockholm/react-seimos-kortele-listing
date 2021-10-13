import { useState, useEffect } from 'react';
import useEndpoint from './useEndpoint';
import axios from 'axios';

const useGetDiscount = (discount_type, id) => {
  // Hooks
  // -- state
  const [discount, setDiscount] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // -- auth, route logic
  //   const { consumer_key, consumer_secret, route } = useEndpoint(product_type);
  const { route } = useEndpoint(discount_type);

  // --- side effects
  useEffect(() => {
    // cleanup go on
    let mounted = true;
    axios
      .get(route + id, {
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
          setDiscount(data.data);
          console.log(data.data);
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
  }, [route, id]);

  return { discount, isLoading, error };
};

export default useGetDiscount;
