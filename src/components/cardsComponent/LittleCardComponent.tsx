import React, { useEffect, useState } from 'react'
import facebook from '../images/icon-facebook.svg'
import insta from '../images/icon-instagram.svg'
import twitter from '../images/icon-twitter.svg'
import youtube from '../images/icon-youtube.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'
import '../../App.css'

interface ILitteCard {
    upOrDown: string;
    social: string;
    text: string;
    number: string;
    percent: number;
    bgColor: string;
    bigText: string;
    greyText2: string;
}

const LittleCardComponent = (props: ILitteCard) => {

    const [upOrDown2, setUpOrDown2] = useState("upStyle");
    const [upOrDown3, setUpOrDown3] = useState(up);
    const [social, setSocial] = useState(insta);
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const handleDarkMode = () => {
        setDarkMode(darkMode => !darkMode);
    };

    useEffect(() => {
        if (props.upOrDown === "down") {
            setUpOrDown2("downStyle")
            setUpOrDown3(down);
        } else {
            setUpOrDown2("upStyle")
            setUpOrDown3(up);
        }
        if (props.social === "Facebook") {
            setSocial(facebook)
        } else if (props.social === "Insta") {
            setSocial(insta)
        } else if (props.social === "Twitter") {
            setSocial(twitter)
        } else if (props.social === "YouTube") {
            setSocial(youtube)
        }
    }, [])
    return (
        <div className={`w-[100%] h-[100%] ${props.bgColor} rounded-[5px] p-[25px] interFontBold`} >

            <div className='flex justify-between gap-3 pb-[25px] '>
                <p className={`w-fit text-[14px] ${props.greyText2}`} >{props.text}</p>
                <img
                    className='w-[20px] h-[20px] '
                    src={social} alt="Social Media" />
            </div>

            <div className='flex justify-between'>
                <h1 className={`text-4xl ${props.bigText}`}>{props.number}</h1>

                <div className='flex items-end'>
                    <div className='flex justify-center items-center   gap-2'>
                        <img
                            className='w-[10px] h-[6px]'
                            src={upOrDown3} alt="Social Media" />
                        <p className={`w-fit text-[14px] ${upOrDown2}`}>{props.percent}%</p>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default LittleCardComponent
