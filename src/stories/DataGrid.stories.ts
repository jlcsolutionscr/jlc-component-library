import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import DataGrid from "../components/data-grid";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DataGrid component",
  component: DataGrid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    page: 0,
    dense: false,
    showHeader: true,
    columns: [{ field: "data", headerName: "Column 1" }],
    rows: [
      { data: "row 1", rowAction: 1 },
      { data: "row 2", rowAction: 2 },
    ],
    rowsPerPage: 5,
    rowActionValue: "rowAction",
    onPageChange: fn(),
    rowAction: fn(),
  },
} satisfies Meta<typeof DataGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};

export const HideHeader: Story = {
  args: {
    showHeader: false,
  },
};

export const Dense: Story = {
  args: {
    dense: true,
  },
};

export const PaginationStart: Story = {
  args: {
    rows: [
      { data: "row 1", rowAction: 1 },
      { data: "row 2", rowAction: 2 },
    ],
    rowsPerPage: 2,
    rowsCount: 6,
  },
};

export const PaginationMiddle: Story = {
  args: {
    rows: [
      { data: "row 3", rowAction: 1 },
      { data: "row 4", rowAction: 2 },
    ],
    page: 1,
    rowsPerPage: 2,
    rowsCount: 6,
  },
};

export const PaginationEnd: Story = {
  args: {
    rows: [
      { data: "row 5", rowAction: 1 },
      { data: "row 6", rowAction: 2 },
    ],
    page: 2,
    rowsPerPage: 2,
    rowsCount: 6,
  },
};
