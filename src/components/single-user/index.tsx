import { UsersProps } from "interfaces";
import { FC } from "react";
import UserCompany from "./user-company";
import UserProfile from "./user-profile";
import UserInfo from "./user-info";

const SingleUser: FC<UsersProps> = (user) => {
  return (
    <div className="grid xl:grid-cols-9 lg:grid-cols-9 md:grid-cols-9 sm:grid-cols-8 gap-4">
      <UserProfile
        image={user.image}
        email={user.email}
        lastName={user.lastName}
        birthDate={user.birthDate}
        firstName={user.firstName}
        maidenName={user.maidenName}
      />
      <UserCompany {...user} />
      <UserInfo {...user} />
    </div>
  );
};

export default SingleUser;
