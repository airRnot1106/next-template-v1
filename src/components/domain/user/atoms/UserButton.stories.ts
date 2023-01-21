import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { UserButton } from '@/components/domain/user/atoms/UserButton';

export default { component: UserButton } satisfies ComponentMeta<
  typeof UserButton
>;

export const Default: ComponentStoryObj<typeof UserButton> = {};
