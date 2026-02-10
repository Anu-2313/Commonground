import OfferCard from '../components/OfferCard.jsx';

const OffersList = () => {
  const offers = [
    {
      id: 1,
      projectTitle: 'Neighborhood Garden Network',
      amount: 5000,
      status: 'pending'
    }
  ];

  return (
    <section>
      <h2>Funding Offers</h2>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </section>
  );
};

export default OffersList;
