import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <a className="navbar-brand">Note App</a>
            </Link>
            <Link href="/new">
                <a className="create">Create Note</a>
            </Link>
            <Link href="/login">
                <a className="create">Login</a>
            </Link>
            <Link href="/register">
                <a className="create">Register</a>
            </Link>
        </nav>
    )
}

export default Navbar