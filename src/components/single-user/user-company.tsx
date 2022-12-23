import { UsersProps } from "interfaces";
import { FC } from "react";

const UserCompany: FC<UsersProps> = (user) => {
  return (
    <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-4">
      <div className="p-4 shadow-lg rounded-lg bg-secondary">
        <h2 className="text-lg text-heading font-medium">Company</h2>
        <ul className="text-sm sm:text-xs flex flex-col gap-3 mt-4">
          <li className="flex justify-between items-center">
            <span>Name:</span>
            <span className="text-heading">{user.company.name}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Title:</span>
            <span className="text-heading">{user.company.title}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Departmant:</span>
            <span className="text-heading">{user.company.department}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Address:</span>
            <span className="text-heading">{user.company.address.address}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>City:</span>
            <span className="text-heading">{user.company.address.city}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>PostalCard:</span>
            <span className="text-heading">
              {user.company.address.postalCode}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCompany;
