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
          className=" bg-primary rounded-md shadow-lg w-1/2 h-1/3 float-left" style={{marginLeft:'2%'}}>
            <table className='text-bamboo-100 flex items-center'>
                <tr>
                    <td><img src='/avatars/1.png'className='h-20 rounded-full' ></img></td>
                    <td>
                        <div className='inline-block float-left ml-10'>
                            Owlvernyte
                            <img src='/flags/vietnam.png' className='float-right ml-2 h-8'></img>
                        </div>
                        <div>
                            1234 
                            <img src='/thitnuong.svg' className='float-left'></img>
                        </div>
                        <div>
                            10.7
                        </div>
                    </td>
                </tr>
            </table>

            <table className='w-4/5 m-10 ml-16 justify-center bg-bamboo-300'>
                <tr className='text-center text-bamboo-200'>
                    <th>Thắng</th>
                    <th>Thua</th>
                    <th>Hòa</th>
                </tr>
                <tr className='text-center text-bamboo-100 text-4xl'>
                    <td>120</td>
                    <td>10</td>
                    <td>5</td>
                </tr>
            </table>

            <div id="setting"
          className=" bg-primary rounded-md shadow-lg w-full float-left">
            <table className='text-bamboo-100 flex items-center'>
                <tr>
                <label className='mr-8'>Chọn quốc gia: </label> 
                <div className="dropdown dropdown-end bg-bamboo-100 mt-2 w-60">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn text-dirt-200">
                        <img src='/flags/vietnam.png' className='h-8'></img>
                        Việt Nam
                        <img src='/icons/dropdown.png' className='float-right inline-block h-8 ml-10'></img>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content z-[1] p-2 shadow bg-primary 
                            text-primary-content rounded-md w-52 mt-4 bg-bamboo-100 "
                        >
                            <li>
                                <a className='text-dirt-200 h-4'><img src='/flags/england.png'></img>Anh</a>
                            </li>
                            <li>
                                <a className='text-dirt-200 h-4'><img src='/flags/usa.png'></img>Mỹ</a>
                            </li>
                        </ul>
                    </div>
                </tr>
            </table>
            <br></br>

            <label className='text-bamboo-100 flex items-center'>Chọn ảnh đại diện:</label>
            <table className='justify-center w-4/5 m-5'>
                
                <tr>
                    <td>
                        <button><img src='/avatars/1.png' className='h-20 rounded-full'></img></button>
                    </td>
                    <td>
                        <button><img src='/avatars/2.png' className='h-20 rounded-full'></img></button>
                    </td>
                    <td>
                        <button><img src='/avatars/3.png' className='h-20 rounded-full'></img></button>
                    </td>
                    <td>
                        <button><img src='/avatars/4.png' className='h-20 rounded-full'></img></button>
                    </td>
                    <td>
                        <button><img src='/avatars/5.png' className='h-20 rounded-full'></img></button>
                    </td>
                    <td>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost rounded-btn bg-bamboo-100">
                            ...
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content z-[1] p-2 shadow bg-primary text-primary-content rounded-md w-52 mt-4"
                            >
                                <table>
                                    <tr>
                                        <button><img src='/avatars/6.png' className='rounded-full h-20'></img></button>
                                        <button><img src='/avatars/1.png' className='rounded-full h-20'></img></button>
                                        <button><img src='/avatars/2.png' className='rounded-full h-20'></img></button>
                                        <button><img src='/avatars/3.png' className='rounded-full h-20'></img></button>
                                    </tr>
                                </table>
                            </ul>
                        </div>
                    </td>
                </tr>
            </table>
            <button className='bg-bamboo-100 mb-5 w-1/5' style={{marginLeft:'30em'}}>Cập nhật</button>
        </div>

        </div>


        <div id="friend_list"
          className=" bg-primary rounded-md shadow-lg w-1/2 h-full" style={{marginTop:'2%',marginLeft:'54%'}}>
            <table className='text-bamboo-100'>
                <tr>
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
                    </tr>
            </table>
            <table className='text-bamboo-100 flex items-center' style={{marginLeft:'2%'}}>
                
                <tr>
                    <td><img src='/avatars/1.png' className='h-20 rounded-full' style={{marginTop:'50%'}}></img></td>
                    <td>
                        <div className='inline-block ml-10' style={{marginTop:'25%'}}>
                            Owlvernyte1
                            <img src='/flags/vietnam.png' className='float-right h-8 w-12 ml-2'></img>
                        </div>
                        <div>
                            Trực Tuyến
                            <span className='rounded-full inline-block float-left h-5 w-5 mr-5'
                            style={{backgroundColor:'lawngreen'}}></span>
                        </div>
                        <div>
                            1234
                            <img src='/thitnuong.svg' className='float-left'></img>
                        </div>
                    </td>

                    <tr>
                        <td><img src='/avatars/1.png' className='h-20 rounded-full' style={{marginTop:'50%'}}></img></td>
                        <td>
                            <div className='inline-block ml-10' style={{marginTop:'25%'}}>
                                Owlvernyte2
                                <img src='/flags/usa.png' className='float-right h-8 w-12 ml-2'></img>
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
                        </td>
                    </tr>

                    <tr>
                        <td><img src='/avatars/1.png' className='h-20 rounded-full' style={{marginTop:'50%'}}></img></td>
                        <td>
                            <div className='inline-block ml-10' style={{marginTop:'25%'}}>
                                Owlvernyte3
                                <img src='/flags/england.png' className='float-right h-8 w-12 ml-2'></img>
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
                        </td>
                    </tr>
                </tr>
            </table>

    </div>

        
    </div>
    )
    
}
