import {LayoutDashboard, Settings2, User} from 'lucide-react';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen w-20 bg-gray-800 text-white flex flex-col items-center py-6 space-y-6 relative">
      {/* Menu Item */}
      <SidebarItem icon={<LayoutDashboard />} submenu={['Overview', 'Stats']} />
      <SidebarItem icon={<User />} submenu={['All Users', 'Invite']} />
      <SidebarItem icon={<Settings2 />} submenu={['General', 'Security']} />
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  submenu: string[];
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
            <div
              key={idx}
              className="px-2 py-1 hover:bg-gray-600 rounded cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// // components/Sidebar.tsx
// import {LayoutDashboard, Settings, Settings2, User} from 'lucide-react';
// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div className="h-screen w-24 bg-gray-800 text-white p-4">
//       <h1 className="text-xl font-bold mb-6">My App</h1>
//       <nav className="flex flex-col space-y-4">
//         <a href="#" className="hover:bg-gray-700 p-2 rounded flex ">
//           <LayoutDashboard />
//         </a>
//         <a href="#" className="hover:bg-gray-700 p-2 rounded">
//           <User />
//         </a>
//         <a href="#" className="hover:bg-gray-700 p-2 rounded">
//           <Settings2 />
//         </a>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
