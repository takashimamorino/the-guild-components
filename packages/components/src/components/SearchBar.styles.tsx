import type { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';
import tw, { css, styled } from 'twin.macro';
import { SearchIcon } from './Icon';

interface IStyleProps {
  accentColor?: string;
  isFull?: boolean;
}

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}

export const SearchButton: FC<
  IStyleProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, accentColor, isFull = false, className, ...props }) => {
  return (
    <button
      className={clsx(
        `
        flex
        cursor-pointer
        items-center
        border-transparent
        bg-transparent
        p-0
        text-xs
        font-medium
        text-gray-500
        font-default
        hocus:transition
        md:ml-3
        md:rounded-md
        md:border-2
        md:bg-gray-100
        md:py-1
        md:pl-1
        md:pr-8
        md:hocus:[border-color:var(--accentColor)]
        md:dark:bg-gray-800
        md:dark:text-gray-300
        `,
        isFull && '!md:p-2 !m-0 w-full',
        className
      )}
      {...props}
      style={{ '--accentColor': accentColor }}
    >
      <SearchIcon className="h-6 w-6 md:mr-1 md:h-4.5 md:w-4.5" />
      <span className="hidden md:block">{children}</span>
    </button>
  );
};

export const SearchHit = styled.article(({ accentColor }: IStyleProps) => [
  css`
    h2 {
      ${[
        tw`text-base font-semibold`,
        css`
          color: ${accentColor};
        `,
      ]}
    }

    &:last-child {
      a {
        ${tw`mb-0`}
      }
    }

    a {
      ${[
        tw`flex items-center mb-2 px-5 py-3 rounded-md break-all no-underline`,
        tw`dark:bg-gray-800 bg-gray-100`,
      ]}
      &:hover, &:focus {
        outline: none;
        background-color: ${accentColor};

        img {
          filter: brightness(0) invert(1);
        }

        span {
          ${tw`text-white`}
        }

        p {
          ${tw`text-gray-200`}
        }
      }

      img {
        ${tw`mr-4`}
      }

      span,
      p {
        ${tw`m-0`}
      }

      span {
        ${tw`dark:text-gray-300 text-gray-700`}
        em {
          ${tw`underline`}
        }
      }

      p {
        ${tw`text-xs text-gray-400`}
      }
    }
  `,
]);
