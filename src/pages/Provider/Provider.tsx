import React from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";

// styles
import { Container, Title, VehiclesWrapper } from "./Provider.styled";

// components
import Spinner from "../../components/ui/Spinner";
import VehicleCard from "../../components/VehicleCard";

// utils
import { getVehicles } from "./Provider.utils";

// types
import { Vehicle } from "../../types/api";

const Provider = () => {
  const params: { name: string } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const providerId = queryParams.get("id");

  const { data: vehicles, isFetching } = useQuery(
    ["getVehicles", providerId || ""],
    getVehicles
  );

  return (
    <Container>
      <Title>{`${params.name} vehicles`}</Title>
      <VehiclesWrapper>
        {isFetching ? (
          <Spinner />
        ) : (
          vehicles.map((vehicle: Vehicle) => (
            <VehicleCard key={vehicle._id} vehicle={vehicle} />
          ))
        )}
      </VehiclesWrapper>
    </Container>
  );
};

export default Provider;
