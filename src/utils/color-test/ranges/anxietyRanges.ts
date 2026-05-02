import { Icon, IconColor } from "@/utils/color-test/constants";

export const anxietyRanges = [
    {
        min: 0,
        max: 3,
        lev: "A1",
        icons: [Icon.HALF, Icon.NULL, Icon.NULL, Icon.NULL],
        color: IconColor.GREEN,
    },
    {
        min: 3,
        max: 5,
        lev: "A2",
        icons: [Icon.FULL, Icon.HALF, Icon.NULL, Icon.NULL],
        color: IconColor.L_GREEN,
    },
    {
        min: 5,
        max: 8,
        lev: "A3",
        icons: [Icon.FULL, Icon.FULL, Icon.HALF, Icon.NULL],
        color: IconColor.YELLOW,
    },
    {
        min: 8,
        max: 10,
        lev: "A4",
        icons: [Icon.FULL, Icon.FULL, Icon.FULL, Icon.HALF],
        color: IconColor.ORANGE,
    },
    {
        min: 10,
        max: Infinity,
        lev: "A5",
        icons: [Icon.FULL, Icon.FULL, Icon.FULL, Icon.FULL, Icon.HALF],
        color: IconColor.RED,
    },
];