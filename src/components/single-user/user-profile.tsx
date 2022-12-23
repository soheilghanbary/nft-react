import useProgressiveImg from "hooks/use-image";
import { FC } from "react";

interface UserProfileProps {
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  maidenName: string;
}

const UserProfile: FC<UserProfileProps> = ({
  image,
  email,
  maidenName,
  firstName,
  lastName,
  birthDate,
}) => {
  const [src, { blur }] = useProgressiveImg("/images/placeholder.png", image);
  return (
    <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-8">
      <div className="bg-secondary p-4 rounded-lg shadow-lg flex gap-4">
        <figure>
          <img
            src={src}
            loading="lazy"
            width={"100%"}
            height={"192px"}
            draggable="false"
            alt={maidenName}
            className="rounded-lg shadow-md object-cover w-32 p-2"
            style={{
              filter: blur ? "blur(20px)" : "none",
              transition: blur ? "none" : "filter 0.3s ease-out",
            }}
          />
        </figure>
        <div className="text-sm flex flex-col gap-1 mt-4">
          <h2 className="text-heading font-medium text-base">
            {firstName + " " + lastName}
          </h2>
          <h2>{email}</h2>
          <h2>{birthDate}</h2>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
