export const calculatePercent = (value: number, max: number) =>
    Math.min(Math.floor((value * 100) / max), 100);