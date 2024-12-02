'use client';

interface SwitchProps {
  className?: string;
  isChecked?: boolean;
  placement?: string;
  size?: string;
  state?: string;
  withLabel?: boolean;
  onChange?: (checked: boolean) => void;
}

export function CustomSwitch({
  className = '',
  isChecked = false,
  placement = 'Start',
  size = 'S',
  state = 'Default',
  withLabel = true,
  onChange,
}: SwitchProps) {
  return (
    <div
      className={`w-[34px] relative rounded-[50px] h-[20px] cursor-pointer ${className}`}
      onClick={() => onChange?.(!isChecked)}
      data-checked={isChecked}
      data-placement={placement}
      data-size={size}
      data-state={state}
      data-withlabel={withLabel}>
      <div
        className={`track absolute h-[70%] w-full top-[15%] right-[0%] bottom-[15%] left-[0%] rounded-[7px] transition-colors
          ${
            isChecked
              ? 'bg-[#67adb9] opacity-[0.32]'
              : 'bg-[#9d9d9d] opacity-[0.8]'
          }`}
      />
      <div
        className={`thumb absolute h-full w-[58.82%] top-[0%] transition-all shadow-[0px_1px_2px_rgba(145,_158,_171,_0.16)] rounded-[50%]
          ${
            isChecked
              ? 'right-[0%] left-[41.18%] bg-[#67adb9]'
              : 'right-[41.18%] left-[0%] bg-[#f5f5f5]'
          }`}
      />
    </div>
  );
}
