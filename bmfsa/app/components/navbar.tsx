import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (<nav>
    <Image
      src= "/logo.png"
      width={50}
      height={50}
      alt="Good Guys Painting logo"
    />
        <ul>
         <li><Link href=""> Home </Link></li>
        <li><Link href="/estimates">Estimates</Link></li>   
        <li><Link href="/services">Services</Link></li>
        <li> <Link href="/auth/login">Login</Link></li>
        <li><Link href="/auth/signup">Signup</Link></li>
        </ul>
        

    </nav>
    )} 