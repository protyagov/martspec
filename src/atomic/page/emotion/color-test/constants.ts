export const COLORS = [
    "97938E", // Gray
    "1C497F", // Blue
    "489474", // Green
    "DE4332", // Red
    "EFDD4A", // Yellow
    "C3397F", // Purple
    "B75931", // Brown
    "221F20", // Black
] as const;

export const RESULT_GROUPS = ["E", "A", "P", "G", "I", "O"] as const;

export enum IconColor {
    RED = "FF392E",
    ORANGE = "FE8429",
    YELLOW = "E0BD64",
    GREEN = "489474",
    L_GREEN = "A3E23D",
}

export enum Icon {
    NULL = "NULL",
    HALF = "HALF",
    FULL = "FULL",
}

export const TOTAL_SECTORS = COLORS.length;