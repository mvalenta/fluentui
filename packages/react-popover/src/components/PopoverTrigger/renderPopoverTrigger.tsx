import type { PopoverTriggerState } from './PopoverTrigger.types';

/**
 * Render the final JSX of PopoverTrigger
 */
export const renderPopoverTrigger_unstable = (state: PopoverTriggerState): JSX.Element => {
  return state.children;
};
