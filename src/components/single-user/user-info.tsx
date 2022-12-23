import { UsersProps } from "interfaces";
import { FC } from "react";

const UserInfo: FC<UsersProps> = (user) => {
  return (
    <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-4">
      <div className="p-4 shadow-lg rounded-lg bg-secondary">
        <h2 className="text-lg text-heading font-medium">Information</h2>
        <ul className="text-sm sm:text-xs flex flex-col gap-3 mt-4">
          <li className="flex justify-between items-center">
            <span>Name:</span>
            <span className="text-heading">{user.firstName + ' ' + user.lastName}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Age:</span>
            <span className="text-heading">{user.age}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Gender:</span>
            <span className="text-heading">{user.gender}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Phone:</span>
            <span className="text-heading">{user.phone}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Website:</span>
            <span className="text-heading">{user.domain}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Blood Group:</span>
            <span className="text-heading">
              {user.bloodGroup}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
