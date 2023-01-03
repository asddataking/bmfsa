import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (<nav>
        This is the Nav 
        
    <Image
      src= "/logo.png"
      width={50}
      height={50}
      alt="Good Guys Painting logo"
    />
        <ul>
        <Link href=""> Home </Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/services">Services</Link>
        
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/signup">Signup</Link>
        </ul>
        

    </nav>
    )} 