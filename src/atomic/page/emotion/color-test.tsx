import * as React from "react";
import _ from "@/i18n/locale";

import { COLORS } from "@/utils/color-test/constants";
import { SectorModel, TestResult, ResultGroup } from "@/utils/color-test/types";

import { useShuffled } from "@/hooks/color-test/useShuffled";
import { useSelected } from "@/hooks/color-test/useSelected";
import { useTestResultScroll } from "@/hooks/color-test/useTestResultScroll";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

import ScrollButton from "@/atomic/atom/scroll-button";
import NavigationBar from "@/atomic/organism/navbar";
import { Footer } from "@/atomic/organism/footer";
import { ColorTestHeader } from "@/atomic/organism/color-test-header";
import { ColorsPlaySection } from "@/atomic/molecule/colors-play-section";
import { ColorTestResultGrid } from "@/atomic/organism/color-test-result-grid";
import { ColorTestCTA } from "@/atomic/organism/color-test-CTA";
import { ColorTestInfoSection } from "@/atomic/organism/color-test-info-section";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { ColorTestResultDetails } from "@/atomic/organism/color-test-result-details";

export default function ColorTest() {
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

    useShuffled(sectorModelCollection, setSectorModelCollection);

    useSelected(userSelectionCollection, setTestResult);

    useTestResultScroll(!!testResult);

    const items = useBreadcrumbs();

    const handleSelectSector = (id: number) => {
        setUserSelectionCollection((prevSelected) => {
            if (prevSelected.includes(id)) return prevSelected;

            return [...prevSelected, id];
        });
    };

    return (
        <>
            <NavigationBar />
            <div className="container container-xl ms-s-offset fs-3 pt-lg-5">
                <Breadcrumb items={items} />
            </div>

            <div className="fs-3 pt-lg-5 emotion color-test">
                <ColorTestHeader hasResult={!!testResult} />
            </div>

            <div className="container container-xl ms-s-offset fs-3 pt-lg-5 color-test">
                {!testResult ? (
                    <ColorsPlaySection
                        sectors={sectorModelCollection}
                        selected={userSelectionCollection}
                        onSelect={handleSelectSector}
                    />
                ) : (
                    <>
                        <div className="color-test__h2"><h2>{_(`COLOR_TEST.RES`)}</h2></div>
                        <ColorTestResultGrid
                            result={testResult}
                            onSelect={setDisplayedResult}
                        />

                        <ColorTestResultDetails
                            result={testResult}
                            activeGroup={displayedResult}
                        />

                        <ColorTestCTA />
                    </>
                )}
            </div>

            <div className="container container-xl ms-s-offset fs-3 pt-lg-5">
                <ColorTestInfoSection />
            </div>

            <Footer />
            <ScrollButton color="#7B62FE" />
        </>
    );
}