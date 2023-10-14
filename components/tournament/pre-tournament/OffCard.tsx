"use client";

import React, { useState } from "react";
import Pagination from "./Pagination";

interface User {
  id: number;
  name: string;
  avatarSrc: string;
  email: string;
  win: number;
}

interface Tournament {
  id: number;
  name: string;
  bannerSrc: string;
  users: User[];
}

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    avatarSrc: "/avatars/avatar1.png",
    email: "john.doe@example.com",
    win: 5,
  },
  {
    id: 2,
    name: "Jane Doe",
    avatarSrc: "/avatars/avatar1.png",
    email: "jane.doe@example.com",
    win: 6,
  },
  {
    id: 3,
    name: "Bob Smith",
    avatarSrc: "/avatars/avatar1.png",
    email: "bob.smith@example.com",
    win: 6,
  },
  {
    id: 4,
    name: "Bob Smith",
    avatarSrc: "/avatars/avatar1.png",
    email: "bob.smith@example.com",
    win: 5,
  },
  {
    id: 5,
    name: "Bob Smith",
    avatarSrc: "/avatars/avatar1.png",
    email: "bob.smith@example.com",
    win: 4,
  },
];

const tournaments: Tournament[] = [
  {
    id: 1,
    name: "Tournament 1",
    bannerSrc: "/icons/Cup.svg",
    users: users.slice(0, 3),
  },
  {
    id: 2,
    name: "Tournament 2",
    bannerSrc: "/icons/Cup.svg",
    users: users.slice(2, 5),
  },
];
const TournamentList = ({ currentItems }: { currentItems: Tournament[] }) => {
  return (
    <div className="w-full h-full">
      {currentItems.map((tournament) => (
        <Tournament key={tournament.id} tournament={tournament} />
      ))}
    </div>
  );
};

const Tournament = ({ tournament }: { tournament: Tournament }) => {
  return (
    <div className="flex justify-left items-center">
      <div className="flex flex-col items-center justify-center w-1/5 bg-dirt-300 rounded shadow mx-[15px] h-full  ">
        <div className="text-center text-lg font-bold mb-2">
          {tournament.name}
        </div>
        <img className="w-40 h-60" src={tournament.bannerSrc} alt="Banner" />
        <div className="text-dirt-200 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl py-2">
          asd
        </div>
      </div>
      <div className=" text-bamboo-100 rounded-md text-xl w-5/6 h-full ">
        <UserList users={tournament.users} />
      </div>
    </div>
  );
};

const UserList = ({ users }: { users: User[] }) => {
  const sortedUsers = [...users].sort((a, b) => b.win - a.win);
  return (
    <div className="flex flex-row w-full ">
      {sortedUsers.slice(0, 3).map((user, index) => (
        <UserCard key={user.id} user={user} rank={index + 1} />
      ))}
    </div>
  );
};

const UserCard = ({ user, rank }: { user: User; rank: number }) => {
  return (
    <div className="w-full justify-center items-center pr-6">
      <div className="flex flex-row justify-center items-center text-xl bg-bamboo-200 h-3/5 m-4 pt-10 pb-10 ">
        {rank === 1 ? (
          <img
            className=" object-fit-containt "
            src="/medals/top1.svg"
            alt="Gold Medal"
          ></img>
        ) : rank === 2 ? (
          <img
            className="object-fit-containt"
            src="/medals/top2.svg"
            alt="Silver Medal"
          ></img>
        ) : rank === 3 ? (
          <img
            className="object-fit-containt"
            src="/medals/top3.svg"
            alt="Bronze Medal"
          ></img>
        ) : null}
        <div className="text-6xl text-dirt-300">{user.win}</div>
      </div>
      <div className="flex flex-row justify-center items-center bg-bamboo-300 h-1/5 p-6 m-4 ">
        <img className=" w-14 h-14 rounded-full" src={user.avatarSrc}></img>
        <div className="px-4">{user.name}</div>
      </div>
    </div>
  );
};

const OffCard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 1;

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const currentItems = tournaments.slice(startIndex, endIndex);

  return (
    <>
      <div className=" bg-bamboo-400 rounded shadow mb-6 pl-4 text-bamboo-100 ">
        <div className=" text-3xl pb-8 pt-4 pl-4 "> Bang Cac Giai Dau</div>
        <TournamentList currentItems={currentItems} />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(tournaments.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default OffCard;
