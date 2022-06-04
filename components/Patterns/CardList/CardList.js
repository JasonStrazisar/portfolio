import { Card } from "../..";
import { CardListContainer } from "./CardList.style";

const CardList = ({ cardList }) => (
  <CardListContainer>
    {cardList.map(({ id, title, slug, image }) => (
      <Card key={id} title={title} slug={slug} image={image} />
    ))}
  </CardListContainer>
);

export default CardList;
