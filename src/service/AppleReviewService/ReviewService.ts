import appIds from "@/data/app-ids.json";

import { IReviewData } from "@/model/IReviewData";
import { IReviewLink } from "@/model/IReviewLink";
import { getFetchReviewsLink } from "@/service/AppleReviewService/LinksService";

// types for service methods
type TGetReviewData = (props: IReviewLink) => Promise<IReviewData>;

// compose types into single interface
interface IReviewService {
    getReviewData: TGetReviewData;
    getAppId: () => number;
}

class ReviewService implements IReviewService {
    // get reviews and appId
    getReviewData: TGetReviewData = async (linkData) => {
        const res = await fetch(getFetchReviewsLink(linkData));
        const data: IReviewData = await res.json();

        return data;
    };

    // get id from url path
    getAppId = (): number => {
        const pathname = new URL(document.URL).pathname;
        const pathnameItems = pathname.split("/");

        let key: keyof typeof appIds;
        for (key in appIds) {
            if (pathnameItems.includes(key)) return appIds[key];
        }

        throw new Error(
            `ID NOT FOUND, pathnameItems:${JSON.stringify(pathnameItems)}, appIds: ${JSON.stringify(appIds)}`
        );
    };
}

export const { getReviewData, getAppId } = new ReviewService();
