import type { Meta, StoryObj } from '@storybook/react';


import PageHeader from "src/atomic/molecule/page-header";

const meta = {
  title: 'Molecule/Header',
  component: PageHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlexTestPage: Story = {
  args: {
    title: "VITAMIN.HEAD",
    subtitleLevel1: "VITAMIN.ABOUT_1",
    subtitleLevel2: "VITAMIN.ABOUT_2",
    appId: 1519596234,
    appDownloadTitle: "VITAMIN.DWN",
    imgSrc: "img/page/vitamin/vitamin.webp",
    imgAlt: "VITAMIN.IMG",
    imgH: 512,
    imgW: 512
  }
};



