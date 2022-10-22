import "../App.css";
import { GET_URL } from "../api/queries";
import { useQuery } from "urql";
import { useParams } from "react-router-dom";

function HomePage() {
  const { id } = useParams();
  const [result, executeQuery] = useQuery({
    query: GET_URL,
    variables: { input: id },
  });
  const { data, fetching, error } = result;
  if (error) alert(error.message);
  console.log(data);
  if (data) {
    if (data.url) {
      window.location.replace(data.url.originalLink);
    }
  }

  return <></>;
}

export default HomePage;
