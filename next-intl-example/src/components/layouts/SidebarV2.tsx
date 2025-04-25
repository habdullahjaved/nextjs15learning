'use client';
import React from 'react';
import Link from 'next/link';

interface MenuItem {
  id: number;
  title: string;
  description: string;
  link: string | null;
  icon: string | null;
  parent_id: number | null;
  category: string;
  module: string;
  target: string;
  actions: {role_id: number; menu_id: number; action_id: number | null}[];
}

interface SidebarProps {
  menus: MenuItem[];
}

const SidebarV2: React.FC<SidebarProps> = ({menus}) => {
  // Filter only 'sideBar' module items
  const sideBarMenus = menus.filter((menu) => menu.module === 'sideBar');

  // Get parents
  const parents = sideBarMenus.filter((menu) => menu.parent_id === null);

  // Helper to get children
  const getChildren = (parentId: number) =>
    sideBarMenus.filter((menu) => menu.parent_id === parentId);

  return (
    <div className="h-screen w-20 bg-gray-800 text-white flex flex-col items-center py-6 space-y-6 relative">
      {parents.map((parent) => {
        const children = getChildren(parent.id);
        return (
          <SidebarItem
            key={parent.id}
            icon={'📁'} // You can replace with actual icons later
            submenu={children.map((child) => ({
              title: child.title,
              link: child.link || '#'
            }))}
          />
        );
      })}
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  submenu: {title: string; link: string}[];
}

const SidebarItem: React.FC<SidebarItemProps> = ({icon, submenu}) => {
  return (
    <div className="group relative w-full flex justify-center">
      {/* Hover Area Bridge */}
      <div className="absolute left-0 top-0 h-full w-[220px] z-0" />

      {/* Icon */}
      <div className="z-10 hover:bg-gray-700 p-3 rounded cursor-pointer">
        {icon}
      </div>

      {/* Submenu */}
      <div className="pointer-events-none group-hover:pointer-events-auto absolute left-full top-1/2 -translate-y-1/2 ml-2 z-20">
        <div className="transition-all duration-300 transform opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 bg-gray-700 text-sm rounded shadow-lg w-40 p-2">
          {submenu.map((item, idx) => (
            <Link
              href={item.link}
              key={idx}
              className="block px-2 py-1 hover:bg-gray-600 rounded"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarV2;
