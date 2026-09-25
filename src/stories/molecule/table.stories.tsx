import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import { PageWrapper } from ".ladle/decorators";

import Table from "@/atomic/molecule/table";

export default {
  title: "Molecule",
} satisfies StoryDefault;

export const TableStory: Story = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 pe-2 m-0">
          <Table
            data={{
              headers: ["Age", "Male", "Female"],
              rows: [
                ["Birth to 1 year", "75 mg", "75 mg"],
                ["1-3 years", "80 mg", "80 mg"],
                ["4-8 years", "130 mg", "130 mg"],
                ["9-13 years", "240 mg", "240 mg"],
              ],
              caption: "Daily intake according to age for magnesium",
            }}
            transformMobile={true}
            firstColumnBgColor="#F8F9FA"
          />
        </div>
      </div>
    </div>
  );
};

TableStory.decorators = [PageWrapper];
TableStory.storyName = "Table";
