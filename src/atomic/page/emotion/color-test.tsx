import * as React from "react";

import NavigationBar from "@/atomic/organism/navbar";
import { Footer } from "@/atomic/organism/footer";
import ScrollButton from "@/atomic/atom/scroll-button";

import { COLORS } from "@/utils/color-test/constants";
import { SectorModel, TestResult, ResultGroup } from "@/utils/color-test/types";

/* HOOKS */
import { useShuffled } from "@/hooks/color-test/useShuffled";
import { useSelected } from "@/hooks/color-test/useSelected";
import { useTestResultScroll } from "@/hooks/color-test/useTestResultScroll";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

/* ORGANISMS */
import { ColorTestHeader } from "@/atomic/organism/color-test-header";
import { ColorsPlaySection } from "@/atomic/molecule/colors-play-section";
import { ColorTestResult } from "@/atomic/organism/color-test-result";
import { ColorTestCTA } from "@/atomic/organism/color-test-CTA";
import { ColorTestInfoSection } from "@/atomic/organism/color-test-info-section";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { ColorTestResultPreview } from "@/atomic/organism/color-test-result-preview";

export default function ColorTest() {
    /* ---------------- INIT ---------------- */

    const initSectors = React.useMemo(
        () => COLORS.map((color, id) => ({ color, id })),
        []
    );

    const [sectorModelCollection, setSectorModelCollection] =
        React.useState<SectorModel[]>(initSectors);

    const [userSelectionCollection, setUserSelectionCollection] = React.useState<
        SectorModel["id"][]
    >([]);

    const [testResult, setTestResult] = React.useState<TestResult | null>(null);

    const [displayedResult, setDisplayedResult] =
        React.useState<ResultGroup>("E");

    /* ---------------- LOGIC HOOKS ---------------- */

    useShuffled(sectorModelCollection, setSectorModelCollection);

    useSelected(userSelectionCollection, setTestResult);

    useTestResultScroll(!!testResult);

    const items = useBreadcrumbs();

    /* ---------------- HANDLERS ---------------- */

    const handleSelectSector = (id: number) => {
        setUserSelectionCollection((prevSelected) => {
            if (prevSelected.includes(id)) return prevSelected;

            const nextSelected = [...prevSelected, id];

            setSectorModelCollection((prevSectors) => {
                const remaining = prevSectors.filter(
                    (sector) => !nextSelected.includes(sector.id)
                );

                if (remaining.length === 1) {
                    return [];
                }

                return prevSectors.filter((sector) => sector.id !== id);
            });

            return nextSelected;
        });
    };
    /* ---------------- RENDER ---------------- */

    return (
        <>
            <NavigationBar />

            <Breadcrumb items={items} />

            <div className="ms-base-page ms-base-new emotion color-test">
                {/* HEADER */}
                <ColorTestHeader hasResult={!!testResult} />

                {/* TEST OR RESULT */}
                {!testResult ? (
                    <ColorsPlaySection
                        sectors={sectorModelCollection}
                        selected={userSelectionCollection}
                        onSelect={handleSelectSector}
                    />
                ) : (
                    <>
                        <ColorTestResult
                            result={testResult}
                            onSelect={setDisplayedResult}
                        />

                        <ColorTestResultPreview
                            result={testResult}
                            activeGroup={displayedResult}
                        />

                        <ColorTestCTA />
                    </>
                )}

                {/* INFO BLOCK */}
                <ColorTestInfoSection />
            </div>

            <Footer />
            <ScrollButton color="#7B62FE" />
        </>
    );
}