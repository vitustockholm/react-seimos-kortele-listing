import useGetDiscount from '../hooks/useGetDiscount';
import { useParams } from 'react-router-dom';

const DiscountDetailsPage = () => {
  const { id } = useParams();

  // console.log('id', id);
  const { discount, isLoading, error } = useGetDiscount('single-discount', id);

  return (
    <main>
      <section>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <img
              src={`${discount.yoast_head_json.og_image[0].url}`}
              alt={discount.id}
              style={{
                width: '250px',
                height: '150px',
                position: 'relative',
                textAlign: 'right',
              }}
            />
            <h1>{discount.title.rendered}</h1>
            {/* <img
              src={discount.images[0].src}
              alt={discount.name}
              style={{ width: '300px' }}
            />
            <p>Price: ${discount.price}</p> */}
            {/* <p>
              {discount.type} id: {discount.id}
            </p> */}
            <h4>{discount.yoast_head_json.og_description}</h4>

            <button>Use discount code</button>
          </>
        )}
      </section>
    </main>
  );
};

export default DiscountDetailsPage;
