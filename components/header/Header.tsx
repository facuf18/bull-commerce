import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '../ModeToggler';

export default function Header() {
  return (
    <div className='h-20 px-20 flex flex-row items-center justify-between'>
      <p>Logo</p>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href='/about' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
