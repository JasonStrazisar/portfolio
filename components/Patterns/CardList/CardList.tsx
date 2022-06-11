import { Card } from "../..";
import { CardListProps } from "./CardList.interface";
import { CardListContainer } from "./CardList.style";

const CardList = ({ cardList }: CardListProps): JSX.Element => (
  <CardListContainer>
    {cardList.map(({ id, title, slug, image }) => (
      <Card key={id} title={title} slug={slug} image={image} />
    ))}
  </CardListContainer>
);

export default CardList;
