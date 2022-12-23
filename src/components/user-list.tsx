import { useUsers } from "hooks/useUsers";
import UserListItem from "./user-list/user-list-item";
import UserListSkeleton from "./user-list/user-list-skeleton";

const UserList = () => {
  const { users, isLoading, error } = useUsers();
  if (isLoading) return <UserListSkeleton />;
  return (
    <ul className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {users?.map((user) => (
        <UserListItem {...user} />
      ))}
    </ul>
  );
};

export default UserList;
