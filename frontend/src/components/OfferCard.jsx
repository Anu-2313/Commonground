const OfferCard = ({ offer }) => {
  return (
    <article className="card offer-card">
      <h3>Offer for {offer.projectTitle}</h3>
      <p>Amount: ${offer.amount}</p>
      <p>Status: {offer.status}</p>
    </article>
  );
};

export default OfferCard;
