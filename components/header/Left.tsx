'use client';

import { useState, type FC } from 'react';
import { BsList } from 'react-icons/bs';
import { IconWrapper } from '../IconWrapper';

interface Props {}

export const MyHeaderLeft: FC<Props> = () => {
    const displayName = 'my-header';

    const [press, setPress] = useState(true);

    const handlePress = () => {
        setPress(!press);
    };

    return (
        <div className={`${displayName}__left`}>
            <IconWrapper
                aria-label="가이드"
                aria-pressed={press}
                onClick={handlePress}
            >
                <BsList />
            </IconWrapper>
        </div>
    );
};
