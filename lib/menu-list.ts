import {
  Bookmark,
  LayoutGrid,
  LucideIcon,
  Settings,
  Square,
  Tag,
  Users,
} from "lucide-react"

type Submenu = {
  href: string
  label: string
  active: boolean
}

type Menu = {
  href: string
  label: string
  active: boolean
  icon: LucideIcon
  submenus: Submenu[]
}

type Group = {
  groupLabel: string
  menus: Menu[]
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Portfolio",
          active: pathname.includes("/portfolio"),
          icon: Square,
          submenus: [
            {
              href: "/portfolio",
              label: "My Investments",
              active: pathname === "/portfolio",
            },
            {
              href: "/portfolio/summary",
              label: "Investment Summary",
              active: pathname === "/portfolio/summary",
            },
          ],
        },
        // {
        //   href: "/categories",
        //   label: "Categories",
        //   active: pathname.includes("/categories"),
        //   icon: Bookmark,
        //   submenus: [],
        // },
        // {
        //   href: "/tags",
        //   label: "Tags",
        //   active: pathname.includes("/tags"),
        //   icon: Tag,
        //   submenus: [],
        // },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/shareholder",
          label: "Shareholder",
          active: pathname.includes("/shareholder"),
          icon: Users,
          submenus: [],
        },
        {
          href: "/setting",
          label: "Settings",
          active: pathname.includes("/settings"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ]
}
