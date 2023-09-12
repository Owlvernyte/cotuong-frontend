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
          className=" bg-primary rounded-md shadow-lg w-1/2 h-1/3" style={{marginLeft:'2%' ,float:'left'}}>
            <table className='text-bamboo-100 flex items-center'>
                <tr>
                    <td><img src='/avatars/1.png' style={{height:80,borderRadius:'50%'}}></img></td>
                    <td>
                        <div style={{display:'inline-block', marginLeft:40}}>
                            Owlvernyte
                            <img src='/flags/vietnam.png' style={{float:'right',height:30, marginLeft:10}}></img>
                        </div>
                        <div>
                            1234 
                            <img src='/thitnuong.svg' style={{float:'left'}}></img>
                        </div>
                        <div>
                            10.7
                        </div>
                    </td>
                </tr>
            </table>

            <table style={{backgroundColor:'aquamarine', width:'85%', justifyContent:'center', margin:'5%'}}>
                <tr className='text-center' style={{justifyContent:'true'}}>
                    <th>Thắng</th>
                    <th>Thua</th>
                    <th>Hòa</th>
                </tr>
                <tr className='text-center' style={{fontSize:36, justifyContent:'true'}}>
                    <td>120</td>
                    <td>10</td>
                    <td>5</td>
                </tr>
            </table>

            <div id="setting"
          className=" bg-primary rounded-md shadow-lg " style={{width:'100%',float:'left'}}>
            <table className='text-bamboo-100 flex items-center'>
                <tr>
                <label>Chọn quốc gia: </label> 
                <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn">
                        <img src='/flags/vietnam.png' style={{height:30}}></img>
                        Việt Nam
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content z-[1] p-2 shadow bg-primary text-primary-content rounded-md w-52 mt-4"
                        >
                            <li>
                                <a><img src='/flags/england.png' style={{height:15}}></img>Anh</a>
                            </li>
                            <li>
                                <a><img src='/flags/usa.png' style={{height:15}}></img>Mỹ</a>
                            </li>
                        </ul>
                    </div>
                </tr>
            </table>

            <label className='text-bamboo-100 flex items-center'>Chọn ảnh đại diện:</label>
            <table style={{width:'85%', justifyContent:'center', margin:'5%'}}>
                
                <tr>
                    <td>
                        <button><img src='/avatars/1.png' style={{height:80,borderRadius:'50%'}}></img></button>
                    </td>
                    <td>
                        <button><img src='/avatars/2.png' style={{height:80,borderRadius:'50%'}}></img></button>
                    </td>
                    <td>
                        <button><img src='/avatars/3.png' style={{height:80,borderRadius:'50%'}}></img></button>
                    </td>
                    <td>
                        <button><img src='/avatars/4.png' style={{height:80,borderRadius:'50%'}}></img></button>
                    </td>
                    <td>
                        <button><img src='/avatars/5.png' style={{height:80,borderRadius:'50%'}}></img></button>
                    </td>
                    <td>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost rounded-btn" style={{backgroundColor:'aquamarine'}}>
                            ...
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content z-[1] p-2 shadow bg-primary text-primary-content rounded-md w-52 mt-4"
                            >
                                <table>
                                    <tr>
                                        <button><img src='/avatars/6.png' style={{height:80,borderRadius:'50%'}}></img></button>
                                        <button><img src='/avatars/1.png' style={{height:80,borderRadius:'50%'}}></img></button>
                                        <button><img src='/avatars/2.png' style={{height:80,borderRadius:'50%'}}></img></button>
                                        <button><img src='/avatars/3.png' style={{height:80,borderRadius:'50%'}}></img></button>
                                    </tr>
                                </table>
                            </ul>
                        </div>
                    </td>
                </tr>
            </table>
            <button style={{backgroundColor:'#eae7b1', marginLeft:'30em',marginBottom:20, width:'20%'}}>Cập nhật</button>
        </div>

        </div>


        <div id="friend_list"
          className=" bg-primary rounded-md shadow-lg w-1/2" style={{marginTop:'2%',marginLeft:'54%', height:'100%'}}>
            <table className='text-bamboo-100'>
                <tr>
                <label style={{fontSize:24, marginRight:'7em', marginLeft:'1em'}}>Bạn Bè</label>
                <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn" style={{fontSize:24}}>
                        <img src='/icons/User_fill.svg' style={{height:30}}></img>
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
                    <td><img src='/avatars/1.png' style={{height:80,borderRadius:'50%', marginTop:'50%'}}></img></td>
                    <td>
                        <div style={{display:'inline-block', marginTop:'25%', marginLeft:40}}>
                            Owlvernyte1
                            <img src='/flags/vietnam.png' style={{float:'right',height:30, width:50,marginLeft:10}}></img>
                        </div>
                        <div>
                            Trực Tuyến
                            <span style={{height:20, width:20, backgroundColor:'lawngreen'
                            ,borderRadius:'50%', display:'inline-block',float:'left', marginRight:20}}></span>
                        </div>
                        <div>
                            1234
                            <img src='/thitnuong.svg' style={{float:'left'}}></img>
                        </div>
                    </td>
                    <tr>
                    <td><img src='/avatars/1.png' style={{height:80,borderRadius:'50%', marginTop:'50%'}}></img></td>
                    <td>
                        <div style={{display:'inline-block', marginTop:'25%', marginLeft:40}}>
                            Owlvernyte2
                            <img src='/flags/usa.png' style={{float:'right',height:30, width:50, marginLeft:10}}></img>
                        </div>
                        <div>
                            Đang chơi 
                            <span style={{height:20, width:20, backgroundColor:'red'
                            ,borderRadius:'50%', display:'inline-block',float:'left', marginRight:20}}></span>
                        </div>
                        <div>
                            1234
                            <img src='/thitnuong.svg' style={{float:'left'}}></img>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><img src='/avatars/1.png' style={{height:80,borderRadius:'50%', marginTop:'50%'}}></img></td>
                    <td>
                        <div style={{display:'inline-block', marginTop:'25%', marginLeft:40}}>
                            Owlvernyte3
                            <img src='/flags/england.png' style={{float:'right',height:30, width:50,marginLeft:10}}></img>
                        </div>
                        <div>
                            Ngoại tuyến
                            <span style={{height:20, width:20, backgroundColor:'grey'
                            ,borderRadius:'50%', display:'inline-block',float:'left', marginRight:20}}></span>
                        </div>
                        <div>
                            1234
                            <img src='/thitnuong.svg' style={{float:'left'}}></img>
                        </div>
                    </td>
                </tr>
                </tr>
            </table>

        </div>

        
    </div>
    )
    
}
