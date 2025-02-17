## API Report File for "@fluentui/react-switch"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import type { IntrinsicSlotProps } from '@fluentui/react-utilities';
import * as React_2 from 'react';

// @public
export const renderSwitch_unstable: (state: SwitchState) => JSX.Element;

// @public
export const Switch: ForwardRefComponent<SwitchProps>;

// @public (undocumented)
export const switchClassName = "fui-Switch";

// @public (undocumented)
export interface SwitchCommons {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (ev: React_2.PointerEvent<HTMLDivElement> | React_2.KeyboardEvent<HTMLDivElement>, data: {
        checked: boolean;
    }) => void;
}

// @public (undocumented)
export interface SwitchProps extends Omit<ComponentProps<SwitchSlots>, 'onChange'>, SwitchCommons {
}

// @public (undocumented)
export type SwitchSlots = {
    root: IntrinsicSlotProps<'div'>;
    track: IntrinsicSlotProps<'div'>;
    thumbWrapper: IntrinsicSlotProps<'div'>;
    thumb: IntrinsicSlotProps<'div'>;
    input: IntrinsicSlotProps<'input'>;
    activeRail: IntrinsicSlotProps<'div'>;
};

// @public (undocumented)
export interface SwitchState extends ComponentState<SwitchSlots>, SwitchCommons {
}

// @public
export const useSwitch_unstable: (props: SwitchProps, ref: React_2.Ref<HTMLElement>) => SwitchState;

// @public
export const useSwitchStyles_unstable: (state: SwitchState) => SwitchState;

// (No @packageDocumentation comment for this package)

```
