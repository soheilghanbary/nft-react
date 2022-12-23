import SingleUser from "components/single-user";
import { useUser } from "hooks/useUsers";
import { useParams } from "react-router-dom";

export default function User() {
  const params = useParams()
  const { user, isLoading } = useUser(params.id);
  if (isLoading) return <p>Loading ...</p>;
  return (
    <>
      <SingleUser {...user} />
    </>
  );
}
