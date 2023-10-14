"use client"

import React from "react"
import RoomCard from "./RoomCard"

// Note: Sử dụng data mẫu tạm thời
interface Room {
  idRoom: string
  numberOfViewers: number
  player1: string
  player2: string
  linkRoom: string
}

const rooms: Room[] = [
  {
    idRoom: "ABC123",
    numberOfViewers: 5,
    player1: "Username 1",
    player2: "Username 2",
    linkRoom: "/rooms/vip",
  },
  {
    idRoom: "DEF123",
    numberOfViewers: 5,
    player1: "Username 3",
    player2: "Username 4",
    linkRoom: "/rooms/vip",
  },
  {
    idRoom: "GHI123",
    numberOfViewers: 3,
    player1: "Username 5",
    player2: "Username 6",
    linkRoom: "/rooms/vip",
  },
  {
    idRoom: "JKL123",
    numberOfViewers: 2,
    player1: "Username 7",
    player2: "Username 8",
    linkRoom: "/rooms/vip",
  },
  {
    idRoom: "MNO123",
    numberOfViewers: 4,
    player1: "Username 9",
    player2: "Username 10",
    linkRoom: "/rooms/vip",
  },
  {
    idRoom: "PQR123",
    numberOfViewers: 6,
    player1: "Username 11",
    player2: "Username 12",
    linkRoom: "/rooms/vip",
  },
  {
    idRoom: "STU123",
    numberOfViewers: 3,
    player1: "Username 13",
    player2: "Username 14",
    linkRoom: "/rooms/vip",
  },
  {
    idRoom: "VWX123",
    numberOfViewers: 7,
    player1: "Username 15",
    player2: "Username 16",
    linkRoom: "/rooms/vip",
  },
]

function RoomList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:md:grid-cols-5  gap-2 grid-flow-row-dense">
      {rooms.map((r) => (
        <div key={r.idRoom} className="col-span-1">
          <RoomCard
            idRoom={r.idRoom}
            numberOfViewers={r.numberOfViewers}
            player1={r.player1}
            player2={r.player2}
            linkRoom={r.linkRoom}
          />
        </div>
      ))}
    </div>
  )
}

export default RoomList
