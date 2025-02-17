import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { AvatarSlots, AvatarState } from './Avatar.types';

export const renderAvatar_unstable = (state: AvatarState) => {
  const { slots, slotProps } = getSlots<AvatarSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.initials {...slotProps.initials} />
      <slots.icon {...slotProps.icon} />
      <slots.image {...slotProps.image} />
      <slots.badge {...slotProps.badge} />
    </slots.root>
  );
};
