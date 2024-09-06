import React from 'react';
import { useState } from "react";
import QuestionMark from "../assets/questionmark.svg";
import Grid from "../assets/grid.svg";

export const Tabs = () => {

    const [type, setType] = useState("aboutme");

    return (
      <>   
        <div className="h-[50%] w-[100%] bg-[#363c43] rounded-[27px] shadow-lg shadow-black">
            {/* first half */}
            <div className="h-[30%] w-full p-4 flex gap-4">
                <div className="h-auto w-auto">
                    <img src={QuestionMark} className="h-auto w-auto" alt="Question Mark" />
                </div>

                <div className="h-[56px] w-[90%] bg-black rounded-2xl flex justify-evenly items-center font-semibold text-[12px]">
                    <div onClick={() => setType("aboutme")}
                        className={`rounded-xl h-[40px]  ${type === "aboutme" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'} 
                        flex justify-center items-center px-10 ml-2 hover:cursor-pointer 
                        ${type !== "aboutme" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}>
                        About Me
                    </div>
                    <div onClick={() => setType("experiences")}
                        className={`rounded-xl h-[40px] ${type === "experiences" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'} 
                        flex justify-center items-center px-10 ml-2 hover:cursor-pointer   
                        ${type !== "expperiences" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}>
                        Experiences
                    </div>
                    <div onClick={() => setType("recommended")}
                        className={`rounded-xl h-[40px] ${type === "recommended" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'}
                        flex justify-center items-center px-8 ml-2 hover:cursor-pointer
                        ${type !== "recommended" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}>
                        Recommended
                    </div>
                </div>
            </div>
            {/* second half */}
            <div className="h-[70%] w-full flex gap-4 p-2 ml-2.5">
                <div className="h-auto w-auto mt-5">
                    <img src={Grid} className="h-2/5 w-1/2" alt="Grid SVG" />
                </div>
                <div className="h-full w-[90%] px-2">
                    {type === "aboutme" && (
							<div className="h-full w-full overflow-y-scroll custom-scrollbar">
								<p className="text-gray-400">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus omnis alias fuga doloremque dolorum optio nesciunt rerum qui? Et rerum, suscipit rem adipisci vel animi hic quibusdam fugit molestias ab.
                                    Voluptatum consequatur perferendis eveniet obcaecati laudantium culpa hic veritatis fuga, aliquam laborum enim nesciunt neque earum est temporibus, saepe veniam libero! Suscipit quidem ad sequi eos magni porro, repellendus voluptates.
                                    Cumque recusandae sapiente accusantium aspernatur ullam qui quae praesentium atque, consequatur iure tempora odit voluptatibus placeat excepturi quasi! Cum maxime nemo, obcaecati ullam esse doloremque nam. Doloremque animi aliquam itaque.
								</p>
							</div>
						)}
						{type === "experiences" && (
							<div className="h-full w-full overflow-y-scroll custom-scrollbar">
								<p className="text-gray-400">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla repudiandae, autem numquam harum fugit veniam laudantium suscipit maiores, exercitationem eum enim totam iste. Maxime suscipit temporibus tempore, beatae est voluptatum.
                                    Consectetur incidunt neque alias. Praesentium perferendis, dolore ipsam id aliquid, minus aut facilis excepturi distinctio nesciunt quaerat ut quasi provident nostrum ad corporis aliquam incidunt autem labore quia veniam ullam!
                                    Et expedita, dolorem laboriosam voluptas amet quidem. Laudantium laboriosam, omnis enim praesentium saepe maiores recusandae! Itaque, corrupti. Nobis consectetur et illo eum, veritatis inventore, nesciunt iure rem mollitia asperiores eveniet.
								</p>
							</div>
						)}
						{type === "recommended" && (
							<div className="h-full w-full overflow-y-scroll custom-scrollbar">
								<p className="text-gray-400">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum ducimus esse quod, harum quibusdam atque quos dignissimos, alias ab dicta nam recusandae. Sed dolor aliquam labore tempore maxime illum.
                                    Incidunt veritatis totam quae perspiciatis quo id, commodi unde officiis ipsum aperiam voluptate illum, laborum reiciendis exercitationem esse ipsa temporibus rerum nihil optio odit aliquam in tempore? Voluptatibus, optio itaque!
                                    Facilis, ad? Suscipit magnam nam autem, maiores nisi cum libero nulla. Unde qui eveniet natus quae asperiores animi delectus, nobis doloribus ad nam iure dicta quibusdam. Laborum cum magnam nam!
								</p>
							</div>
						)}
                </div>
            </div>
        </div>  
      </>  
    )
}
