import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";
import decode from "jwt-decode";

export default function Metrics() {
  return (
    <>
      <h1>Métricas</h1>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (context) => {
  const apiClient = setupAPIClient(context);

  const response = await apiClient.get("/me");

  console.log(response.data);

  return {
    props: {},
  };
}, {
    permissions: ['metrics.list'],
    roles: ['administrator'],
});
