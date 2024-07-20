import { IFiller } from "@/model/IReviewWithFiller";

const fillerObject = (): IFiller => ({ filler: true });

export const fillerArray = (arrLength: number) => Array(arrLength).fill(fillerObject());
