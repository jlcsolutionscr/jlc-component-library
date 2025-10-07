import { useState } from "react";
import { MenuItem } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";

import Select from "../components/select";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Select component",
  component: Select,
  subcomponents: { MenuItem }, //👈 Adds the ListItem component as a subcomponent
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    label: "Select label",
    id: "select_id",
    maxWidth: "300px",
    value: "",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const WithItems: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState("");
    return (
      <Select {...{ ...args, value }}>
        <MenuItem value={"1"} onClick={() => setValue("1")}>
          Item one
        </MenuItem>
        <MenuItem value={"2"} onClick={() => setValue("2")}>
          Item two
        </MenuItem>
        <MenuItem value={"3"} onClick={() => setValue("3")}>
          Item three
        </MenuItem>
      </Select>
    );
  },
};

export const WithItemsAndFirstSelected: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState("1");
    return (
      <Select {...{ ...args, value }}>
        <MenuItem value={"1"} onClick={() => setValue("1")}>
          Item one
        </MenuItem>
        <MenuItem value={"2"} onClick={() => setValue("2")}>
          Item two
        </MenuItem>
        <MenuItem value={"3"} onClick={() => setValue("3")}>
          Item three
        </MenuItem>
      </Select>
    );
  },
};
