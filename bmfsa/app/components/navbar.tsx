import Link from 'next/link';

export default function Navbar() {
    return (<nav>
        This is the Nav 
        <ul>
        <Link href=""> Home </Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/services">Services</Link>
        
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/signup">Signup</Link>
        </ul>
        

    </nav>
    )} 