import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks";
import _, { Locale } from "@/i18n/locale";

import RightArrowIcon from "@/atomic/atom/right-arrow-icon";
import ReviewHead from "@/atomic/molecule/review-head";
import ReviewDescription from "@/atomic/molecule/review-description";
import ReviewLink from "@/atomic/molecule/review-link";
import ReviewCardSlider from "./review-card-slider";

import { IReviewData } from "@/data/IReviewData";

const LG_BOOTSTRAP = 992;
const ID_VITAMIN = "1519596234";

// ------------------------------------------------------------------------------------------------------

interface IGetLink {
    id: string;
    country_code: string;
    page?: number;
    data_type?: "xml" | "json";
}
const getLink = ({ id, data_type = "json", country_code, page = 1 }: IGetLink) =>
    `https://itunes.apple.com/${country_code}/rss/customerreviews/page=${page}/id=${id}/sortBy=mostRecent/${data_type}?l=en&cc=gb`;
async function getData(linkData: IGetLink): Promise<IReviewData> {
    const res = await fetch(getLink(linkData));
    const data = await res.json();

    return data;
}

// ------------------------------------------------------------------------------------------------------

export default function Review() {
    const [reviews, setReviews] = useState<IReviewData["feed"]["entry"] | undefined>(undefined);
    const isMobile = useMediaQuery(`(max-width: ${LG_BOOTSTRAP}px)`);

    useEffect(() => {
        getData({ id: ID_VITAMIN, country_code: Locale.countryCode }).then((r) => setReviews(r.feed.entry));
    }, []);

    if (isMobile) {
        return (
            <section className="review">
                <div className="review__header">
                    <ReviewHead />
                </div>

                <ReviewDescription />
                <ReviewCardSlider reviews={reviews} />

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
            <ReviewCardSlider reviews={reviews} />
        </section>
    );
}
