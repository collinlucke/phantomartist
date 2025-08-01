import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { InputField } from '../InputField';
import { Button } from '../../Buttons/Button';
import {
  Controls,
  Description,
  Primary,
  Subtitle,
  Title
} from '@storybook/blocks';

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: 'PhantomArtist/InputField',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle:
      'A consolidated form input component with flexible configuration options.',
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
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'textarea', 'tel', 'url'],
      description:
        'Input type - supports all standard HTML input types plus textarea'
    },
    labelPosition: {
      control: 'select',
      options: ['above', 'below', 'left', 'right'],
      description: 'Position of the label relative to the input'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant for the input'
    },
    autoResize: {
      control: 'boolean',
      description:
        'Auto-resize textarea based on content (only applies to textarea type)'
    },
    error: {
      control: 'text',
      description: 'Error message to display (empty string for no error)'
    },
    readonly: {
      control: 'boolean',
      description: 'Make the input read-only'
    },
    required: {
      control: 'boolean',
      description: 'Mark the input as required'
    }
  }
};

export default meta;

type Story = StoryObj<typeof InputField>;

// Default story showing basic usage
export const Default: Story = {
  args: {
    label: 'Default Input',
    placeholder: 'Enter some text...',
    type: 'text',
    labelPosition: 'above',
    size: 'medium'
  }
};

// Story showing all input types
const InputTypesComponent = () => {
  const [values, setValues] = useState({
    text: '',
    email: '',
    password: '',
    tel: '',
    url: '',
    textarea: ''
  });

  const updateValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '400px'
      }}
    >
      <InputField
        label="Text Input"
        type="text"
        name="text"
        value={values.text}
        onChange={updateValue}
        placeholder="Enter text..."
      />
      <InputField
        label="Email Input"
        type="email"
        name="email"
        value={values.email}
        onChange={updateValue}
        placeholder="Enter email..."
      />
      <InputField
        label="Password Input"
        type="password"
        name="password"
        value={values.password}
        onChange={updateValue}
        placeholder="Enter password..."
      />
      <InputField
        label="Phone Number"
        type="tel"
        name="tel"
        value={values.tel}
        onChange={updateValue}
        placeholder="(555) 123-4567"
      />
      <InputField
        label="Website URL"
        type="url"
        name="url"
        value={values.url}
        onChange={updateValue}
        placeholder="https://example.com"
      />
      <InputField
        label="Text Area"
        type="textarea"
        name="textarea"
        value={values.textarea}
        onChange={updateValue}
        placeholder="Enter some longer text..."
      />
    </div>
  );
};

export const InputTypes = {
  controls: { disable: true },
  render: InputTypesComponent,
  docs: {
    description: {
      story:
        'Demonstrates all supported input types with their respective placeholder text and validation.'
    }
  }
};

// Story showing textarea with auto-resize
const TextareaWithAutoResizeComponent = () => {
  const [value, setValue] = useState('');
  const [toggleValue, setToggleValue] = useState(
    'Type multiple lines here to test toggling auto-resize on and off...'
  );
  const [isAutoResize, setIsAutoResize] = useState(true);

  const updateValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const updateToggleValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setToggleValue(e.target.value);
  };

  return (
    <div style={{ maxWidth: '500px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <InputField
          label="Auto-Resizing Textarea"
          type="textarea"
          value={value}
          onChange={updateValue}
          placeholder="Start typing and watch the textarea grow automatically..."
          autoResize={true}
        />
      </div>

      <div>
        <h3>Toggle Auto-Resize Test</h3>
        <div
          style={{
            marginBottom: '1rem',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center'
          }}
        >
          <Button
            onClick={() => setIsAutoResize(!isAutoResize)}
            kind={!isAutoResize ? 'primary' : 'secondary'}
          >
            {isAutoResize ? 'Disable Auto-Resize' : 'Enable Auto-Resize'}
          </Button>
          <span style={{ fontWeight: 'bold' }}>
            Current: {isAutoResize ? 'Auto-Resize ON' : 'Auto-Resize OFF'}
          </span>
        </div>
        <InputField
          label="Toggle Textarea"
          type="textarea"
          value={toggleValue}
          onChange={updateToggleValue}
          autoResize={isAutoResize}
          placeholder="Test toggling auto-resize with this textarea..."
        />
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px'
          }}
        >
          <strong>Test:</strong> Add multiple lines, then toggle auto-resize
          on/off. When disabled, height should reset to CSS default.
        </div>
      </div>
    </div>
  );
};

export const TextareaWithAutoResize: Story = {
  args: {
    autoResize: false
  },
  render: TextareaWithAutoResizeComponent,
  parameters: {
    docs: {
      description: {
        story:
          'Textarea that automatically adjusts its height based on content. Try typing multiple lines!'
      }
    }
  }
};

// Story showing label positions
const LabelPositionsComponent = () => {
  const [values, setValues] = useState({
    above: '',
    below: '',
    left: '',
    right: ''
  });

  const updateValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        maxWidth: '600px'
      }}
    >
      <InputField
        label="Label Above (Default)"
        labelPosition="above"
        name="above"
        value={values.above}
        onChange={updateValue}
        placeholder="Label is positioned above..."
      />
      <InputField
        label="Label Below"
        labelPosition="below"
        name="below"
        value={values.below}
        onChange={updateValue}
        placeholder="Label is positioned below..."
      />
      <InputField
        label="Label Left"
        labelPosition="left"
        name="left"
        value={values.left}
        onChange={updateValue}
        placeholder="Label is on the left..."
      />
      <InputField
        label="Label Right"
        labelPosition="right"
        name="right"
        value={values.right}
        onChange={updateValue}
        placeholder="Label is on the right..."
      />
    </div>
  );
};

export const LabelPositions: Story = {
  render: LabelPositionsComponent,
  parameters: {
    docs: {
      description: {
        story:
          'Shows all available label positioning options. Each position uses flexbox for proper alignment.'
      }
    }
  }
};

// Story showing size variants
const SizeVariantsComponent = () => {
  const [values, setValues] = useState({
    small: '',
    medium: '',
    large: ''
  });

  const updateValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        maxWidth: '400px'
      }}
    >
      <InputField
        label="Small Size"
        size="small"
        name="small"
        value={values.small}
        onChange={updateValue}
        placeholder="Small input..."
      />
      <InputField
        label="Medium Size (Default)"
        size="medium"
        name="medium"
        value={values.medium}
        onChange={updateValue}
        placeholder="Medium input..."
      />
      <InputField
        label="Large Size"
        size="large"
        name="large"
        value={values.large}
        onChange={updateValue}
        placeholder="Large input..."
      />
    </div>
  );
};

export const SizeVariants: Story = {
  render: SizeVariantsComponent,
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the three available size variants: small, medium (default), and large.'
      }
    }
  }
};

// Story showing error states
const ErrorStatesComponent = () => {
  const [values, setValues] = useState({
    normal: '',
    error: 'invalid@email'
  });

  const updateValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        maxWidth: '400px'
      }}
    >
      <InputField
        label="Normal State"
        name="normal"
        value={values.normal}
        onChange={updateValue}
        placeholder="This is a normal input..."
      />
      <InputField
        label="Error State"
        type="email"
        name="error"
        value={values.error}
        onChange={updateValue}
        placeholder="Enter valid email..."
        error="Please enter a valid email address"
      />
    </div>
  );
};

export const ErrorStates: Story = {
  render: ErrorStatesComponent,
  parameters: {
    docs: {
      description: {
        story:
          'Shows normal and error states. Error state applies visual styling to indicate validation issues.'
      }
    }
  }
};

// Story showing readonly and disabled states
export const SpecialStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        maxWidth: '400px'
      }}
    >
      <InputField
        label="Normal Input"
        value="You can edit this"
        onChange={() => {}}
        placeholder="Normal input..."
      />
      <InputField
        label="Read-only Input"
        value="You cannot edit this"
        onChange={() => {}}
        readonly={true}
      />
      <InputField
        label="Disabled Input"
        value="This is disabled"
        onChange={() => {}}
        disabled={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates readonly and disabled states for different use cases.'
      }
    }
  }
};

// Complete form example
const CompleteFormExampleComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    bio: '',
    website: '',
    age: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const updateField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear errors when user starts typing
    if (name === 'email' && errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
    if (name === 'password' && errors.password) {
      setErrors(prev => ({ ...prev, password: '' }));
    }
    if (name === 'confirmPassword' && errors.confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: !formData.email.includes('@')
        ? 'Please enter a valid email address'
        : '',
      password:
        formData.password.length < 6
          ? 'Password must be at least 6 characters'
          : '',
      confirmPassword:
        formData.password !== formData.confirmPassword
          ? 'Passwords do not match'
          : ''
    };
    setErrors(newErrors);
  };

  return (
    <div style={{ maxWidth: '600px', padding: '2rem' }}>
      <h3 style={{ marginBottom: '2rem' }}>User Registration Form</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Name fields with different label positions */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <InputField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={updateField}
            placeholder="John"
            required={true}
            size="medium"
          />
          <InputField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={updateField}
            placeholder="Doe"
            required={true}
            size="medium"
          />
        </div>

        {/* Email with validation */}
        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={updateField}
          placeholder="john.doe@example.com"
          required={true}
          error={errors.email}
        />

        {/* Password fields */}
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={updateField}
          placeholder="Minimum 6 characters"
          required={true}
          error={errors.password}
          labelPosition="left"
        />

        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={updateField}
          placeholder="Re-enter your password"
          required={true}
          error={errors.confirmPassword}
          labelPosition="left"
        />

        {/* Contact info */}
        <InputField
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={updateField}
          placeholder="(555) 123-4567"
          size="small"
        />

        <InputField
          label="Website"
          type="url"
          name="website"
          value={formData.website}
          onChange={updateField}
          placeholder="https://yourwebsite.com"
        />

        <InputField
          label="Age"
          type="text"
          name="age"
          value={formData.age}
          onChange={updateField}
          placeholder="25"
          size="small"
        />

        {/* Bio textarea */}
        <InputField
          label="Tell us about yourself"
          type="textarea"
          name="bio"
          value={formData.bio}
          onChange={updateField}
          placeholder="Share a bit about your background, interests, or anything you'd like others to know..."
          autoResize={true}
        />

        {/* Submit button area */}
        <div
          style={{
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid #eee'
          }}
        >
          <Button type="button" onClick={validateForm}>
            Validate Form
          </Button>
        </div>
      </div>
    </div>
  );
};

export const CompleteFormExample: Story = {
  args: {
    autoResize: true
  },
  render: CompleteFormExampleComponent,
  parameters: {
    docs: {
      description: {
        story:
          'A complete form example showcasing all InputField features in a realistic registration form scenario. Includes validation, different input types, sizes, and label positions.'
      }
    }
  }
};

// Interactive playground
export const Playground: Story = {
  args: {
    label: 'Interactive Input',
    placeholder: 'Try changing the controls...',
    type: 'text',
    labelPosition: 'above',
    size: 'medium',
    autoResize: false,
    error: '',
    readonly: false,
    required: false
  }
};
