const Cards = ({ img, title, details, user, km, year, value }) => {
  return (
    <div>
      <div>
        <img src={img} alt=''/>
      </div>

      <h3>{title}</h3>
      <span>{details}</span>

      <div>
        <div>
          <p>{km}</p>
        </div>
        <div>
          <p>{year}</p>
        </div>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Cards;
