import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../Button';

const meta: Meta<typeof ButtonGroup> = {
  title: 'PhantomArtist/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'inline-radio' }
    },
    gap: {
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'horizontal',
    gap: 'medium'
  },
  render: args => (
    <ButtonGroup {...args}>
      <Button kind="ghost">Arena</Button>
      <Button kind="ghost">Leader Boards</Button>
      <Button kind="ghost">All Movies</Button>
    </ButtonGroup>
  )
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    gap: 'medium'
  },
  render: args => (
    <ButtonGroup {...args}>
      <Button kind="ghost">Arena</Button>
      <Button kind="ghost">Leader Boards</Button>
      <Button kind="ghost">All Movies</Button>
    </ButtonGroup>
  )
};

export const MixedKinds: Story = {
  args: {
    direction: 'horizontal',
    gap: 'medium'
  },
  render: args => (
    <ButtonGroup {...args}>
      <Button kind="primary">Primary</Button>
      <Button kind="secondary">Secondary</Button>
      <Button kind="ghost">Ghost</Button>
    </ButtonGroup>
  )
};

export const LargeGap: Story = {
  args: {
    direction: 'horizontal',
    gap: 'large'
  },
  render: args => (
    <ButtonGroup {...args}>
      <Button kind="ghost">Arena</Button>
      <Button kind="ghost">Leader Boards</Button>
      <Button kind="ghost">All Movies</Button>
    </ButtonGroup>
  )
};

export const SmallGap: Story = {
  args: {
    direction: 'horizontal',
    gap: 'small'
  },
  render: args => (
    <ButtonGroup {...args}>
      <Button kind="ghost">Arena</Button>
      <Button kind="ghost">Leader Boards</Button>
      <Button kind="ghost">All Movies</Button>
    </ButtonGroup>
  )
};
