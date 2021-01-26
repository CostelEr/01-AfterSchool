import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from './Button'
import { PlusIcon } from '../icons/plus-icon/PlusIcon'

export default {
  title: 'components/Button',
  argTypes: { onClick: { action: 'clicked' } },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const IconLeft = Template.bind({})
IconLeft.args = {
  className: 'bg-yellow-500',
  iconleft: <PlusIcon className="w-3" />,
  label: 'Select',
}

export const SelectIcon = Template.bind({})
SelectIcon.args = {
  className:
    'inline-flex items-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
  iconleft: <PlusIcon className="w-3" />,
  label: 'Select',
}
