import type { FC } from 'react';
import { MyHeaderLeft } from './Left';

interface Props {}

export const MyHeader: FC<Props> = () => {
    const displayName = 'my-header';

    return (
        <header className={`${displayName} wr-frame__header`}>
            <MyHeaderLeft />
            <div className={`${displayName}__center`}></div>
            <div className={`${displayName}__right`}></div>
        </header>
    );
};
