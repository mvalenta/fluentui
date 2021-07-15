## API Report File for "@fluentui/react-tabster"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { MakeStylesStyleRule } from '@fluentui/make-styles';
import { RefObject } from 'react';
import type { Theme } from '@fluentui/react-theme';
import { Types } from 'tabster';

// @public (undocumented)
export const createFocusIndicatorStyleRule: (rule?: MakeStylesStyleRule<Theme>, options?: CreateFocusIndicatorStyleRuleOptions) => MakeStylesStyleRule<Theme>;

// @public (undocumented)
export interface CreateFocusIndicatorStyleRuleOptions {
    // (undocumented)
    selector?: 'focus' | 'focus-within';
}

// @public
export const useArrowNavigationGroup: (options?: UseArrowNavigationGroupOptions | undefined) => Types.TabsterDOMAttribute;

// @public (undocumented)
export interface UseArrowNavigationGroupOptions {
    axis?: 'vertical' | 'horizontal';
    circular?: boolean;
}

// @public
export const useFocusFinders: () => {
    findAllFocusable: (root: HTMLElement, matcher: (el: HTMLElement) => boolean) => HTMLElement[];
    findFirstFocusable: (root: HTMLElement) => HTMLElement | null | undefined;
    findLastFocusable: (root: HTMLElement) => HTMLElement | null | undefined;
    findNextFocusable: (current: HTMLElement) => HTMLElement | null | undefined;
    findPrevFocusable: (current: HTMLElement) => HTMLElement | null | undefined;
};

// @public
export function useKeyboardNavAttribute<E extends HTMLElement>(): RefObject<E>;

// @public
export const useModalAttributes: (options?: UseModalAttributesOptions) => {
    modalAttributes: Types.TabsterDOMAttribute;
    triggerAttributes: Types.TabsterDOMAttribute;
};

// @public (undocumented)
export interface UseModalAttributesOptions {
    alwaysFocusable?: boolean;
    trapFocus?: boolean;
}

// @public
export const useTabsterAttributes: (props: Types.TabsterAttributeProps) => Types.TabsterDOMAttribute;


// (No @packageDocumentation comment for this package)

```