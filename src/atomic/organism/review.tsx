import React from "react";
import { useMediaQuery } from "@/hooks";
import _, { Locale } from "@/i18n/locale";

import RightArrowIcon from "@/atomic/atom/right-arrow-icon";
import ReviewCard from "@/atomic/molecule/review-card";
import ReviewHead from "@/atomic/molecule/review-head";
import ReviewDescription from "@/atomic/molecule/review-description";
import ReviewLink from "@/atomic/molecule/review-link";

// temp data
// remove it after implementing the fetch func from apple api
const REVIEW_DATA = {
    data: [
        {
            type: "customerReviews",
            id: "00000028-b08c-0014-9674-c54800000000",
            attributes: {
                rating: 5,
                title: "Pretty Stellar",
                body: "Приложение супер. Я все время забывала выпить лекарство, теперь мне приходит уведомление и все сохраняется. Добавьте функцию автосохранения, а то некоторые изменения появляются только после перезагрузки приложения.",
                reviewerNickname: "Oxy39",
                createdDate: "2024-01-02T11:19:36-07:00",
                territory: "USA",
            },
            relationships: {
                response: {
                    links: {
                        self: "https://api.appstoreconnect.apple.com/v1/customerReviews/00000028-b08c-0014-9674-c54800000000/relationships/response",
                        related:
                            "https://api.appstoreconnect.apple.com/v1/customerReviews/00000028-b08c-0014-9674-c54800000000/response",
                    },
                },
            },
            links: {
                self: "https://api.appstoreconnect.apple.com/v1/customerReviews/00000028-b08c-0014-9674-c54800000000",
            },
        },
    ],
    links: {
        self: "https://api.appstoreconnect.apple.com/v1/appStoreVersions/d716c220-3de9-4cf2-a885-8cfb43a11087/customerReviews?filter%5Bterritory%5D=USA&limit=1",
        next: "https://api.appstoreconnect.apple.com/v1/appStoreVersions/d716c220-3de9-4cf2-a885-8cfb43a11087/customerReviews?cursor=AQ.AJJtGDc&filter%5Bterritory%5D=USA&limit=1",
    },
    meta: {
        paging: {
            total: 10,
            limit: 1,
        },
    },
};

const LG_BOOTSTRAP = 992;

export default function Review() {
    const isMobile = useMediaQuery(`(max-width: ${LG_BOOTSTRAP}px)`);

    if (isMobile) {
        return (
            <section className="review">
                <div className="review__header">
                    <ReviewHead />
                </div>

                <ReviewDescription />

                <ul className="review__list">
                    {REVIEW_DATA.data.map((r) => (
                        <ReviewCard
                            key={r.id}
                            createdDate={r.attributes.createdDate}
                            reviewText={r.attributes.body}
                            reviewerNickname={r.attributes.reviewerNickname}
                            rating={r.attributes.rating}
                        />
                    ))}
                </ul>

                <div className="review__link-wrapper">
                    <ReviewLink
                        countryCode={Locale.countryCode}
                        rightIcon={
                            <span>
                                <RightArrowIcon />
                            </span>
                        }
                    />
                </div>
            </section>
        );
    }

    return (
        <section className="review">
            <div className="review__header">
                <ReviewHead />

                <ReviewLink
                    countryCode={Locale.countryCode}
                    rightIcon={
                        <span>
                            <RightArrowIcon />
                        </span>
                    }
                />
            </div>

            <ReviewDescription />

            <ul className="review__list">
                {REVIEW_DATA.data.map((r) => (
                    <ReviewCard
                        key={r.id}
                        createdDate={r.attributes.createdDate}
                        reviewText={r.attributes.body}
                        reviewerNickname={r.attributes.reviewerNickname}
                        rating={r.attributes.rating}
                    />
                ))}
            </ul>
        </section>
    );
}
