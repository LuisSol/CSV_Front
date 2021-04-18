import React, { FC } from "react";
import { useHistory } from "react-router-dom";

// styles
import { Container } from "./ProciderRow.styled";

interface ProviderRowProps {
  name: string;
  vehicles: Number;
  id: string;
}

const ProviderRow: FC<ProviderRowProps> = ({ name, vehicles, id }) => {
  const history = useHistory();

  const handleClick = (id: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    history.push(`/providers/${name}?id=${id}`);
  };

  return (
    <Container onClick={handleClick(id)}>
      <h3>{name}</h3>
      <h3>{`Number of vehicles: ${vehicles}`}</h3>
    </Container>
  );
};

export default ProviderRow;
