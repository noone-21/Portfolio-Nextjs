import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-center text-weight-bold pb-10">
            <p className="text-sm dark:text-light/70 font-bold">
                © Its Me Danii, Designed By{''}
                <Link
                    href="/"
                    className="ml-1 inline-block border-b border-b-transparent text-primary transition hover:border-b-primary hover:text-blue-600">
                    Danish Ahmed
                </Link>
            </p>
        </footer>
    )
}
