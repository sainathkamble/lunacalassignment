import React from 'react';
import { useState } from "react";
import QuestionMark from "../assets/questionmark.svg";
import Grid from "../assets/grid.svg";
//import gsap from 'gsap';

export const Tabs = () => {

    const [isActive, setIsActive] = useState("aboutme");

    const clicked = (e, active) => {
         //gsap.kill(e.currentTarget);
        setIsActive(active);
    }

    // const mouseEnter = (e, active) => {
    //     if (isActive !== active) {
    //         gsap.to(e.currentTarget, {
    //             borderRadius: '12px',
    //             backgroundColor: '#28292F',
    //             duration: 1,
    //         });
    //     }
    // }

    // const mouseLeave = (e, active) => {
    //     if (isActive !== active) {
    //         gsap.to(e.currentTarget, {
    //             duration: 1,
    //             background: 'none',
    //         });
    //     }
    // }

    return (
        <div className="h-[50%] w-[100%] bg-[#363c43] rounded-[27px] shadow-lg shadow-black">
            {/* first half */}
            <div className="p-4 flex gap-4">
                <div>
                    <img src={QuestionMark} className="" alt="Question Mark" />
                </div>
                <div className="h-[56px] bg-black rounded-2xl flex justify-evenly items-center font-semibold text-[12px]">
                    <div onClick={(e) => clicked(e, "aboutme")}
                        className={`rounded-xl px-[55px] h-[40px]  ${isActive === "aboutme" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'} 
                        flex justify-center items-center ml-2 hover:cursor-pointer 
                        ${isActive !== "aboutme" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}
                        // onMouseEnter={(e) => mouseEnter(e, "aboutme")}
                        // onMouseLeave={(e) => mouseLeave(e, "aboutme")}
                    >
                        About Me
                    </div>
                    <div
                        onClick={(e) => clicked(e, "exp")}
                        className={`rounded-xl px-[54px] h-[40px] ${isActive === "exp" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'} 
                        flex justify-center items-center ml-2 hover:cursor-pointer   
                        ${isActive !== "exp" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}
                        // onMouseEnter={(e) => mouseEnter(e, "exp")}
                        // onMouseLeave={(e) => mouseLeave(e, "exp")}
                    >
                        Experiences
                    </div>
                    <div
                        onClick={(e) => clicked(e, "rec")}
                        className={`rounded-xl px-[48px] h-[40px] ${isActive === "rec" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'}
                        flex justify-center items-center ml-2 mr-2 hover:cursor-pointer
                        ${isActive !== "rec" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}
                        // onMouseEnter={(e) => mouseEnter(e, "rec")}
                        // onMouseLeave={(e) => mouseLeave(e, "rec")}
                    >
                        Recommended
                    </div>
                </div>
            </div>
            {/* second half */}
            <div className="flex gap-4 p-2 ml-2.5">
                <div className="mt-5">
                    <img src={Grid} alt="Grid SVG" />
                </div>
                <div className="">
                    <p className="text-[#969696]">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque natus fuga deleniti accusantium officia eligendi cum. Tenetur aperiam aliquid ullam quibusdam, labore aut sapiente, numquam nulla animi, in quae.
                    </p>
                </div>
                <div className="">
                    <div className="h-[48px] w-[6px] bg-gradient-to-t from-[#4A4E54] to-[#888989] rounded-full shadow-[2px_2px_3px_1px_#23222299] "></div>
                </div>
            </div>
        </div>
    )
}
