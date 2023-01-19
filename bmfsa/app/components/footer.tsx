import Link from 'next/link';


export default function Footer() {
    return (
<footer>
<ul>
        <Link href=""> Home </Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/services">Services</Link>
        
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/signup">Signup</Link>
</ul>

</footer>
)}