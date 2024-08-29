import React from "react";

import TextLinkArrow from "@/atomic/molecule/text-link-arrow";
import RightArrowIcon from "@/atomic/atom/right-arrow-icon";
import { useReviewContext } from "@/atomic/molecule/review-context";

export default function ReviewLink() {
    const { data, text } = useReviewContext();

    return (
        <TextLinkArrow
            text={text.link}
            // get link via separate helper getReviewsLink helper func
            href={`https://apps.apple.com/${data.country_code}/app/id${data.appId}?see-all=reviews`}
            rightIcon={<RightArrowIcon />}
            isNewTab={true}
        />
    );
}
