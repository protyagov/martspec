import * as React from "react";
import _ from "@/i18n/locale";

import { COLORS } from "@/atomic/page/emotion/color-test/constants";
import { SectorModel, TestResult, ResultGroup } from "@/atomic/page/emotion/color-test/types";

import { useShuffled } from "@/hooks/color-test/useShuffled";
import { useSelected } from "@/hooks/color-test/useSelected";
import { useTestResultScroll } from "@/hooks/color-test/useTestResultScroll";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

import ScrollButton from "@/atomic/atom/scroll-button";
import NavigationBar from "@/atomic/organism/navbar";
import { Footer } from "@/atomic/organism/footer";
import { ColorTestHeader } from "@/atomic/page/emotion/color-test";
import { ColorsPlaySection } from "@/atomic/page/emotion/color-test";
import { ColorTestResultGrid } from "@/atomic/page/emotion/color-test";
import { ColorTestInfoSection } from "@/atomic/page/emotion/color-test";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { ColorTestResultDetails } from "@/atomic/page/emotion/color-test";

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

                        <section className="text-center color-test-cta">
                            <h2>{_("COLOR_TEST.CTA_HEAD")}</h2>
                            <p>{_("COLOR_TEST.CTA_DESC")}</p>
                        </section>
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