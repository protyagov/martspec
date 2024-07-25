import React, { ReactNode } from "react";

interface IReviewProps {
    head: ReactNode;
    link: ReactNode;
    description: ReactNode;
    slider: ReactNode;
}

export function ReviewDesktop({ head, description, link, slider }: IReviewProps) {
    return (
        <section>
            <div className="ms-s-offset review">
                <div className="review__header">
                    {head}

                    {link}
                </div>

                {description}
                {slider}
            </div>
        </section>
    );
}

export function ReviewMobile({ head, description, link, slider }: IReviewProps) {
    return (
        <section>
            <div className="ms-s-offset review">
                <div className="review__header">{head}</div>

                {description}
                {slider}

                <div className="review__link-wrapper">{link}</div>
            </div>
        </section>
    );
}
