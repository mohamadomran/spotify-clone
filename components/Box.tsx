import { twMerge } from 'tailwind-merge';

interface BoxProps {
  children: React.ReactNode;
  classname?: string;
}

const Box: React.FC<BoxProps> = ({ children, classname }) => {
  return (
    <div
      className={twMerge(
        `
        h-fit
        w-full
        rounded-lg
        bg-neutral-900
      `,
        classname,
      )}
    >
      {children}
    </div>
  );
};

export default Box;
