import React from "react";
import { CustomBTNProps } from "../Types/Types";

const CustomBTN = ({ CustomStyles, TextTitle, type }: CustomBTNProps) => {
    return (
        <button className={`${CustomStyles}`} type={`${type}`}>
            {TextTitle}
        </button>
    )
}
export default CustomBTN;