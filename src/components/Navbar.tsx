'use client';

import Link from 'next/link';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import HomeIcon from './ui/icons/HomeIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import NewIcon from './ui/icons/NewIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import { usePathname } from 'next/navigation';
import ColorButton from './ui/ColorButton';
import { useSession, signIn, signOut } from 'next-auth/react';
import Avatar from './ui/Avatar';

const menu = [
  {
    href: '/',
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: '/search',
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: '/new',
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];
export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user; //session 안에 user라는 항목 있다면 할당한다.

  return (
    <div className='flex items-center justify-between px-6'>
      <Link href='/'>
        <h1 className='text-4xl font-bold'>Musical's Blog</h1>
      </Link>
      <nav>
        <ul className='flex items-center gap-6 p-4'>
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
              
            </li>
          ))}
          {user && (
          <li>
            <Link href={`/user/${user.username}`}></Link>
            <Avatar image={user.image} size='small' highlight/>
          </li>
          )}
          <li>

          {session ? (
            <ColorButton text='Sign out' onClick={() => signOut()} />
          ) : (
            <ColorButton text='Sign in' onClick={() => signIn()} />
          )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
