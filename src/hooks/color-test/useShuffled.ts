import { useEffect } from "react";
import { SectorModel } from "@/atomic/page/emotion/color-test/types";

const shuffleArray = <T,>(arr: T[]): T[] => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
};

export const useShuffled = (
    collection: SectorModel[],
    setCollection: React.Dispatch<React.SetStateAction<SectorModel[]>>
) => {
    useEffect(() => {
        setCollection(shuffleArray(collection));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};