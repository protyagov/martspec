import React from "react";

import TextLinkArrow from "@/atomic/molecule/text-link-arrow";
import RightArrowIcon from "@/atomic/atom/right-arrow-icon";
import { useReviewContext } from "@/atomic/molecule/review-context";
import { getAllReviewsLink } from "@/service/AppleReviewService/LinksService";

export default function ReviewLink() {
    const { data, text } = useReviewContext();

    return (
        <TextLinkArrow
            text={text.link}
            href={getAllReviewsLink({ appId: data.appId, countryCode: data.countryCode })}
            rightIcon={<RightArrowIcon />}
            isNewTab={true}
        />
    );
}
