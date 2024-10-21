import React from "react";

import RightArrowIcon from "@/atomic/atom/right-arrow-icon";
import TextLinkArrow, { TextLinkArrowProps } from "@/atomic/molecule/text-link-arrow";
import { useReviewContext } from "@/atomic/molecule/review-context";
import { getAppStoreLink } from "@/service/AppleService";

export function SendReviewsLink() {
    const { data, text } = useReviewContext();

    return (
        <ReviewLinkBase
            text={text.fillerCard.link}
            href={getAppStoreLink({
                data: { appId: data.appId, countryCode: data.countryCode },
                option: "action=write-review",
            })}
        />
    );
}

export function AllReviewsLink() {
    const { data, text } = useReviewContext();

    return (
        <ReviewLinkBase
            text={text.link}
            href={getAppStoreLink({
                data: { appId: data.appId, countryCode: data.countryCode },
                option: "see-all=reviews",
            })}
        />
    );
}

function ReviewLinkBase(props: Pick<TextLinkArrowProps, "text" | "href">) {
    return <TextLinkArrow rightIcon={<RightArrowIcon />} isNewTab={true} {...props} />;
}
