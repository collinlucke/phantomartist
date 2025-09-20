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
      <Button variant="ghost">Arena</Button>
      <Button variant="ghost">Leader Boards</Button>
      <Button variant="ghost">All Movies</Button>
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
      <Button variant="ghost">Arena</Button>
      <Button variant="ghost">Leader Boards</Button>
      <Button variant="ghost">All Movies</Button>
    </ButtonGroup>
  )
};

export const MixedVariants: Story = {
  args: {
    direction: 'horizontal',
    gap: 'medium'
  },
  render: args => (
    <ButtonGroup {...args}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
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
      <Button variant="ghost">Arena</Button>
      <Button variant="ghost">Leader Boards</Button>
      <Button variant="ghost">All Movies</Button>
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
      <Button variant="ghost">Arena</Button>
      <Button variant="ghost">Leader Boards</Button>
      <Button variant="ghost">All Movies</Button>
    </ButtonGroup>
  )
};
