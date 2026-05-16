import { Icon, IconColor } from "@/atomic/page/emotion/color-test/constants";

export const energyRanges = [
    {
        min: 0,
        max: 0.5,
        lev: "E1",
        icons: [Icon.HALF, Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL],
        color: IconColor.RED,
    },
    {
        min: 0.5,
        max: 0.9,
        lev: "E2",
        icons: [Icon.FULL, Icon.HALF, Icon.NULL, Icon.NULL, Icon.NULL],
        color: IconColor.YELLOW,
    },
    {
        min: 0.9,
        max: 1.3,
        lev: "E3",
        icons: [Icon.FULL, Icon.FULL, Icon.HALF, Icon.NULL, Icon.NULL],
        color: IconColor.GREEN,
    },
    {
        min: 1.3,
        max: 1.9,
        lev: "E3",
        icons: [Icon.FULL, Icon.FULL, Icon.FULL, Icon.HALF, Icon.NULL],
        color: IconColor.ORANGE,
    },
    {
        min: 1.9,
        max: Infinity,
        lev: "E4",
        icons: [Icon.FULL, Icon.FULL, Icon.FULL, Icon.FULL, Icon.HALF],
        color: IconColor.RED,
    },
];