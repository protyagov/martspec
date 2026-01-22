import React from "react";
import IconTitleTextElem, { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";

interface IconTitleTextListProps {
    items: Array<IconTitleText>;
}

const IconTitleTextList = ({ items }: IconTitleTextListProps): JSX.Element => {
    return (
        <ul className="list-with-icons ps-0">
            {items.map((item, index) => (
                <IconTitleTextElem key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />
            ))}
        </ul>
    );
};

export default IconTitleTextList;
