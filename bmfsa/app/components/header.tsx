import Link from 'next/link';
import Image from 'next/image';
import Navbar from './navbar'

export default function Header() {
    return (
      <header className="p-5"> 
           <Image
      src= "
      width={50}
      height={50}
      alt="Good Guys Painting logo"
    />
      <Navbar></Navbar>
 
    
      This is the Header 
        
      </header> )}