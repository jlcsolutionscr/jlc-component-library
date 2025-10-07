import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import ListDropdown from "../components/list-dropdown";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ListDropdown component",
  component: ListDropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    label: "Customers",
    disabled: false,
    value: "",
    page: 0,
    rows: [
      { Id: "1", Descripcion: "Row 1" },
      { Id: "2", Descripcion: "Row 2" },
    ],
    rowsPerPage: 5,
    rowsCount: 2,
    onChange: fn(),
    onPageChange: fn(),
    onItemSelected: fn(),
  },
} satisfies Meta<typeof ListDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Enabled: Story = {};

export const PaginationStart: Story = {
  args: {
    rows: [
      { Id: "1", Descripcion: "Row 1" },
      { Id: "2", Descripcion: "Row 2" },
    ],
    rowsPerPage: 2,
    rowsCount: 6,
  },
};

export const PaginationMiddle: Story = {
  args: {
    rows: [
      { Id: "3", Descripcion: "Row 3" },
      { Id: "4", Descripcion: "Row 4" },
    ],
    page: 1,
    rowsPerPage: 2,
    rowsCount: 6,
  },
};

export const PaginationEnd: Story = {
  args: {
    rows: [
      { Id: "5", Descripcion: "Row 5" },
      { Id: "6", Descripcion: "Row 6" },
    ],
    page: 2,
    rowsPerPage: 2,
    rowsCount: 6,
  },
};
