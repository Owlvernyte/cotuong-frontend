'use client'
import React from 'react'
import { useStore } from '@/lib/zustand/store'
import Image from 'next/image'
import { url } from 'inspector'
import { inherits } from 'util'

export default function UserInfo(){
    return(
    <div className='h-full'>
        <div id="user_info"
          className=" bg-primary rounded-md shadow-lg w-1/2 h-2/5 float-left" style={{marginLeft:'2%'}}>
            <div className='text-bamboo-100 flex items-center table-auto'>
                <div>
                    <div className='table-cell'><img src='/avatars/avatar1.png'className='h-20 rounded-full' ></img></div>
                        <div className='table-cell'>
                            <div className='inline-block float-left ml-3'>
                                <div className='ml-10'>
                                Owlvernyte
                                <img src='/flags/vn.svg' className='float-right h-8 ml-3'></img>
                                </div>
                            <div>
                                1234 
                                <img src='/thitnuong.svg' className='float-left'></img>
                            </div>
                            <div>
                                10.7
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-4/5 m-10 mt-30 ml-16 justify-center bg-bamboo-300'>
                
                <div className='text-center text-bamboo-200 row'>
                    <div className='table-cell'>&ensp;&emsp;&emsp;&emsp;Thắng&emsp;&emsp;&emsp;</div>
                    <div className='table-cell'>&ensp;&emsp;&emsp;&emsp;Thua&emsp;&emsp;&emsp;</div>
                    <div className='table-cell'>&ensp;&emsp;&emsp;&emsp;Hòa&emsp;&emsp;&emsp;</div>
                </div>
                
                
                <div className='text-center text-bamboo-100 text-4xl row'>
                    <div className='table-cell'>&ensp;&ensp;&ensp;120&ensp;&ensp;&ensp;</div>
                    <div className='table-cell'>&ensp;&ensp;&ensp;10&ensp;&ensp;&ensp;</div>
                    <div className='table-cell'>&ensp;&ensp;&ensp;5&ensp;&ensp;&ensp;</div>
                </div>
                
            </div>

            <div id="setting"
          className=" bg-primary rounded-md shadow-lg w-full float-left">
                <div className='text-bamboo-100 flex items-center table'>
                    
                    <div className='table-row '>
                    <label className='mr-8 text-2xl'>Chọn quốc gia: </label> 
                    <div className="dropdown dropdown-end bg-bamboo-100 mt-2 w-60">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn text-dirt-200">
                        <img src='/flags/vn.svg' className='h-8'></img>
                        Việt Nam
                        <img src='/icons/dropdown.svg' className='float-right inline-block h-8 ml-10'></img>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content z-[1] p-2 shadow bg-primary 
                            text-primary-content rounded-md w-52 mt-4 bg-bamboo-100"
                        >
                            <li className='bg-bamboo-100 text-dirt-200'>
                                <button><img src='/flags/be.svg' className='h-10 w-20'></img>Bỉ</button>
                                <button><img src='/flags/us.svg' className='h-10 w-20'></img>Mỹ</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br></br>

            <label className='text-bamboo-100 flex items-center'>Chọn ảnh đại diện:</label>
            <div className='justify-center w-4/5 m-5 table'>
                
                <div className='table-row'>
                    <div className='table-cell'>
                        <button><img src='/avatars/avatar1.png' className='h-20 rounded-full'></img></button>
                    </div>
                    <div className='table-cell'>
                        <button><img src='/avatars/avatar2.png' className='h-20 rounded-full'></img></button>
                    </div>
                    <div className='table-cell'>
                        <button><img src='/avatars/avatar3.png' className='h-20 rounded-full'></img></button>
                    </div>
                    <div className='table-cell'>
                        <button><img src='/avatars/avatar4.png' className='h-20 rounded-full'></img></button>
                    </div>
                    <div className='table-cell'>
                        <button><img src='/avatars/avatar5.png' className='h-20 rounded-full'></img></button>
                    </div>
                    <div className='table-cell'>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost rounded-btn bg-bamboo-100">
                            ...
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content z-[1] p-2 shadow bg-primary text-primary-content rounded-md w-52 mt-4"
                            >
                                <div className='table'>
                                    <div className='table-row'>
                                        <button><img src='/avatars/avatar6.png' className='rounded-full h-20'></img></button>
                                        <button><img src='/avatars/avatar1.png' className='rounded-full h-20'></img></button>
                                        <button><img src='/avatars/avatar2.png' className='rounded-full h-20'></img></button>
                                        <button><img src='/avatars/avatar3.png' className='rounded-full h-20'></img></button>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
            <button className='bg-bamboo-100 mb-5 w-1/5' style={{marginLeft:'30em'}}>Cập nhật</button>
        </div>

        </div>


        <div id="friend_list"
          className=" bg-primary rounded-md shadow-lg w-1/2 h-full" style={{marginTop:'2%',marginLeft:'54%'}}>
            <div className='text-bamboo-100 table'>
                
                <div className='table-row'>
                <label className='text-2xl' style={{marginRight:'7em', marginLeft:'1em'}}>Bạn Bè</label>
                <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn text-2xl">
                        <img src='/icons/User_fill.svg' className='h-8'></img>
                        Thêm Bạn Bè
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content z-[1] p-2 shadow bg-primary text-primary-content rounded-md w-52 mt-4"
                        >
                            <li>
                            <form>
                                <input id="searchfriend"></input>
                            </form>
                            </li>

                        </ul>
                    </div>
                    </div>
                    
            </div>
            <div className='text-bamboo-100 flex items-center' style={{marginLeft:'2%'}}>
                
            <div className='mt-10'>
                        <div className='table-cell'><img src='/avatars/avatar1.png'className='h-20 rounded-full' ></img></div>
                            <div className='table-cell'>
                                <div className='inline-block float-left ml-3'>
                                    <div className='ml-10'>
                                    Owlvernyte1
                                    <img src='/flags/vn.svg' className='float-right h-8 ml-3'></img>
                                    </div>
                                <div>
                                    Trực tuyến 
                                    <span className='rounded-full inline-block float-left h-5 w-5 mr-5'
                                    style={{backgroundColor:'lawngreen'}}></span>
                                </div>
                                <div>
                                    1234 
                                    <img src='/thitnuong.svg' className='float-left'></img>
                                </div>
                            </div>
                        </div>
                    
                    <div className='mt-10'>
                        <div className='table-cell'><img src='/avatars/avatar1.png'className='h-20 rounded-full' ></img></div>
                            <div className='table-cell'>
                                <div className='inline-block float-left ml-3'>
                                    <div className='ml-10'>
                                    Owlvernyte2
                                    <img src='/flags/vn.svg' className='float-right h-8 ml-3'></img>
                                    </div>
                                <div>
                                    Đang chơi 
                                    <span className='rounded-full inline-block float-left h-5 w-5 mr-5'
                                    style={{backgroundColor:'red'}}></span>
                                </div>
                                <div>
                                    1234 
                                    <img src='/thitnuong.svg' className='float-left'></img>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className='mt-10'>
                        <div className='table-cell'><img src='/avatars/avatar1.png'className='h-20 rounded-full' ></img></div>
                            <div className='table-cell'>
                                <div className='inline-block float-left ml-3'>
                                    <div className='ml-10'>
                                    Owlvernyte3
                                    <img src='/flags/vn.svg' className='float-right h-8 ml-3'></img>
                                    </div>
                                <div>
                                    Ngoại tuyến 
                                    <span className='rounded-full inline-block float-left h-5 w-5 mr-5'
                                    style={{backgroundColor:'grey'}}></span>
                                </div>
                                <div>
                                    1234 
                                    <img src='/thitnuong.svg' className='float-left'></img>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>

    </div>

        
    </div>
    )
    
}
