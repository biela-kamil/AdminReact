import { type ReactElement, type ReactNode } from 'react'
import { Button as RsButton } from 'rsuite'

interface ButtonProps {
  children: ReactNode
  appearance: 'default' | 'primary' | 'link' | 'subtle' | 'ghost'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  disabled?: boolean
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'violet'
  fullWidth?: boolean
}

export default function Button ({ children, appearance, size, disabled, color, fullWidth }: ButtonProps): ReactElement {
  return (
        <RsButton
            appearance={appearance}
            size={size ?? 'md'}
            disabled={disabled ?? false}
            color={color ?? 'blue'}
            style={{ width: fullWidth ? '100%' : 'auto' }}
        >
            { children }
        </RsButton>
  )
}
