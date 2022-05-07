/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: "home",
    roles: ["admin", "editor", "guest"],
  },

  {
    title: "Test mục con",
    path: "/permission",
    icon: "lock",
    children: [
      {
        title: "mục 1",
        path: "/permission/explanation",
        roles: ["admin"],
      },
      {
        title: "mục 2",
        path: "/permission/adminPage",
        roles: ["admin"],
      },
      {
        title: "mục 3",
        path: "/permission/guestPage",
        roles: ["guest"],
      },
      {
        title: "mục 4",
        path: "/permission/editorPage",
        roles: ["editor"],
      },
    ],
  },
  {
    title: "Tiện ích",
    path: "/components",
    icon: "appstore",
    roles: ["admin", "editor"],
    children: [
      {
        title: "Viết",
        path: "/components/richTextEditor",
        roles: ["admin", "editor"],
      },
      {
        title: "Dịch",
        path: "/components/Markdown",
        roles: ["admin", "editor"],
      },
    ],
  },

  {
    title: "Bảng",
    path: "/table",
    icon: "table",
    roles: ["admin", "editor"],
  },
  {
    title: "Excel",
    path: "/excel",
    icon: "file-excel",
    roles: ["admin", "editor"],
    children: [
      {
        title: "Xuất file excel",
        path: "/excel/export",
        roles: ["admin", "editor"],
      },
      {
        title: "Tải file Excel",
        path: "/excel/upload",
        roles: ["admin", "editor"],
      },
    ],
  },

  {
    title: "Quản lý tài khoản",
    path: "/user",
    icon: "usergroup-add",
    roles: ["admin"],
  },
  {
    title: "Bảng lỗi",
    path: "/bug",
    icon: "bug",
    roles: ["admin"],
  },
];
export default menuList;
