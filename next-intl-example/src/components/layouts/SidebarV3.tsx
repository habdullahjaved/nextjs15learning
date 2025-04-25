'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

const SidebarV3: React.FC<SidebarProps> = ({menus}) => {
  const sideBarMenus = menus.filter((menu) => menu.module === 'sideBar');
  const parents = sideBarMenus.filter((menu) => menu.parent_id === null);
  const getChildren = (parentId: number) =>
    sideBarMenus.filter((menu) => menu.parent_id === parentId);

  return (
    <div className="h-screen w-20 bg-[#182488] text-white flex flex-col justify-between items-center py-4">
      {/* Top: Logo */}
      <div className="flex flex-col items-center space-y-4">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        {parents.map((parent) => {
          const children = getChildren(parent.id);
          return (
            <SidebarItem
              key={parent.id}
              icon={'📁'} // Replace with your icons
              label={parent.title}
              submenu={children.map((child) => ({
                title: child.title,
                link: child.link || '#'
              }))}
            />
          );
        })}
      </div>

      {/* Bottom: Settings/Profile/Logout */}
      <div className="flex flex-col items-center space-y-6 pb-6">
        <button className="hover:bg-gray-700 p-2 rounded-full">⚙️</button>
        <button className="hover:bg-gray-700 p-2 rounded-full">👤</button>
        <button className="hover:bg-gray-700 p-2 rounded-full">⏻</button>
      </div>
    </div>
  );
};
interface SidebarItemProps {
  icon: React.ReactNode;
  submenu: {title: string; link: string}[];
  label: string;
}
const SidebarItem: React.FC<SidebarItemProps> = ({icon, submenu, label}) => {
  return (
    <div className="relative w-full flex justify-center">
      {/* Hover group container */}
      <div className="group relative">
        {/* Main Icon */}
        <div className="z-10 hover:bg-gray-700 p-3 rounded cursor-pointer">
          {icon}
        </div>

        {/* Invisible bridge to submenu */}
        <div className="absolute top-0 left-full h-full w-12" />

        {/* Submenu appears next to icon */}
        <div className="pointer-events-none group-hover:pointer-events-auto absolute left-full top-0 ml-2 z-20">
          <div className="transition-all duration-300 transform opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 bg-white text-gray-800 text-sm rounded shadow-xl w-56 py-2">
            {/* Label title on top, then children underneath */}
            <div className="font-semibold text-blue-800 px-3 py-2 border-b border-gray-300">
              {label}
            </div>

            {/* Submenu items */}
            <div className="py-1">
              {submenu.map((item, idx) => (
                <Link
                  href={item.link}
                  key={idx}
                  className="block px-3 py-1 hover:bg-blue-100 rounded"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarV3;
