import ButtonsMenuList from "@/components/rooms/ButtonsMenuList"
import RoomList from "@/components/rooms/RoomList"

function Lobby() {
  return (
    <div
      id="lobby"
      className="grid grid-cols-8 gap-2 grid-flow-row-dense flex-1 h-full"
    >
      <div className="card bg-dirt-400 rounded-md w-full col-span-6 overflow-y-auto max-h-full">
        <div className="card-body">
          <RoomList />
        </div>
      </div>

      <div className="card bg-bamboo-400 rounded-md w-full col-span-2 overflow-y-auto max-h-full">
        <div className="card-body">
            <ButtonsMenuList />

            <div className="w-full h-[1px] border-1 bg-bamboo-100 solid"></div>

            
        </div>
      </div>
    </div>
  )
}
export default Lobby
