/**
 * icon:Biểu tượng
 * roles:Cho biết mục menu hiện tại có thể được hiển thị dưới vai trò nào.
 * Nếu tùy chọn này không được viết,
 * điều đó có nghĩa là mục menu hoàn toàn ở chế độ công khai và được hiển thị dưới bất kỳ vai trò nào.
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
        title: "Page",
        path: "/permission/explanation",
        roles: ["admin"],
      },
      {
        title: "Admin page",
        path: "/permission/adminPage",
        roles: ["admin"],
      },
      {
        title: "Guest page",
        path: "/permission/guestPage",
        roles: ["guest"],
      },
      {
        title: "Editor page",
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
