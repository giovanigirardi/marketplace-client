import { Select, SelectContent, SelectTrigger, SelectValue } from "./select";

type SelectContainerProps = {
  placeholder?: string;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
};

export function SelectContainer(props: SelectContainerProps) {
  const { leftIcon, placeholder, children } = props;

  return (
    <div className="flex flex-col text-gray-300 transition-colors focus-within:text-primary">
      <div className="flex border-b border-gray-200 py-3.5 transition focus-within:border-gray-400">
        {leftIcon && <div className="mr-2">{leftIcon}</div>}
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>{children}</SelectContent>
        </Select>
      </div>
    </div>
  );
}
