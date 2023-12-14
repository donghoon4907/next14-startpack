import type { ReactNode, Dispatch, SetStateAction } from 'react';

export interface ICoreProps {
    children?: ReactNode;
}

export type ICoreSetState<T> = Dispatch<SetStateAction<T>>;

export interface ICoreEditable {
    editable: boolean;
}
