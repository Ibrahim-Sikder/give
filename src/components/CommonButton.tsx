import {  ReactNode } from "react";
import { cn } from "../libs/utils";

const CommonButton = ({text, className}: {className:ReactNode, text: ReactNode}) => {
    return (
        <div>
            <button className={cn("py-3 px-5 bg-red-600 text-white", className)}>{text}</button>
        </div>
    );
};


export default CommonButton;