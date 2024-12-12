import React from 'react'
import './topbar.css'
import { Search,Person,Chat,Notifications } from "@mui/icons-material";
import assests from '../../assets/person/1.jpeg'

export default function Topbar(){
    return(
        <div className='topcontainer'>
            <div className="topbarleft">
                <span className='logo'>Clone</span>
            </div>
            <div className="topbarcenter">
                <div className="searchbar">
                    <Search className='searchicon'/>
                    <input type="text" placeholder='Search for friends, post or video' className='searchinput' />
                </div>
            </div>
            <div className="topbarright">
                <div className="toplinks">
                    <span className='toplink'>Home</span>
                    <span className='toplink'>Timeline</span>
                </div>
                <div className="topbaricons">
                    <div className="topbariconitem">
                        <Person/>
                        <span className='topbariconbadge'>1</span>
                    </div>
                    <div className="topbariconitem">
                        <Chat/>
                        <span className='topbariconbadge'>2</span>
                    </div>
                    <div className="topbariconitem">
                        <Notifications/>
                        <span className='topbariconbadge'>3</span>
                    </div>
                </div>
 
                {/* profile picture */}
                <img src={assests} alt="profileImg" className='topbarimg' />
            </div>

        </div>
    )
}