import React, { ReactElement } from 'react';
import { ModifyProps } from '../../sharedTypes/ModifyProps.types';
type HeaderModifyProps = ModifyProps & {
    children: ReactElement;
};
export declare const Header: React.FC<HeaderModifyProps>;
export {};