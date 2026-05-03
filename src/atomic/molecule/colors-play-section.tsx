import React from "react";
import { SectorModel } from "@/utils/color-test/types";
import { ColorSwatch } from "@/atomic/atom/color-swatch";

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
                    <h1>Test title</h1>
                    <p className="mb-6">Test description</p>
                </div>
            </div>

            <div className="color-sectors">
                {sectors.map((sector) => {
                    const isSelected = selected.includes(sector.id);

                    return (
                        <div
                            key={sector.id}
                            className="color-sector-slot"
                        >
                                <ColorSwatch
                                    id={sector.id}
                                    color={sector.color}
                                    selected={isSelected}
                                    onClick={onSelect}
                                    hidden={isSelected}
                                />
                            </div>
                      
                    );
                })}
            </div>
        </section>
    );
}