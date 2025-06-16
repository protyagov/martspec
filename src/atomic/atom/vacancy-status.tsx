import React from "react";
import "@/sass/atom/vacancy-status.scss";
import _ from "@/i18n/locale";

interface Props {
    isOpened: boolean;
    text: {
            OPEN: string, 
            CLOSED: string, 
        };
}

export default function VacancyStatus({ isOpened, text }: Props) {
    
    return (
        <div
            className={`vacancy-status ${isOpened ? 'open' : 'closed'}`}
        >
            <span className="text">
                {isOpened ? text.OPEN : text.CLOSED }
            </span>
        </div>
    );
}
