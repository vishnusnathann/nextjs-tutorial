import Link from 'next/link'
export default function FirstPost() {
    return (
        <>
            <h1>
                Hello I created the the first post
            </h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    );
}