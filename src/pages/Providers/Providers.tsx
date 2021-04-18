import React from "react";
import { useQuery } from "react-query";

// styles
import { Container, Title } from "./Providers.styled";

// components
import Spinner from "../../components/ui/Spinner";
import ProviderRow from "../../components/ProviderRow";

// utils
import { getProviders } from "./Providers.utils";

const Providers = () => {
  const { data: providers, isFetching } = useQuery(
    "getProviders",
    getProviders
  );

  return (
    <Container>
      <Title>Providers</Title>
      {isFetching ? (
        <Spinner />
      ) : (
        providers.map(
          (provider: { name: string; vehicles: string[]; _id: string }) => (
            <ProviderRow
              name={provider.name}
              vehicles={provider.vehicles.length}
              id={provider._id}
            ></ProviderRow>
          )
        )
      )}
    </Container>
  );
};

export default Providers;
