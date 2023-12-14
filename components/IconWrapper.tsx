import type { ICoreProps } from '@my/interfaces/core';
import type { ButtonHTMLAttributes, FC } from 'react';

interface Props extends ICoreProps, ButtonHTMLAttributes<HTMLButtonElement> {}

export const IconWrapper: FC<Props> = ({
    children,
    className = '',
    ...another
}) => {
    return (
        <div className="my-icon">
            <button {...another} type="button">
                {children}
            </button>
        </div>
    );
};
