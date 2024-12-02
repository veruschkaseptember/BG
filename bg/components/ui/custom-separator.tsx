import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface CustomSeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function CustomSeparator({
  orientation = 'vertical',
  className,
}: CustomSeparatorProps) {
  return (
    <Separator
      orientation={orientation}
      className={cn(
        'bg-[rgba(145,158,171,0.24)]',
        orientation === 'vertical' ? 'h-full w-[1px]' : 'h-[1px] w-full',
        className
      )}
    />
  );
}
