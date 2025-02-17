import { createDOMRenderer, rehydrateRendererCache } from '@griffel/core';
import { canUseDOM } from '@fluentui/react-utilities';
import * as React from 'react';
import type { GriffelRenderer } from '@griffel/core';

export interface RendererProviderProps {
  /** An instance of makeStyles() renderer. */
  renderer: GriffelRenderer;

  /**
   * Document used to insert CSS variables to head
   */
  targetDocument?: Document;
}

/**
 * @private
 */
export const RendererContext = React.createContext<GriffelRenderer>(createDOMRenderer());

/**
 * @public
 */
export const RendererProvider: React.FC<RendererProviderProps> = ({ children, renderer, targetDocument }) => {
  if (canUseDOM()) {
    // This if statement technically breaks the rules of hooks, but is safe because the condition never changes after
    // mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useMemo(() => {
      // "rehydrateCache()" can't be called in effects as it needs to be called before any component will be rendered to
      // avoid double insertion of classes
      rehydrateRendererCache(renderer, targetDocument);
    }, [renderer, targetDocument]);
  }

  return <RendererContext.Provider value={renderer}>{children}</RendererContext.Provider>;
};

/**
 * Returns an instance of current makeStyles() renderer.
 *
 * @private
 */
export function useRenderer(): GriffelRenderer {
  return React.useContext(RendererContext);
}
