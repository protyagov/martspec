import React from "react";
import _ from "@/i18n/locale";
import { SectorModel } from "@/atomic/page/emotion/color-test/types";
import { ColorItem } from "@/atomic/page/emotion/color-test";

type Props = {
    sectors: SectorModel[];
    selected: number[];
    onSelect: (id: number) => void;
};

export function ColorsPlaySection({
    sectors,
    selected,
    onSelect,
}: Props) {
    return (
        <section>
            <div className="row text-center mb-0">
                <div className="col-10 mx-auto">
                    <h1>{_(`COLOR_TEST.TEST_HEAD`)}</h1>
                    <p className="mb-6">{_(`COLOR_TEST.TEST_DESC`)}</p>
                </div>
            </div>

            <div className="color-sectors">
                {sectors.map((sector) => {
                    const isSelected = selected.includes(sector.id);

                    return (

                        <ColorItem
                            id={sector.id}
                            color={sector.color}
                            selected={isSelected}
                            onClick={onSelect}
                            hidden={isSelected}
                        />
                    );
                })}
            </div>
        </section>
    );
}