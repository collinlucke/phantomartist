import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import {
  Controls,
  Description,
  Primary,
  Subtitle,
  Title
} from '@storybook/blocks';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'PhantomArtist/Button',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'A button that does button things.',
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Subtitle />

          <Primary />
          <Controls />
        </>
      )
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const All: Story = {
  args: {
    children: 'Button String',
    className: {
      button: {}
    },
    kind: 'primary',
    size: 'large'
  },

  argTypes: {
    children: {
      options: [
        'Button String',
        [<div css={{ color: 'red', fontWeight: 'bolder' }}>Button w/ JSX</div>]
      ],
      control: {
        type: 'select'
      },
      table: {
        type: {
          summary: 'string | ReactComponent'
        }
      }
    },
    className: {
      control: {
        type: 'object'
      },
      description: 'Any valid CSS properties and values'
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: {
        type: 'inline-radio'
      },
      description: 'Any traditional button type',
      table: {
        type: {
          summary: `button | submit | reset`
        }
      }
    },
    kind: {
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
      control: { type: 'inline-radio' },
      table: {
        type: {
          summary: `primary | secondary | tertiary | ghost`
        }
      }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' },
      table: {
        type: {
          summary: 'small | medium | large'
        }
      }
    }
  }
};
