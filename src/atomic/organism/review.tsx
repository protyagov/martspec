import React from "react";
import CardReview from "../molecule/card-review";

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
                body: "I love how creative I can be when I use this app. I can really explore the depths of my imagination!",
                reviewerNickname: "Juan Chavez",
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
const REVIEWS = [REVIEW_DATA];

export default function Review() {
    return (
        <div>
            {REVIEWS.map((r) => (
                <CardReview />
            ))}
        </div>
    );
}
