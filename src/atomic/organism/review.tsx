import React from "react";

import { useMediaQuery, useReviewData } from "@/hooks";

import { ReviewDesktop, ReviewMobile } from "@/atomic/molecule/review-layouts";
import ReviewHead from "@/atomic/molecule/review-head";
import ReviewDescription from "@/atomic/molecule/review-description";
import ReviewCardSlider from "@/atomic/organism/review-card-slider";
import TextLinkArrow from "../molecule/text-link-arrow";
import RightArrowIcon from "../atom/right-arrow-icon";

import { TCountryCode } from "@/model/TCodes";
import { ReviewContext } from "../molecule/review-context";

interface IReviewProps {
    headText: string;
    descriptionText: string;
    linkText: string;

    country_code: TCountryCode;
}

const LG_BOOTSTRAP = 992;

export default function Review({ country_code, descriptionText, headText, linkText }: IReviewProps) {
    const { reviews, appId } = useReviewData({ country_code });
    const isMobile = useMediaQuery(`(max-width: ${LG_BOOTSTRAP}px)`);

    if (!reviews || !appId) return <></>;

    if (isMobile) {
        return (
            // access to the props via useContext
            <ReviewMobile
                head={<ReviewHead />}
                description={<ReviewDescription />}
                link={
                    <TextLinkArrow
                        text={linkText}
                        // get link via separate helper getReviewsLink helper func
                        href={`https://apps.apple.com/${country_code}/app/id${appId}?see-all=reviews`}
                        rightIcon={<RightArrowIcon />}
                        isNewTab={true}
                    />
                }
                slider={<ReviewCardSlider />}
            />
        );
    }

    return (
        <ReviewContext.Provider value={{ reviews, headText, descriptionText }}>
            <ReviewDesktop
                head={<ReviewHead />}
                description={<ReviewDescription />}
                link={
                    <TextLinkArrow
                        text={linkText}
                        href={`https://apps.apple.com/${country_code}/app/id${appId}?see-all=reviews`}
                        rightIcon={<RightArrowIcon />}
                        isNewTab={true}
                    />
                }
                slider={<ReviewCardSlider />}
            />
        </ReviewContext.Provider>
    );
}
