import { Meta, StoryObj } from '@storybook/react';
import { InputField } from '../InputField';
declare const meta: Meta<typeof InputField>;
export default meta;
type Story = StoryObj<typeof InputField>;
export declare const Default: Story;
export declare const InputTypes: {
    controls: {
        disable: boolean;
    };
    render: () => import("@emotion/react/jsx-runtime").JSX.Element;
    docs: {
        description: {
            story: string;
        };
    };
};
export declare const TextareaWithAutoResize: Story;
export declare const LabelPositions: Story;
export declare const SizeVariants: Story;
export declare const ErrorStates: Story;
export declare const SpecialStates: Story;
export declare const CompleteFormExample: Story;
export declare const Playground: Story;
//# sourceMappingURL=InputField.stories.d.ts.map