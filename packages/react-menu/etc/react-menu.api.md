## API Report File for "@fluentui/react-menu"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ComponentProps } from '@fluentui/react-utilities';
import { ComponentState } from '@fluentui/react-utilities';
import type { Context } from '@fluentui/react-context-selector';
import type { ContextSelector } from '@fluentui/react-context-selector';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import type { IntrinsicSlotProps } from '@fluentui/react-utilities';
import { PositioningShorthand } from '@fluentui/react-positioning';
import * as React_2 from 'react';
import { usePopperMouseTarget } from '@fluentui/react-positioning';

// @public
export const Menu: React_2.FC<MenuProps>;

// @public (undocumented)
export type MenuCheckedValueChangeData = {
    name: string;
    checkedItems: string[];
};

// @public (undocumented)
export type MenuCheckedValueChangeEvent = React_2.MouseEvent | React_2.KeyboardEvent;

// @public (undocumented)
export const MenuContext: Context<MenuContextValue>;

// @public
export type MenuContextValue = MenuListProps & Pick<MenuState, 'openOnHover' | 'openOnContext' | 'triggerRef' | 'menuPopoverRef' | 'setOpen' | 'isSubmenu' | 'triggerId' | 'hasIcons' | 'hasCheckmarks' | 'persistOnItemClick' | 'inline'> & {
    open: boolean;
    triggerId: string;
};

// @public (undocumented)
export type MenuContextValues = {
    menu: MenuContextValue;
};

// @public
export const MenuDivider: ForwardRefComponent<MenuDividerProps>;

// @public (undocumented)
export const menuDividerClassName = "fui-MenuDivider";

// @public (undocumented)
export type MenuDividerProps = ComponentProps<MenuDividerSlots>;

// @public (undocumented)
export type MenuDividerSlots = {
    root: IntrinsicSlotProps<'div'>;
};

// @public (undocumented)
export type MenuDividerState = ComponentState<MenuDividerSlots>;

// @public
export const MenuGroup: ForwardRefComponent<MenuGroupProps>;

// @public (undocumented)
export const menuGroupClassName = "fui-MenuGroup";

// @public (undocumented)
export const MenuGroupContextProvider: React_2.Provider<MenuGroupContextValue>;

// @public
export type MenuGroupContextValue = {
    headerId: string;
};

// @public (undocumented)
export type MenuGroupContextValues = {
    menuGroup: MenuGroupContextValue;
};

// @public
export const MenuGroupHeader: ForwardRefComponent<MenuGroupHeaderProps>;

// @public (undocumented)
export const menuGroupHeaderClassName = "fui-MenuGroupHeader";

// @public (undocumented)
export type MenuGroupHeaderProps = ComponentProps<MenuGroupHeaderSlots>;

// @public (undocumented)
export type MenuGroupHeaderSlots = {
    root: IntrinsicSlotProps<'div'>;
};

// @public (undocumented)
export type MenuGroupHeaderState = ComponentState<MenuGroupHeaderSlots>;

// @public (undocumented)
export type MenuGroupProps = ComponentProps<MenuGroupSlots>;

// @public (undocumented)
export type MenuGroupSlots = {
    root: IntrinsicSlotProps<'div'>;
};

// @public (undocumented)
export type MenuGroupState = ComponentState<MenuGroupSlots> & {
    headerId: string;
};

// @public
export const MenuItem: ForwardRefComponent<MenuItemProps>;

// @public
export const MenuItemCheckbox: ForwardRefComponent<MenuItemCheckboxProps>;

// @public (undocumented)
export const menuItemCheckboxClassName = "fui-MenuItemCheckbox";

// @public (undocumented)
export type MenuItemCheckboxProps = MenuItemProps & MenuItemSelectableProps;

// @public (undocumented)
export type MenuItemCheckboxState = MenuItemState & MenuItemSelectableState;

// @public (undocumented)
export const menuItemClassName = "fui-MenuItem";

// Warning: (ae-forgotten-export) The symbol "MenuItemCommons" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type MenuItemProps = ComponentProps<Partial<MenuItemSlots>> & MenuItemCommons;

// @public
export const MenuItemRadio: ForwardRefComponent<MenuItemRadioProps>;

// @public (undocumented)
export const menuItemRadioClassName = "fui-MenuItemRadio";

// @public (undocumented)
export type MenuItemRadioProps = MenuItemProps & MenuItemSelectableProps;

// @public (undocumented)
export type MenuItemRadioState = MenuItemState & MenuItemSelectableState;

// @public
export type MenuItemSelectableProps = {
    name: string;
    value: string;
};

// @public
export type MenuItemSelectableState = MenuItemSelectableProps & {
    checkedItems: string[];
    onCheckedValueChange: (e: React_2.MouseEvent | React_2.KeyboardEvent, name: string, checkedItems: string[]) => void;
    checked: boolean;
};

// @public (undocumented)
export type MenuItemSlots = {
    root: IntrinsicSlotProps<'div'>;
    icon?: IntrinsicSlotProps<'span'>;
    checkmark?: IntrinsicSlotProps<'span'>;
    submenuIndicator?: IntrinsicSlotProps<'span'>;
    content?: IntrinsicSlotProps<'span'>;
    secondaryContent?: IntrinsicSlotProps<'span'>;
};

// @public (undocumented)
export type MenuItemState = ComponentState<MenuItemSlots> & MenuItemCommons;

// @public
export const MenuList: ForwardRefComponent<MenuListProps>;

// @public (undocumented)
export const menuListClassName = "fui-MenuList";

// @public (undocumented)
export type MenuListCommons = {
    onCheckedValueChange?: (e: MenuCheckedValueChangeEvent, data: MenuCheckedValueChangeData) => void;
    checkedValues: Record<string, string[]>;
    defaultCheckedValues?: Record<string, string[]>;
    hasIcons?: boolean;
    hasCheckmarks?: boolean;
};

// @public (undocumented)
export const MenuListContext: Context<MenuListContextValue>;

// @public
export type MenuListContextValue = Pick<MenuListProps, 'checkedValues' | 'onCheckedValueChange' | 'hasIcons' | 'hasCheckmarks'> & {
    setFocusByFirstCharacter?: (e: React_2.KeyboardEvent<HTMLElement>, itemEl: HTMLElement) => void;
    toggleCheckbox?: SelectableHandler;
    selectRadio?: SelectableHandler;
};

// @public (undocumented)
export type MenuListContextValues = {
    menuList: MenuListContextValue;
};

// @public (undocumented)
export type MenuListProps = ComponentProps<MenuListSlots> & Partial<MenuListCommons>;

// @public (undocumented)
export const MenuListProvider: React_2.Provider<MenuListContextValue> & React_2.FC<React_2.ProviderProps<MenuListContextValue>>;

// @public (undocumented)
export type MenuListSlots = {
    root: IntrinsicSlotProps<'div'>;
};

// @public (undocumented)
export type MenuListState = ComponentState<MenuListSlots> & MenuListCommons & {
    setFocusByFirstCharacter: NonNullable<MenuListContextValue['setFocusByFirstCharacter']>;
    toggleCheckbox: SelectableHandler;
    selectRadio: SelectableHandler;
};

// @public
export type MenuOpenChangeData = {
    open: boolean;
    keyboard?: boolean;
    bubble?: boolean;
};

// @public
export type MenuOpenEvents = MouseEvent | TouchEvent | React_2.MouseEvent<HTMLElement> | React_2.KeyboardEvent<HTMLElement> | React_2.FocusEvent<HTMLElement>;

// @public
export const MenuPopover: ForwardRefComponent<MenuPopoverProps>;

// @public (undocumented)
export const menuPopoverClassName = "fui-MenuPopover";

// @public
export type MenuPopoverProps = ComponentProps<MenuPopoverSlots>;

// @public (undocumented)
export type MenuPopoverSlots = {
    root: IntrinsicSlotProps<'div'>;
};

// @public
export type MenuPopoverState = ComponentState<MenuPopoverSlots> & {
    inline: boolean;
};

// Warning: (ae-forgotten-export) The symbol "MenuCommons" needs to be exported by the entry point index.d.ts
//
// @public
export type MenuProps = Partial<MenuCommons> & ComponentProps<MenuSlots> & {
    children: [JSX.Element, JSX.Element] | JSX.Element;
    positioning?: PositioningShorthand;
};

// @public (undocumented)
export const MenuProvider: React_2.Provider<MenuContextValue> & React_2.FC<React_2.ProviderProps<MenuContextValue>>;

// @public (undocumented)
export type MenuSlots = {};

// @public
export const MenuSplitGroup: ForwardRefComponent<MenuSplitGroupProps>;

// @public (undocumented)
export const menuSplitGroupClassName = "fui-MenuSplitGroup";

// @public (undocumented)
export type MenuSplitGroupCommons = {};

// @public
export type MenuSplitGroupProps = ComponentProps<MenuSplitGroupSlots> & MenuSplitGroupCommons;

// @public (undocumented)
export type MenuSplitGroupSlots = {
    root: IntrinsicSlotProps<'div'>;
};

// @public
export type MenuSplitGroupState = ComponentState<MenuSplitGroupSlots> & MenuSplitGroupCommons;

// @public (undocumented)
export type MenuState = MenuCommons & ComponentState<MenuSlots> & {
    setOpen: (e: MenuOpenEvents, data: MenuOpenChangeData) => void;
    menuPopover: React_2.ReactNode;
    menuTrigger: React_2.ReactNode;
    menuPopoverRef: React_2.MutableRefObject<HTMLElement>;
    triggerRef: React_2.MutableRefObject<HTMLElement>;
    triggerId: string;
    isSubmenu: boolean;
    contextTarget: ReturnType<typeof usePopperMouseTarget>[0];
    setContextTarget: ReturnType<typeof usePopperMouseTarget>[1];
};

// @public
export const MenuTrigger: React_2.ForwardRefExoticComponent<MenuTriggerProps & React_2.RefAttributes<HTMLElement>>;

// @public
export type MenuTriggerChildProps = Required<Pick<React_2.HTMLAttributes<HTMLElement>, 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'onMouseMove' | 'onContextMenu' | 'onKeyDown' | 'aria-haspopup' | 'id'>> & {
    ref?: React_2.Ref<never>;
    'aria-expanded': boolean | undefined;
};

// @public (undocumented)
export const MenuTriggerContextProvider: React_2.Provider<boolean>;

// @public (undocumented)
export type MenuTriggerProps = {
    children: (React_2.ReactElement & {
        ref?: React_2.Ref<unknown>;
    }) | ((props: MenuTriggerChildProps) => React_2.ReactNode);
};

// @public (undocumented)
export type MenuTriggerState = {
    children: React_2.ReactNode;
};

// @public
export const renderMenu_unstable: (state: MenuState, contextValues: MenuContextValues) => JSX.Element;

// @public
export const renderMenuDivider_unstable: (state: MenuDividerState) => JSX.Element;

// @public
export const renderMenuGroup_unstable: (state: MenuGroupState, contextValues: MenuGroupContextValues) => JSX.Element;

// @public
export const renderMenuGroupHeader_unstable: (state: MenuGroupHeaderState) => JSX.Element;

// @public
export const renderMenuItem_unstable: (state: MenuItemState) => JSX.Element;

// @public
export const renderMenuItemCheckbox_unstable: (state: MenuItemCheckboxState) => JSX.Element;

// @public
export const renderMenuItemRadio_unstable: (state: MenuItemRadioState) => JSX.Element;

// @public
export const renderMenuList_unstable: (state: MenuListState, contextValues: MenuListContextValues) => JSX.Element;

// @public
export const renderMenuPopover_unstable: (state: MenuPopoverState) => JSX.Element;

// @public
export const renderMenuSplitGroup_unstable: (state: MenuSplitGroupState) => JSX.Element;

// @public
export const renderMenuTrigger_unstable: (state: MenuTriggerState) => JSX.Element;

// @public (undocumented)
export type SelectableHandler = (e: React_2.MouseEvent | React_2.KeyboardEvent, name: string, value: string, checked: boolean) => void;

// @public (undocumented)
export type UninitializedMenuListState = Omit<MenuListState, 'setFocusByFirstCharacter' | 'toggleCheckbox' | 'selectRadio' | 'checkedValues'> & Partial<Pick<MenuListState, 'checkedValues'>>;

// @public
export const useCheckmarkStyles_unstable: (state: MenuItemSelectableState & Pick<MenuItemSlots, 'checkmark'>) => void;

// @public
export const useMenu_unstable: (props: MenuProps) => MenuState;

// @public (undocumented)
export const useMenuContext_unstable: <T>(selector: ContextSelector<MenuContextValue, T>) => T;

// @public (undocumented)
export function useMenuContextValues_unstable(state: MenuState): MenuContextValues;

// @public
export const useMenuDivider_unstable: (props: MenuDividerProps, ref: React_2.Ref<HTMLElement>) => MenuDividerState;

// @public (undocumented)
export const useMenuDividerStyles_unstable: (state: MenuDividerState) => MenuDividerState;

// @public
export function useMenuGroup_unstable(props: MenuGroupProps, ref: React_2.Ref<HTMLElement>): MenuGroupState;

// @public (undocumented)
export const useMenuGroupContext_unstable: () => MenuGroupContextValue;

// @public (undocumented)
export function useMenuGroupContextValues_unstable(state: MenuGroupState): MenuGroupContextValues;

// @public
export function useMenuGroupHeader_unstable(props: MenuGroupHeaderProps, ref: React_2.Ref<HTMLElement>): MenuGroupHeaderState;

// @public (undocumented)
export const useMenuGroupHeaderStyles_unstable: (state: MenuGroupHeaderState) => MenuGroupHeaderState;

// @public (undocumented)
export const useMenuGroupStyles_unstable: (state: MenuGroupState) => MenuGroupState;

// @public
export const useMenuItem_unstable: (props: MenuItemProps, ref: React_2.Ref<HTMLElement>) => MenuItemState;

// @public
export const useMenuItemCheckbox_unstable: (props: MenuItemCheckboxProps, ref: React_2.Ref<HTMLElement>) => MenuItemCheckboxState;

// @public (undocumented)
export const useMenuItemCheckboxStyles_unstable: (state: MenuItemCheckboxState) => void;

// @public
export const useMenuItemRadio_unstable: (props: MenuItemRadioProps, ref: React_2.Ref<HTMLElement>) => MenuItemRadioState;

// @public (undocumented)
export const useMenuItemRadioStyles_unstable: (state: MenuItemRadioState) => void;

// @public
export const useMenuItemStyles_unstable: (state: MenuItemState) => void;

// @public
export const useMenuList_unstable: (props: MenuListProps, ref: React_2.Ref<HTMLElement>) => MenuListState;

// @public (undocumented)
export const useMenuListContext_unstable: <T>(selector: ContextSelector<MenuListContextValue, T>) => T;

// @public (undocumented)
export function useMenuListContextValues_unstable(state: MenuListState): MenuListContextValues;

// @public
export const useMenuListStyles_unstable: (state: MenuListState) => MenuListState;

// @public
export const useMenuPopover_unstable: (props: MenuPopoverProps, ref: React_2.Ref<HTMLElement>) => MenuPopoverState;

// @public
export const useMenuPopoverStyles_unstable: (state: MenuPopoverState) => MenuPopoverState;

// @public
export const useMenuSplitGroup_unstable: (props: MenuSplitGroupProps, ref: React_2.Ref<HTMLElement>) => MenuSplitGroupState;

// @public
export const useMenuSplitGroupStyles_unstable: (state: MenuSplitGroupState) => MenuSplitGroupState;

// @public
export const useMenuTrigger_unstable: (props: MenuTriggerProps, ref: React_2.Ref<HTMLElement>) => MenuTriggerState;

// @public (undocumented)
export const useMenuTriggerContext_unstable: () => boolean;

// (No @packageDocumentation comment for this package)

```
