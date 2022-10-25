import UserAdvertiser from "../UserAdvertiser";
import { Card, BackGroundImg, DataCar, Value } from "./styled";

const Cards = ({ img, title, details, user, km, year, value }) => {
  return (
    <Card>
      <BackGroundImg>
        <img src={img} alt='' draggable={false}/>
      </BackGroundImg>

      <h3>{title}</h3>
      <span>{details}</span>

      <UserAdvertiser userName={user} color='blue'/>

      <DataCar>
        <div>
          <p>{km}</p>
        </div>
        <div>
          <p>{year}</p>
        </div>
        <Value>{value}</Value>
      </DataCar>
    </Card>
  );
};

export default Cards;
