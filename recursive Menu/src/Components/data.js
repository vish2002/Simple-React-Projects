export const menus = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Profile",
      to: "/profile",
      children: [
        {
          label: "Details",
          to: "details",
          children: [
            {
              label: "Location",
              to: "location",
            },
            {
              label: "Contact",
              to: "contact",
            },
          ],
        },
        {
          label: "Settings",
          to: "settings",
        },
      ],
    },
    {
      label: "Services",
      to: "/services",
      children: [
        {
          label: "Consulting",
          to: "consulting",
        },
        {
          label: "Development",
          to: "development",
          children: [
            {
              label: "Frontend",
              to: "frontend",
            },
            {
              label: "Backend",
              to: "backend",
            },
          ],
        },
      ],
    },
    {
      label: "About",
      to: "/about",
    },
    {
      label: "Contact Us",
      to: "/contact",
    },
];

export default menus;
  