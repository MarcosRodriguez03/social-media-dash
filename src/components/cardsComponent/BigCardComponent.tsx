import React, { useEffect, useState } from 'react'
import facebook from '../images/icon-facebook.svg'
import insta from '../images/icon-instagram.svg'
import twitter from '../images/icon-twitter.svg'
import youtube from '../images/icon-youtube.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'
import '../../App.css'

interface IBigCard {
    upOrDown: string;
    social: string;
    username: string;
    followers: string;
    number: string;
    bgColor: string;
    bigText: string
    greyText2: string
}

const BigCardComponent = (props: IBigCard) => {


    const [upOrDown2, setUpOrDown2] = useState("upStyle");
    const [upOrDown3, setUpOrDown3] = useState(up);
    const [barColor, setBarColor] = useState("borderTopInsta")
    const [social, setSocial] = useState(insta);
    const [subs, setSubs] = useState("FOLLOWERS");


    useEffect(() => {



        if (props.upOrDown === "down") {
            setUpOrDown2("downStyle")
            setUpOrDown3(down);
        } else {
            setUpOrDown2("upStyle")
            setUpOrDown3(up);
        }

        if (props.social === "Facebook") {
            setBarColor("borderTopFacebook")
            setSocial(facebook)
        } else if (props.social === "Insta") {
            setBarColor("borderTopInsta")
            setSocial(insta)
        } else if (props.social === "Twitter") {
            setBarColor("borderTopTwitter")
            setSocial(twitter)
        } else if (props.social === "YouTube") {
            setBarColor("borderTopYoutube")
            setSocial(youtube)
            setSubs("SUBSCRIBERS")
        }
    }, [])




    return (
        <div className=''>
            {/* bg-[#F0F3Fa] hover:bg-[#E1E3F0] */}
            <div className={`w-[100%] h-[100%] ${props.bgColor} rounded-[5px] ${barColor}`}>
                <div className='flex justify-center gap-3 pt-[20px] pb-[20px]'>
                    <img
                        className='w-[20px] h-[20px] '
                        src={social} alt="Social Media" />
                    <p className={`w-fit text-[14px] ${props.greyText2}`}>{props.username}</p>
                </div>

                <div className='text-center'>
                    <h1 className={`interFontBold ${props.bigText} text-6xl`}>{props.followers}</h1>
                    <p className={`interFont tracking-[.4em] text-[14px] ${props.greyText2}`}>{subs}</p>
                </div>

                <div className='flex justify-center items-center pt-[20px] pb-[20px]  gap-3'>
                    <img
                        className='w-[10px] h-[6px]'
                        src={upOrDown3} alt="Social Media" />
                    <p className={`w-fit text-[14px] interFontBold ${upOrDown2}`}>{props.number} Today</p>
                </div>
            </div>
        </div>
    )
}

export default BigCardComponent
