import MatchDetail from './MatchDetail'

type Params = { params: { id: string } }

function Match({ params }: Params) {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-5xl py-8 uppercase">
                {'CHI TIẾT LỊCH SỬ ĐẤU'}
            </h1>
            <div className="flex-1 w-full h-full grid grid-cols-5 grid-rows-3 gap-4 py-2 text-bamboo-100">
                <div className="bg-bamboo-400 col-span-3 row-span-1 rounded-md px-6 py-4 flex flex-col">
                    <MatchDetail matchId={params.id} />
                </div>
                <div
                    className="bg-bamboo-400 col-span-3 row-span-2 rounded-md px-6 py-4 tooltip"
                    data-tip="Coming soon"
                >
                    <div className="flex justify-between items-center blur">
                        <h2 className="text-2xl">{'Quá trình trận đấu'}</h2>
                        <div className="flex space-x-4">
                            <div className="btn btn-secondary">
                                {'Nước đi trước'}
                            </div>
                            <div className="btn btn-secondary">
                                {'Nước đi kế'}
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto blur">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr className="text-bamboo-100">
                                    <th>{'Người chơi'}</th>
                                    <th>{'Mốc thời gian'}</th>
                                    <th>{'Nước đi'}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>Player 1</td>
                                    <td>0:01</td>
                                    <td>{'A1 -> B2'}</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>Player 2</td>
                                    <td>0:05</td>
                                    <td>{'C3 -> E5'}</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td>Player 1</td>
                                    <td>0:08</td>
                                    <td>{'A7 -> B8'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div
                    className="bg-dirt-400 col-start-4 col-end-6 row-start-1 row-span-3 rounded-md p-4 flex flex-col justify-center items-center text-center tooltip"
                    data-tip="Coming soon"
                >
                    <div className="bg-banco1 bg-center bg-contain bg-no-repeat p-2 inline-grid grid-cols-9 gap-x-[6.5px] gap-y-[6px] w-full max-w-2xl flex-1 blur"></div>
                </div>
            </div>
        </div>
    )
}

export default Match
