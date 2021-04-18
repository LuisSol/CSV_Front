import React, { FC } from "react";

// styles
import { Container } from "./ProciderRow.styled";

interface ProviderRowProps {
  name: string;
  vehicles: Number;
  id: string;
}

const ProviderRow: FC<ProviderRowProps> = ({ name, vehicles, id }) => {
  const handleClick = (id: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(id);
  };

  return (
    <Container onClick={handleClick(id)}>
      <h3>{name}</h3>
      <h3>{`Number of vehicles: ${vehicles}`}</h3>
    </Container>
  );
};

export default ProviderRow;
