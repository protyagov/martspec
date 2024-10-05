import appIds from "@/data/app-ids.json";
import { IReviewLink } from "@/model/IReviewLink";

export interface IGetAppStoreLink {
    data: Pick<IReviewLink, "appId" | "countryCode">;
    option?: "see-all=reviews" | "action=write-review";
}

// compose types into single interface
interface IStoreService {
    getAppId: () => number;
    getAppStoreLink: ({ data, option }: IGetAppStoreLink) => string;
}

class StoreService implements IStoreService {
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

    // get appStore link
    getAppStoreLink = ({ data, option }: IGetAppStoreLink) =>
        `https://apps.apple.com/${data.countryCode || "us"}/app/id${data.appId}${option && `?${option}`}`;
}

export const { getAppId, getAppStoreLink } = new StoreService();
