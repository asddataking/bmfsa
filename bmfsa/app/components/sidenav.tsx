import Link from 'next/link';

export default function sideNav(){
    <nav className="flex-col">
         <ul className="flex flex-wrap justify-between">
         <li><Link href=""> Home </Link></li>
        <li><Link href="/estimates">Estimates</Link></li>   
        <li><Link href="/services">Services</Link></li>
        <li> <Link href="/auth/login">Login</Link></li>
        <li><Link href="/auth/signup">Signup</Link></li>
        </ul>
    </nav>






}