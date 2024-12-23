import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button", // 경로를 'Components/Button'로 수정
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    label: { control: "text" },
    onClick: { action: "clicked" },
  },
  args: {
    onClick: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Primary Button",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Secondary Button",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large Button",
    primary: false,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Small Button",
    primary: false,
  },
};
