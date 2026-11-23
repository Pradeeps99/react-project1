
function PromoCards() {
  const cards = [
    {
      title: "RUN FASTER",
      text: "Push your limits and achieve your fitness goals.",
      color: "black"
    },
    {
      title: "TRAIN HARDER",
      text: "Get ready for your next big challenge.",
      color: "yellow"
    },
    {
      title: "PLAY STRONG",
      text: "Discover sportswear made for performance.",
      color: "yellow"
    },
    {
      title: "BE THE BEST",
      text: "Upgrade your game with SportX.",
      color: "black"
    }
  ];

  return (
    <section className="promo-section">
      <div className="promo-container">
        {cards.map((card, index) => (
          <div className={`promo-item ${card.color}`} key={index}>
            <div className="promo-content">
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <a href="#">More ▷</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PromoCards;
