import { ButtonProps as MuiButtonProps, Button as MuiButton } from '@mui/material';
import { forwardRef } from 'react';

export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  color?: 'primary' | 'secondary' | 'inherit';
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isLoading = false, fullWidth = false, ...props }, ref) => {
    return (
      <MuiButton
        ref={ref}
        fullWidth={fullWidth}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? 'Loading...' : children}
      </MuiButton>
    );
  }
);

Button.displayName = 'Button';