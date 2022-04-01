import { FC } from 'react';

const DEFAULT_PATH_PROPS = {
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

export const SearchIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        {...DEFAULT_PATH_PROPS}
      />
      <path d="M21 21L16.65 16.65" {...DEFAULT_PATH_PROPS} />
    </svg>
  );
};

export const CloseIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M5.63607 5.35355L18.364 18.0815" {...DEFAULT_PATH_PROPS} />
      <path d="M18.0815 5.35354L5.35358 18.0815" {...DEFAULT_PATH_PROPS} />
    </svg>
  );
};
