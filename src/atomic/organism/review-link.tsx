import React from "react";

import RightArrowIcon from "@/atomic/atom/right-arrow-icon";
import TextLinkArrow, { TextLinkArrowProps } from "@/atomic/molecule/text-link-arrow";
import { useReviewContext } from "@/atomic/molecule/review-context";
import { getAppStoreLink } from "@/service/AppleService";

export function SendReviewsLink({ hasUnderlineHover = true }: { hasUnderlineHover?: boolean }) {
    const { data, text, themeColor } = useReviewContext();

    return (
        <ReviewLinkBase
            text={text.fillerCard.link}
            href={getAppStoreLink({
                data: { appId: data.appId, countryCode: data.countryCode },
                option: "action=write-review",
            })}
            color={themeColor}
            hoverColor={themeColor}
            hasUnderlineHover={hasUnderlineHover}
        />
    );
}

export function AllReviewsLink({ hasUnderlineHover = true }: { hasUnderlineHover?: boolean }) {
    const { data, text, themeColor } = useReviewContext();

    return (
        <ReviewLinkBase
            text={text.link}
            href={getAppStoreLink({
                data: { appId: data.appId, countryCode: data.countryCode },
                option: "see-all=reviews",
            })}
            color={themeColor}
            hoverColor={themeColor}
            hasUnderlineHover={hasUnderlineHover}
        />
    );
}

function ReviewLinkBase( props: Pick<TextLinkArrowProps, "text" | "href" | "color" | "hoverColor" | "hasUnderlineHover">) {
    return <TextLinkArrow rightIcon={<RightArrowIcon />} isNewTab={true} {...props} />;
}
