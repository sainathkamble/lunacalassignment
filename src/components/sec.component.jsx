import React from 'react'
import { Tabs } from "./tabs.component.jsx";
import { Gallery } from "./gallery.component.jsx";
import { Dash } from "./dash.component.jsx";

export const SecondCompo = () => {
    return (
        <div className="flex-col w-[680px] h-[520px] lg:ml-[50px] mt-[50px] lg:mt-0 mb-[90px] lg:mb-[37px]">
            <Tabs />
            <Dash />
            <Gallery />
            <Dash />
        </div>
    )
}
