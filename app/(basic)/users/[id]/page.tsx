'use client'

import StatCard from '@/components/leaderboard/personal-achievements/StatCard'
import PlayerInformation from '@/components/player/PlayerInformation'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import useCheckAuthorization from '@/features/user/useCheckAuthorization'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function UserInfo() {
    const { data: user } = useCheckAuthorization()

    return (
        // TODO: Còn Hard Code dữ liệu!
        <div className="h-full space-y-2 flex flex-col">
            <div className="grid grid-cols-8 gap-2 grid-flow-row-dense flex-1 h-full">
                <div
                    id="user-info"
                    className="col-span-6 space-y-2 h-full pb-2"
                >
                    <div
                        id="info"
                        className="card bg-bamboo-400 rounded-md w-full h-1/2"
                    >
                        <div className="card-body">
                            <div className="flex justify-between">
                                <PlayerInformation
                                    avatarSrc="/assets/avatars/avatar1.png"
                                    username={user?.userName ?? 'Unknown'}
                                    textSize="text-3xl"
                                    avatarSize={50}
                                    hasFlag
                                    flagSrc="/assets/flags/VN.svg"
                                    hasScore
                                    scoreValue={1234}
                                    hasTimeSpent
                                    timeSpentValue={20.4}
                                />
                                <div className="tooltip" data-tip="Tài Khoản">
                                    <Link href={'/settings/account'}>
                                        <IconButton
                                            iconSrc="/assets/icons/primary/User_fill.svg"
                                            iconAlt="account-icon"
                                            buttonVariants="btn-neutral"
                                            className="bg-bamboo-300 border-transparent"
                                        />
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-bamboo-300 text-bamboo-100 rounded-md flex flex-col justify-around items-center md:flex-row py-2 px-20 my-4">
                                <StatCard label="Thắng" value={10} />
                                <StatCard label="Thua" value={20} />
                                <StatCard label="Hoà" value={30} />
                            </div>
                        </div>
                    </div>

                    <div
                        id="custom-info"
                        className="card bg-bamboo-400 rounded-md w-full h-1/2"
                    >
                        <div className="card-body">
                            <div className="my-2">
                                <div className="flex items-center space-x-2 py-2">
                                    <div className="text-bamboo-100 text-xl">
                                        Chọn Quốc Gia
                                    </div>
                                    <select
                                        className="select select-bordered select-primary bg-bamboo-100 w-full max-w-lg"
                                        title="Choose Flag"
                                        name="choose-flag"
                                        defaultValue={'Viet Nam'}
                                    >
                                        {flags.map((v) => (
                                            // TODO: Chưa làm được phần Start Icon là Flag
                                            <option key={v}>{v}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="my-2">
                                    <div className="text-bamboo-100 text-xl mb-4">
                                        Chọn Ảnh Đại Diện
                                    </div>
                                    <div className="flex space-x-4 items-center">
                                        <div className="hover:blur-sm">
                                            <Image
                                                src="/assets/avatars/avatar1.png"
                                                alt="avatar1"
                                                width={140}
                                                height={140}
                                                className="rounded-md"
                                            />
                                        </div>
                                        <div className="hover:blur-sm">
                                            <Image
                                                src="/assets/avatars/avatar2.png"
                                                alt="avatar2"
                                                width={140}
                                                height={140}
                                                className="rounded-md"
                                            />
                                        </div>
                                        <div className="hover:blur-sm">
                                            <Image
                                                src="/assets/avatars/avatar3.png"
                                                alt="avatar3"
                                                width={140}
                                                height={140}
                                                className="rounded-md"
                                            />
                                        </div>
                                        <div className="hover:blur-sm">
                                            <Image
                                                src="/assets/avatars/avatar4.png"
                                                alt="avatar4"
                                                width={140}
                                                height={140}
                                                className="rounded-md"
                                            />
                                        </div>
                                        <div className="hover:blur-sm">
                                            <Image
                                                src="/assets/avatars/avatar5.png"
                                                alt="avatar5"
                                                width={140}
                                                height={140}
                                                className="rounded-md"
                                            />
                                        </div>
                                        <div className="hover:blur-sm">
                                            <Image
                                                src="/assets/avatars/avatar6.png"
                                                alt="avatar6"
                                                width={140}
                                                height={140}
                                                className="rounded-md"
                                            />
                                        </div>
                                        <IconButton
                                            iconSrc="/assets/icons/primary/Meatballs_menu.svg"
                                            iconAlt="More"
                                            buttonVariants="btn-neutral"
                                            className="bg-bamboo-300 border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button className="btn btn-secondary btn-md w-52">
                                        Cập Nhật
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="friend-list"
                    className="card bg-bamboo-400 rounded-md w-full col-span-2 overflow-y-auto max-h-full"
                >
                    <div className="card-body">
                        <div className="flex justify-between items-center">
                            <div className="text-2xl text-bamboo-100">
                                Bạn Bè
                            </div>
                            <Button
                                text="Thêm Bạn"
                                buttonVariants="btn-secondary"
                                startIcon
                                startIconSrc="/assets/icons/secondary/User_add_alt_fill.svg"
                                startIconAlt="Share Icon"
                                onClick={() =>
                                    (window as any).modal_add_friend.showModal()
                                }
                            />
                            <dialog id="modal_add_friend" className="modal">
                                <div className="modal-box w-full bg-bamboo-400">
                                    <form method="dialog">
                                        <IconButton
                                            iconSrc="/assets/icons/primary/Dell_fill.svg"
                                            iconAlt="Icon Close"
                                            buttonVariants="btn-primary"
                                            buttonStyle="btn-circle"
                                            className="absolute right-2 top-2"
                                        />
                                        <h3 className="text-3xl text-bamboo-100 py-4">
                                            Kết Bạn
                                        </h3>
                                        <div className="px-4">
                                            <input
                                                type="text"
                                                name="searchUsername"
                                                placeholder="Tìm tên người dùng"
                                                className="input input-bordered input-lg w-full bg-bamboo-200 placeholder-dirt-400 placeholder-opacity-50 text-lg mb-5"
                                            />

                                            {/* Hard Code */}
                                            <div
                                                id="result-search-username"
                                                className="flex justify-between items-center"
                                            >
                                                <PlayerInformation
                                                    username="Player1"
                                                    avatarSrc="/assets/avatars/avatar1.png"
                                                    hasFlag
                                                    flagSrc="/assets/flags/VN.svg"
                                                />
                                                <IconButton
                                                    iconSrc="/assets/icons/secondary/User_add_alt_fill.svg"
                                                    iconAlt="Add"
                                                    buttonVariants="btn-secondary"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* closes when clicked outside */}
                                <form
                                    method="dialog"
                                    className="modal-backdrop"
                                >
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>

                        <div className="flex flex-col py-4 space-y-4">
                            {players.map((p) => (
                                <PlayerInformation
                                    key={p.username}
                                    username={p.username}
                                    avatarSrc={p.avatarSrc}
                                    avatarSize={50}
                                    imageWidth={70}
                                    imageHeight={70}
                                    hasFlag
                                    flagSrc={p.flagSrc}
                                    hasStatus
                                    status={p.status}
                                    hasScore
                                    scoreValue={p.score}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface PlayerData {
    username: string
    avatarSrc: string
    flagSrc: string
    status: 'Rảnh tay' | 'Đang chơi' | 'Ngoại tuyến'
    score: number
}

const players: PlayerData[] = [
    {
        username: 'Player 1',
        avatarSrc: '/assets/avatars/avatar1.png',
        flagSrc: '/assets/flags/VN.svg',
        status: 'Ngoại tuyến',
        score: 140,
    },
    {
        username: 'Player 2',
        avatarSrc: '/assets/avatars/avatar2.png',
        flagSrc: '/assets/flags/BO.svg',
        status: 'Đang chơi',
        score: 130,
    },
    {
        username: 'Player 3',
        avatarSrc: '/assets/avatars/avatar3.png',
        flagSrc: '/assets/flags/AC.svg',
        status: 'Rảnh tay',
        score: 242,
    },
    {
        username: 'Player 4',
        avatarSrc: '/assets/avatars/avatar4.png',
        flagSrc: '/assets/flags/VN.svg',
        status: 'Đang chơi',
        score: 45,
    },
    {
        username: 'Player 5',
        avatarSrc: '/assets/avatars/avatar5.png',
        flagSrc: '/assets/flags/AZ.svg',
        status: 'Đang chơi',
        score: 1314,
    },
    {
        username: 'Player 6',
        avatarSrc: '/assets/avatars/avatar6.png',
        flagSrc: '/assets/flags/VN.svg',
        status: 'Ngoại tuyến',
        score: 4564,
    },
    {
        username: 'Player 7',
        avatarSrc: '/assets/avatars/avatar6.png',
        flagSrc: '/assets/flags/VN.svg',
        status: 'Rảnh tay',
        score: 884,
    },
]

// TODO: Sẽ cập nhật thành object chứa value & icon
const flags = [
    'Afghanistan',
    'Åland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia (Plurinational State of)',
    'Bonaire, Sint Eustatius and Saba',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Congo, Democratic Republic of the',
    'Cook Islands',
    'Costa Rica',
    "Côte d'Ivoire",
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czechia',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Falkland Islands (Malvinas)',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and McDonald Islands',
    'Holy See',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran (Islamic Republic of)',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    "Korea (Democratic People's Republic of)",
    'Korea, Republic of',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia (Federated States of)',
    'Moldova, Republic of',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands, Kingdom of the',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'North Macedonia',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine, State of',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Réunion',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'Saint Barthélemy',
    'Saint Helena, Ascension and Tristan da Cunha',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin (French part)',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten (Dutch part)',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan, Province of China',
    'Tajikistan',
    'Tanzania, United Republic of',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Türkiye',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom of Great Britain and Northern Ireland',
    'United States of America',
    'United States Minor Outlying Islands',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela (Bolivarian Republic of)',
    'Viet Nam',
    'Virgin Islands (British)',
    'Virgin Islands (U.S.)',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
]

export default UserInfo
