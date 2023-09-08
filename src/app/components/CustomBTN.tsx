import React from "react";
import { CustomBTNProps } from "../Types";

const CustomBTN = ({ CustomStyles, TextTitle }: CustomBTNProps) => {
    return (
        <button className={`${CustomStyles}`}>
            {TextTitle}
        </button>
    )
}
export default CustomBTN;