'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: 'dashboard' },
  { name: 'Members', href: '/admin/members', icon: 'group' },
  { name: 'Attendance', href: '/admin/attendance', icon: 'fact_check' },
  { name: 'Staff', href: '/admin/staff', icon: 'badge' },
  { name: 'Transactions', href: '/admin/transactions', icon: 'payments' },
  { name: 'Services', href: '/admin/services', icon: 'category' },
  { name: 'Potential Customers', href: '/admin/potential-customers', icon: 'person_add' },
  { name: 'SMS', href: '/admin/sms', icon: 'sms' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-surface-dark border-r border-surface-dark-lighter z-50 transform transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-5 border-b border-surface-dark-lighter">
            <Link href="/admin/dashboard" className="flex items-center gap-3" onClick={onClose}>
              <div className="size-10 relative shrink-0">
                <Image
                  src="/logo-bright.png"
                  alt="Bright Gym"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-white font-bold text-lg">Bright Gym</span>
                <p className="text-white/60 text-xs">Admin Panel</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-white/60 hover:bg-surface-dark-lighter hover:text-white'
                      }`}
                    >
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Branding */}
          <div className="p-4 border-t border-surface-dark-lighter">
            <Link href="/admin/dashboard" className="flex items-center gap-3" onClick={onClose}>
              <div className="size-10 relative shrink-0">
                <Image
                  src="/logo-bright.png"
                  alt="Bright Gym"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-bold text-lg">Bright Gym</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}





