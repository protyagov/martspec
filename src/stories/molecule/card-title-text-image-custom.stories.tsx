import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import _ from "@/i18n/locale";

import CardTitleTextImageCustom from "@/atomic/molecule/card-title-text-image-custom";
import { PageWrapper } from ".ladle/decorators";

export default {
    title: "Molecule",
} satisfies StoryDefault;

export const CardTitleTextImageCustomStory: Story = () => (
    <div style={{display: "flex", gap: "19.5px", maxWidth: "385px"}}>
        <div style={{flex: "0 0 auto", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",gap: "20px"}}>
            <div> 
                <CardTitleTextImageCustom
                    title={_("SIZE.LIST1.LI2_HEAD")}
                    text={_("SIZE.LIST1.DESC2")}
                    bgColor="#E5F4D9"
                    imgSrc=""
                    imgPosition="left-bottom"
                    shadow={true}
                    cardHeight="225px"
                    imgH="100px"
                />
            </div>
            <div> 
                <CardTitleTextImageCustom
                    title={_("SIZE.LIST1.LI3_HEAD")}
                    text={_("SIZE.LIST1.DESC3")}
                    bgColor="#FFECDB"
                    imgSrc=""
                    imgPosition="right-bottom"
                    shadow={false}
                    cardHeight="225px"
                    imgH="100px"
                />
            </div>
        </div>
        <div style={{flex: "0 0 auto", width: "100%"}}>
            <CardTitleTextImageCustom
                title={_("SIZE.LIST1.LI4_HEAD")}
                text={_("SIZE.LIST1.DESC4")}
                imgSrc="/img/page/body-size/section-right.webp"
                bgColor="#F4F5F8"
                cardHeight="37rem"
                imgPosition="center-bottom"
                imgH="20rem"
                imgMobileH="18rem"
                shadow={false}
                mobileBreakpoint={1040}
                responsive={true}
            />
        </div>
    </div>
);

CardTitleTextImageCustomStory.decorators = [PageWrapper];
CardTitleTextImageCustomStory.storyName = "CardTitleTextImageCustom";