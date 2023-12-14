// import Image from 'next/image';
// import styles from '@my/styles/variables.module.scss';

import { MyHeader } from '@my/components/header';

export default function Page() {
    return (
        <>
            <MyHeader />
            <main>
                <h1>test</h1>
                {/* <Image
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                /> */}
            </main>
        </>
    );
}
