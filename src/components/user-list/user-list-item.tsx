import FadeIn from "react-fade-in";
import { UsersProps } from "interfaces";
import { FC } from "react";
import useProgressiveImg from "hooks/use-image";
import { useNavigate } from "react-router-dom";

const UserListItem: FC<UsersProps> = (user) => {
  const navigate = useNavigate();
  const [src, { blur }] = useProgressiveImg(
    "/images/placeholder.png",
    user.image
  );

  return (
    <FadeIn>
      <li
        key={user.id}
        className="bg-secondary p-4 rounded-lg shadow-lg hover:ring-2 ring-blue cursor-pointer duration-200 active:scale-90"
        onClick={() => navigate(`/users/${user.id}`)}
      >
        <figure>
          <img
            src={src}
            loading="lazy"
            width={"100%"}
            height={"192px"}
            draggable="false"
            alt={user.maidenName}
            className="rounded-lg shadow-md object-cover"
            style={{
              filter: blur ? "blur(20px)" : "none",
              transition: blur ? "none" : "filter 0.3s ease-out",
            }}
          />
        </figure>
        <div className="text-sm mt-4 flex flex-col gap-1">
          <h2 className="font-medium text-heading">{user.email}</h2>
          <p className="text-sm opacity-80">{user.birthDate}</p>
        </div>
      </li>
    </FadeIn>
  );
};

export default UserListItem;
