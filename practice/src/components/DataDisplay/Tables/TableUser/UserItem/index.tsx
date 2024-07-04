import React from "react";

export interface UserItemProps {
  email: string;
  username: string;
  img: string;
}

const UserItem: React.FC<UserItemProps> = ({ email, username, img }) => {
  return (
    <tr
      className="table__row user-row border-b-2 h-50 hover:bg-blue-50"
      data-id=""
    >
      <td className="align-middle p-20">
        <img src={img} alt={username} className="w-87 h-87 rounded-full" />
      </td>
      <td className="align-middle p-20">
        <p className="table__title user-name">{username}</p>
      </td>
      <td className="align-middle p-20 user-email">
        <p className="table__title">{email}</p>
      </td>
    </tr>
  );
};

export default UserItem;
