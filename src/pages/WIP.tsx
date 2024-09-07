import {HorizontalButton, HorizontalDirection} from "../components/elements/ArrowButton";
import {GridWrapper} from "../components/elements/MainWrapper";

export default function WIP() {
    return (
        <GridWrapper>
            <div className="text-center">
                <h1 className="mt-2 text-7xl text-teal-deer">WIP</h1>
                <p className="mt-2 text-xl opacity-60 text-white">I'm still working on this content. Come back later.</p>
                <div className="translate-x-[-20rem] translate-y-[20vh]">
                    <HorizontalButton 
                        text="go back home"
                        goTo="/"
                        direction={HorizontalDirection.Left}
                        textJustify={HorizontalDirection.Right}
                        widthClass="w-[20rem]"
                    />
                </div>
            </div>
        </GridWrapper>
    )
}