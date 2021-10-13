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
            <p> Adresas: [{discount.acf.imones_adresas}]</p>
            <p> Web url: [{discount.acf.imones_internetinis_tinklapis}]</p>
            <p> El. pastas: [{discount.acf.imones_el_pastas}]</p>
            <p> PVM kodas: [{discount.acf.imones_kodas}]</p>
            <p>CopyRights: [{discount.acf.imones_pavadinimas}]</p>

            <p> Telefonas: [{discount.acf.imones_telefonas}]</p>
            {/* <img
              src={discount.images[0].src}
              alt={discount.name}
              style={{ width: '300px' }}
            />
            <p>Price: ${discount.price}</p> */}
            {/* <p>
              {discount.type} id: {discount.id}
            </p> */}
            <p>Aprasymas: [{discount.yoast_head_json.og_description}]</p>
            <button>Use discount code</button>
          </>
        )}
      </section>
    </main>
  );
};

export default DiscountDetailsPage;
