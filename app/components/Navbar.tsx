import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
}

const Navbar = ({ navLinks }: { navLinks: NavLink[] }) => {
  return (
    <nav className="hidden lg:flex space-x-8">
      {navLinks.map((link) => (
        <Link 
          key={link.href} 
          href={link.href} 
          className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 relative group"
        >
          {link.label}
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar; 