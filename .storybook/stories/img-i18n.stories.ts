import type { Meta, StoryObj } from '@storybook/react';


import ImageI18N, {ImageI18NModel} from "src/atomic/atom/img-i18n";
import _, { Locale } from "src/i18n/locale";

const meta = {
  title: 'Atom/Image I18N',
  component: ImageI18N,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ImageI18N>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryPage: Story = {
    args: {
        src: "img/page/body-size/size-middle-en.webp",
        w: 512,
        h: 512,
        cls: "mx-auto img-fluid",
        alt: _("SIZE.IMG") as string
    }
};
