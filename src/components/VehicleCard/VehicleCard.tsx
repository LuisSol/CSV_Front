import React, { FC } from "react";

// styles
import { Container } from "./VehicleCard.styled";

// types
import { Vehicle } from "../../types/api";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const renderPropName = (prop: [string, string | Date]) => {
  switch (prop[0]) {
    case "_id":
    case "__v":
    case "provider":
    case "UUID":
      return null;
    case "Create Date":
    case "Update Date":
      return `${prop[0]}: ${prop[1].toString().slice(0, 10)}`;
    default:
      return `${prop[0]}: ${prop[1]}`;
  }
};

const VehicleCard: FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <Container>
      {Object.entries(vehicle).map((prop) => (
        <p key={prop[0]}>{renderPropName(prop)}</p>
      ))}
    </Container>
  );
};

export default VehicleCard;
