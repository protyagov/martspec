import React, { ReactNode } from "react";

export default function ReviewFillerCard({ link }: { link: ReactNode }) {
    return (
        <li>
            <h3>Тут может быть ваш отзыв</h3>
            {link}
        </li>
    );
}
