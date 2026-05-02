import { Icon, IconColor } from "@/utils/color-test/constants";

export const productivityRanges = [
    {
        min: 0,
        max: 7,
        lev: "P1",
        icons: [Icon.HALF, Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL],
        color: IconColor.RED,
    },
    {
        min: 7,
        max: 13,
        lev: "P2",
        icons: [Icon.FULL, Icon.HALF, Icon.NULL, Icon.NULL],
        color: IconColor.ORANGE,
    },
    {
        min: 13,
        max: 21,
        lev: "P3",
        icons: [Icon.FULL, Icon.FULL, Icon.HALF, Icon.NULL],
        color: IconColor.YELLOW,
    },
    {
        min: 21,
        max: 27,
        lev: "P4",
        icons: [Icon.FULL, Icon.FULL, Icon.FULL, Icon.HALF],
        color: IconColor.L_GREEN,
    },
    {
        min: 27,
        max: Infinity,
        lev: "P5",
        icons: [Icon.FULL, Icon.FULL, Icon.FULL, Icon.FULL, Icon.HALF],
        color: IconColor.GREEN,
    },
];