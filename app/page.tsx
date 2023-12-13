// import Image from 'next/image';
import styles from '@my/styles/variables.module.scss';

export default function Home() {
    return (
        <main style={{ background: styles.primaryColor }}>
            <h1>test</h1>
            {/* <Image
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                /> */}
        </main>
    );
}
