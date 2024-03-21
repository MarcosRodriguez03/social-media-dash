import React, { useEffect, useState } from 'react'
import BigCardComponent from './cardsComponent/BigCardComponent'
import LittleCardComponent from './cardsComponent/LittleCardComponent'


const HomePageComponent = () => {

    const [toggle, setToggle] = useState(false);
    const [bgBigCard, setBgBigCard] = useState("");
    const [bigText, setBigText] = useState("text-black")
    const [greyText, setGreyText] = useState("text-[#636675]")
    const [greyText2, setGreyText2] = useState("text-[#636675]")
    const [line, setLine] = useState("border-black mt-[25px]")


    const handleToggle = () => {
        setToggle(!toggle);
    };

    useEffect(() => {

        if (toggle == false) {
            setBgBigCard("bg-[#F0F3Fa] hover:bg-[#E1E3F0]")
            // setBGColor("bg-white")
            setBigText("text-black")
            setGreyText("text-[#636675]")
            setGreyText2("text-[#636675]")
            setLine("border-black mt-[25px]")
            setLine("border-[#636675] mt-[25px]")


            document.body.style.backgroundColor = "#FFFFFF";


        } else {
            setBgBigCard("bg-[#252a41] hover:bg-[#333A56]")
            // setBGColor("bg-black ")
            document.body.style.backgroundColor = "#1F222F";
            setBigText("text-white")
            setGreyText("text-white")
            setGreyText2("text-[#909ABD]")
            setLine("border-[#909ABD] mt-[25px]")

        }

        console.log("im working")
    }, [toggle])




    return (


        <div className={`px-[10%] pb-[10%] `} >
            <div className='pb-[40px] pt-[35px]'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>



                    <div className='interFontBold'>
                        <h1 className={`text-xl lg:text-3xl ${bigText}`} >Social Media Dashboard</h1>
                        <p className={`text-[12px] lg:text-sm ${greyText2}`}>Total Followers: 23,004</p>
                        <hr className={`lg:hidden block border-t-1  lg:mt-0 ${line}`} />
                    </div>

                    <label className="inline-flex items-center cursor-pointer lg:flex justify-between lg:justify-end pt-[16px]">
                        <p className={`me-2 text-sm font-medium text-gray-900 dark:text-gray-300 interFontBold ${greyText}`}>Dark Mode</p>
                        <div  >
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div onClick={handleToggle} className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-tr from-sky-500 to-emerald-300"></div>
                        </div>
                    </label>

                </div>
            </div>


            <div>
                <div className='grid lg:grid-cols-2 xl:grid-cols-4 gap-x-[30px] gap-y-[20px] '>
                    <BigCardComponent username={"@nathanf"} social={"Facebook"} followers={'1987'} number={"12"} upOrDown={"up"} bgColor={bgBigCard} bigText={bigText} greyText2={greyText2} />
                    <BigCardComponent username={"@nathanf"} social={"Twitter"} followers={'1044'} number={"99"} upOrDown={"up"} bgColor={bgBigCard} bigText={bigText} greyText2={greyText2} />
                    <BigCardComponent username={"@realNathanF"} social={"Insta"} followers={'11k'} number={"1099"} upOrDown={"up"} bgColor={bgBigCard} bigText={bigText} greyText2={greyText2} />
                    <BigCardComponent username={"@Nathan F."} social={"YouTube"} followers={'8239'} number={"144"} upOrDown={"down"} bgColor={bgBigCard} bigText={bigText} greyText2={greyText2} />
                </div>
            </div>

            <div className=''>
                <h1 className={`text-3xl pb-[25px] pt-[45px] interFontBold ${greyText} `}>Overview - Today</h1>
                <div className='grid lg:grid-cols-2 xl:grid-cols-4 gap-x-[30px] gap-y-[15px] lg:gap-y-[25px] '>
                    <LittleCardComponent text={"Page Views"} social={"Facebook"} number={"87"} percent={3} upOrDown={'up'} bgColor={bgBigCard} bigText={bigText} greyText2={greyText2} />
                    <LittleCardComponent text={"Likes"} social={"Facebook"} number={"52"} percent={2} upOrDown={'down'} bgColor={bgBigCard} bigText={bigText} greyText2={greyText2} />
                    <LittleCardComponent text={"Likes"} social={"Insta"} number={"5462"} percent={2257} upOrDown={'up'} bgColor={bgBigCard} bigText={bigText} greyText2={greyText2} />
                    <LittleCardComponent text={"Profile Views"} social={"Insta"} number={"52k"} percent={1375} upOrDown={'up'} bgColor={bgBigCard} bigText={bigText} greyText2={greyText2} />
                    <LittleCardComponent text={"Retweets"} social={"Twitter"} number={"117"} percent={303} upOrDown={'up'} bgColor={bgBigCard} bigText={bigText} greyText2={greyText2} />
                    <LittleCardComponent text={"Likes"} social={"Twitter"} number={"507"} percent={553} upOrDown={'up'} bgColor={bgBigCard} bigText={bigText} greyText2={greyText2} />
                    <LittleCardComponent text={"Likes"} social={"YouTube"} number={"107"} percent={19} upOrDown={'down'} bgColor={bgBigCard} bigText={bigText} greyText2={greyText2} />
                    <LittleCardComponent text={"Total Views"} social={"YouTube"} number={"1407"} percent={12} upOrDown={'down'} bgColor={bgBigCard} bigText={bigText} greyText2={greyText2} />
                </div>
            </div>
        </div>




    )
}

export default HomePageComponent
