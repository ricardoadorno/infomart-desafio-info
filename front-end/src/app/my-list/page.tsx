import { Container } from "@/styles/global";
import { ListContainer, ListContent } from "./styles";

import Lists from "@/components/lists";

const fetchData = async () => {
  const response = await fetch("http://localhost:5000/products", {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const data = await response.json();
  return data;
};

export default async function MyList() {
  const apiData = await fetchData();

  return (
    <Container>
      <ListContainer>
        <h1 className="h2">Sua lista</h1>
        <ListContent>
          <Lists apiData={apiData} />
        </ListContent>
      </ListContainer>
    </Container>
  );
}
