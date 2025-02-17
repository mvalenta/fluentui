import { createContext } from '@fluentui/react-context-selector';
import type { Context } from '@fluentui/react-context-selector';
import { TabListContextValue } from './TabList.types';

export const TabListContext: Context<TabListContextValue> = createContext<TabListContextValue>({
  appearance: 'transparent',
  selectedValue: undefined,
  onSelect: () => {
    /* noop */
  },
  size: 'medium',
  vertical: false,
});
