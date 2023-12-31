import React from "react"
import Image from "next/image"

interface PlayerInformationProps {
  username: string
  textColor?: string
  textSize?: string
  avatarSrc: string
  avatarSize?: number
  imageWidth?: number
  imageHeight?: number
  hasFlag?: boolean
  flagSrc?: string
  flagWidth?: number
  flagHeight?: number
  hasScore?: boolean
  scoreValue?: number
  hasStatus?: boolean
  status?: "Rảnh tay" | "Ngoại tuyến" | "Đang chơi"
  hasTimeSpent?: boolean
  timeSpentValue?: number
}

const PlayerInformation: React.FC<PlayerInformationProps> = ({
  username,
  textColor = "text-bamboo-100",
  textSize = "text-2xl",
  avatarSrc,
  avatarSize = 12,
  imageWidth = 100,
  imageHeight = 100,
  hasFlag = false,
  flagSrc = "",
  flagWidth = 40,
  flagHeight = 40,
  hasScore = false,
  scoreValue = 0,
  hasStatus = false,
  status = "Rảnh tay",
  hasTimeSpent = false,
  timeSpentValue = 0,
}) => {
  return (
    <div className="flex flex-col space-x-3 items-center md:flex-row">
      <div className="avatar">
        <div className={`w-${avatarSize} rounded-full`}>
          <Image
            src={avatarSrc}
            alt="Avatar"
            width={imageWidth}
            height={imageHeight}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-center items-center space-x-4">
          <div className={`${textColor} ${textSize} py-2`}>{username}</div>
          {hasFlag && (
            <div className="w-8">
              <Image
                src={flagSrc}
                alt="Flag"
                width={flagWidth}
                height={flagHeight}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          )}
        </div>

        {hasStatus && (
          <div className="flex items-center py-1">
            <div
              className={`btn btn-xs btn-circle ${
                status === "Rảnh tay"
                  ? "btn-success"
                  : status === "Đang chơi"
                  ? "btn-error"
                  : "btn-disabled"
              }`}
            >
              {" "}
            </div>
            <div className="text-lg text-bamboo-100 px-2">{status}</div>
          </div>
        )}

        {hasScore && (
          <div className="flex">
            <Image
              src="/assets/diemthitnuong.svg"
              alt="Score"
              width={30}
              height={30}
            />
            <div className="text-lg text-bamboo-100 px-2">{scoreValue}</div>
          </div>
        )}

        {hasTimeSpent && (
          <div className="flex">
            <Image
              src="/assets/icons/primary/Hhourglass_move_light.svg"
              alt="Time Spent"
              width={20}
              height={20}
            />
            <div className="text-lg text-bamboo-100 px-2 py-2">{timeSpentValue} giờ</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PlayerInformation
