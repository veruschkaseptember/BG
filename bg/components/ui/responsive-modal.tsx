'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const ResponsiveModal = DialogPrimitive.Root;
const ResponsiveModalTrigger = DialogPrimitive.Trigger;
const ResponsiveModalClose = DialogPrimitive.Close;
const ResponsiveModalPortal = DialogPrimitive.Portal;

const ResponsiveModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/30 backdrop-blur-sm',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
));
ResponsiveModalOverlay.displayName = DialogPrimitive.Overlay.displayName;

const ResponsiveModalVariants = cva(
  cn(
    'fixed z-50 gap-4',
    'bg-white/95',
    'shadow-lg transition ease-in-out',
    'p-6',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:duration-300 data-[state=open]:duration-500',
    'overflow-y-auto',
    'lg:left-[50%] lg:top-[50%] lg:grid',
    'lg:w-full lg:max-w-md',
    'lg:translate-x-[-50%] lg:translate-y-[-50%] lg:border lg:rounded-xl'
  ),
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b rounded-b-xl max-h-[90%]',
        bottom: 'inset-x-0 bottom-0 border-t rounded-t-xl max-h-[90%]',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r rounded-r-xl sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4 border-l rounded-l-xl sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'bottom',
    },
  }
);

interface ResponsiveModalContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof ResponsiveModalVariants> {}

const ResponsiveModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  ResponsiveModalContentProps
>(({ side = 'bottom', className, children, ...props }, ref) => (
  <ResponsiveModalPortal>
    <ResponsiveModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(ResponsiveModalVariants({ side }), className)}
      {...props}>
      {children}
      <ResponsiveModalClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </ResponsiveModalClose>
    </DialogPrimitive.Content>
  </ResponsiveModalPortal>
));
ResponsiveModalContent.displayName = DialogPrimitive.Content.displayName;

const ResponsiveModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
);

const ResponsiveModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
);

const ResponsiveModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
));

const ResponsiveModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));

ResponsiveModalHeader.displayName = 'ResponsiveModalHeader';
ResponsiveModalFooter.displayName = 'ResponsiveModalFooter';
ResponsiveModalTitle.displayName = DialogPrimitive.Title.displayName;
ResponsiveModalDescription.displayName =
  DialogPrimitive.Description.displayName;

export {
  ResponsiveModal,
  ResponsiveModalPortal,
  ResponsiveModalOverlay,
  ResponsiveModalTrigger,
  ResponsiveModalClose,
  ResponsiveModalContent,
  ResponsiveModalHeader,
  ResponsiveModalFooter,
  ResponsiveModalTitle,
  ResponsiveModalDescription,
};
