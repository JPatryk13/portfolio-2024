import React from "react";
import {HorizontalArrowButton, HorizontalDirection} from "../components/elements/ArrowButton";

export default function PageNotFound() {
    return (
        <main className="grid overflow-hidden bg-neutral-900 h-[100vh] place-items-center">
            <div className="text-center">
                <h1 className="mt-2 text-7xl text-teal-deer">404</h1>
                <p className="mt-2 text-xl opacity-60 text-white">seems like this page is missing</p>
                <div className="translate-x-[-20rem] translate-y-[20vh]">
                    <HorizontalArrowButton 
                        text="go back home"
                        goTo="/"
                        direction={HorizontalDirection.Left}
                        textJustify={HorizontalDirection.Right}
                        widthClass="w-[20rem]"
                    />
                </div>
            </div>
        </main>
    )
}