import { type } from "os";

export interface CustomBTNProps {
    CustomStyles: string;
    TextTitle: string;
    type: 'button' | 'submit';
    handleClick?: () => {};
}

export interface PlannerPros {
    days: number;
    destination: string;
}

export type CardProps = {
    title: string;
    text: string;
}



//https://www.youtube.com/watch?v=LSRNmhLS76o