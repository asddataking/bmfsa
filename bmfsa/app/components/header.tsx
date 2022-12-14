import Link from 'next/link';

export default function Header() {
    return (
      <header className="p-5 bg"> 
      <p>I am Header</p>
        <Link href="/dashboard">Dashboard</Link>
      </header> )}