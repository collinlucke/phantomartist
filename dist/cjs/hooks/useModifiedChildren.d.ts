import React, { ReactElement } from 'react';
import { ModifyProps } from '../types/ModifyProps.types';
type UseModifiedProps = ModifyProps & {
    element: ReactElement;
};
export declare const useModifiedChildren: React.FC<UseModifiedProps>;
export {};
