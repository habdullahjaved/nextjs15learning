import SidebarV3 from '@/components/layouts/SidebarV3';
import React, {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  params: Promise<{locale: string}>;
};

const layout = ({children}: Props) => {
  const menues = [
    {
      id: 7,
      description: 'Categories',
      title: 'Categories Management',
      link: '',
      icon: '',
      parent_id: null,
      category: 'web',
      module: 'sideBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 7,
          action_id: 1
        }
      ]
    },
    {
      id: 8,
      description: 'Tours Management',
      title: 'Tours Management',
      link: null,
      icon: '',
      parent_id: null,
      category: 'web',
      module: 'sideBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 8,
          action_id: 1
        }
      ]
    },
    {
      id: 9,
      description: 'Events Management',
      title: 'Events Management',
      link: null,
      icon: '',
      parent_id: null,
      category: 'web',
      module: 'sideBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 9,
          action_id: 1
        }
      ]
    },
    {
      id: 10,
      description: 'Booking Management',
      title: 'Booking Management',
      link: null,
      icon: '',
      parent_id: null,
      category: 'web',
      module: 'sideBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 10,
          action_id: 1
        }
      ]
    },
    {
      id: 701,
      description: 'Categories',
      title: 'Categories',
      link: '/admin/categories',
      icon: '',
      parent_id: 7,
      category: 'web',
      module: 'sideBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 701,
          action_id: 1
        }
      ]
    },
    {
      id: 801,
      description: 'Tours',
      title: 'Tours',
      link: '/admin/tours',
      icon: null,
      parent_id: 8,
      category: 'web',
      module: 'sideBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 801,
          action_id: 1
        }
      ]
    },
    {
      id: 802,
      description: 'Pax',
      title: 'Pax',
      link: '/admin/pax',
      icon: null,
      parent_id: 8,
      category: 'web',
      module: 'sideBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 802,
          action_id: null
        }
      ]
    },
    {
      id: 803,
      description: 'Tax',
      title: 'Tax',
      link: '/admin/tax',
      icon: null,
      parent_id: 8,
      category: 'web',
      module: 'sideBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 803,
          action_id: null
        }
      ]
    },
    {
      id: 804,
      description: 'Tax Rate',
      title: 'Tax Rate',
      link: '/admin/taxrate',
      icon: null,
      parent_id: 8,
      category: 'web',
      module: 'sideBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 804,
          action_id: null
        }
      ]
    },
    {
      id: 805,
      description: 'Tax Rule',
      title: 'Tax Rule',
      link: '/admin/taxrule',
      icon: null,
      parent_id: 8,
      category: 'web',
      module: 'sideBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 805,
          action_id: null
        }
      ]
    },
    {
      id: 901,
      description: 'Events',
      title: 'Events',
      link: '/admin/Events',
      icon: null,
      parent_id: 9,
      category: 'web',
      module: 'sideBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 901,
          action_id: 1
        }
      ]
    },
    {
      id: 1031,
      description: 'Bookings',
      title: 'Bookings',
      link: '/admin/bookings',
      icon: null,
      parent_id: 10,
      category: 'web',
      module: 'sideBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 1031,
          action_id: 1
        }
      ]
    },
    {
      id: 2001,
      description: 'Home',
      title: 'HomePage',
      link: 'home',
      icon: null,
      parent_id: null,
      category: 'web',
      module: 'navBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 2001,
          action_id: 1
        }
      ]
    },
    {
      id: 2002,
      description: 'About Us',
      title: 'AboutPage',
      link: 'aboutus',
      icon: null,
      parent_id: null,
      category: 'web',
      module: 'navBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 2002,
          action_id: 1
        }
      ]
    },
    {
      id: 2003,
      description: 'Buses',
      title: 'busesPage',
      link: 'buses',
      icon: null,
      parent_id: null,
      category: 'web',
      module: 'navBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 2003,
          action_id: 1
        }
      ]
    },
    {
      id: 2004,
      description: 'Tours',
      title: 'TourPage',
      link: 'tours',
      icon: null,
      parent_id: null,
      category: 'web',
      module: 'navBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 2004,
          action_id: 1
        }
      ]
    },
    {
      id: 2005,
      description: 'Events',
      title: 'EventsPAge',
      link: '/events',
      icon: null,
      parent_id: null,
      category: 'web',
      module: 'navBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 2005,
          action_id: 1
        }
      ]
    },
    {
      id: 2006,
      description: 'Contact Us',
      title: 'ContactPage',
      link: 'contactus',
      icon: null,
      parent_id: null,
      category: 'web',
      module: 'navBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 2006,
          action_id: 1
        }
      ]
    },
    {
      id: 2007,
      description: 'Attractions',
      title: 'AttractionPage',
      link: 'attractions',
      icon: null,
      parent_id: null,
      category: 'web',
      module: 'navBar',
      target: '_self',
      actions: [
        {
          role_id: 2,
          menu_id: 2007,
          action_id: 1
        }
      ]
    }
  ];
  return (
    <div className="flex">
      <SidebarV3 menus={menues} />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default layout;
