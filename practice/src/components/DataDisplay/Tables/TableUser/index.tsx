import React from "react";
import UserItem from "./UserItem";
import {user} from "../../../../mocks/user";

const TableUser: React.FC = () => {
  return(
    <>
     <table className="w-full text-xl font-semibold text-quaternary font-sans">
      <thead className="table__head">
        <tr className="w-full">
          <th className="font-semibold text-left text-primary bg-buttonPrimary p-20">Image</th>
          <th className="font-semibold text-left text-primary bg-buttonPrimary p-20">Full name</th>
          <th className="font-semibold text-left text-primary bg-buttonPrimary p-20">Email</th>
        </tr>
      </thead>

      <tbody className="text-base font-normal" id="user-body">
        {user.map((user) => (
          <UserItem
            key={user.id}
            email={user.email}
            username={user.username}
            img={user.img}
          />
        ))}
      </tbody>
    </table>
    </>
  )
}

export default TableUser;
