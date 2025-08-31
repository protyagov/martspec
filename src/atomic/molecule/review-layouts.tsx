import React, { ReactNode } from "react";
import { useReviewContext } from "@/atomic/molecule/review-context";

interface IReviewProps {
    head: ReactNode;
    link: ReactNode;
    description: ReactNode;
    slider: ReactNode;
}

export function ReviewDesktop({ head, description, link, slider }: IReviewProps) {
    const { themeColor = "#1686FF" } = useReviewContext();
    return (
        <ReviewBase>
            <header className="review__header">
                {head}

                {link}
            </header>

            {description}
            {slider}
        </ReviewBase>
    );
}

export function ReviewMobile({ head, description, link, slider }: IReviewProps) {
    return (
        <ReviewBase>
            <header className="review__header">{head}</header>

            {description}
            {slider}

            <footer className="review__link-wrapper pt-4">{link}</footer>
        </ReviewBase>
    );
}

function ReviewBase({ children }: { children: ReactNode }) {
    return (
        <section>
            <div className="row review py-5">{children}</div>
        </section>
    );
}
