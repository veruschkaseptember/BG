import * as React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const FloatingInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <Input
        placeholder=" "
        className={cn('peer', error && 'border-red-500', className)}
        ref={ref}
        {...props}
      />
    );
  }
);
FloatingInput.displayName = 'FloatingInput';

const FloatingLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Label
      ref={ref}
      className={cn(
        'absolute start-2 top-2 z-10 origin-[0] -translate-y-4 scale-75',
        'transform bg-white px-2 text-sm text-gray-500 duration-300',
        'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2',
        'peer-placeholder-shown:scale-100 peer-focus:top-2',
        'peer-focus:-translate-y-4 peer-focus:scale-75',
        'peer-focus:text-primary peer-focus:px-2 cursor-text',
        className
      )}
      {...props}
    />
  );
});
FloatingLabel.displayName = 'FloatingLabel';

type FloatingLabelInputProps = InputProps & {
  label?: string;
  error?: string;
};

const FloatingLabelInput = React.forwardRef<
  React.ElementRef<typeof FloatingInput>,
  React.PropsWithoutRef<FloatingLabelInputProps>
>(({ id, label, error, ...props }, ref) => {
  return (
    <div className="relative">
      <FloatingInput ref={ref} id={id} error={error} {...props} />
      <FloatingLabel htmlFor={id}>{label}</FloatingLabel>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
});
FloatingLabelInput.displayName = 'FloatingLabelInput';

export { FloatingInput, FloatingLabel, FloatingLabelInput };
