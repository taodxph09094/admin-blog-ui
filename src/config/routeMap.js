import Loadable from "react-loadable";
import Loading from "@/components/Loading";
const Dashboard = Loadable({
  loader: () => import("@/views/dashboard"),
  loading: Loading,
});

const Explanation = Loadable({
  loader: () => import("@/views/permission"),
  loading: Loading,
});
const AdminPage = Loadable({
  loader: () => import("@/views/permission/adminPage"),
  loading: Loading,
});
const GuestPage = Loadable({
  loader: () => import("@/views/permission/guestPage"),
  loading: Loading,
});
const EditorPage = Loadable({
  loader: () => import("@/views/permission/editorPage"),
  loading: Loading,
});
const RichTextEditor = Loadable({
  loader: () => import("@/views/components-demo/richTextEditor"),
  loading: Loading,
});
const Markdown = Loadable({
  loader: () => import("@/views/components-demo/Markdown"),
  loading: Loading,
});
const Table = Loadable({
  loader: () => import("@/views/table"),
  loading: Loading,
});
const ExportExcel = Loadable({
  loader: () => import("@/views/excel/exportExcel"),
  loading: Loading,
});
const UploadExcel = Loadable({
  loader: () => import("@/views/excel/uploadExcel"),
  loading: Loading,
});
const Error404 = Loadable({
  loader: () => import("@/views/error/404"),
  loading: Loading,
});
const User = Loadable({
  loader: () => import("@/views/user"),
  loading: Loading,
});
const Bug = Loadable({
  loader: () => import("@/views/bug"),
  loading: Loading,
});

export default [
  {
    path: "/dashboard",
    component: Dashboard,
    roles: ["admin", "editor", "guest"],
  },
  { path: "/permission/explanation", component: Explanation, roles: ["admin"] },
  { path: "/permission/adminPage", component: AdminPage, roles: ["admin"] },
  { path: "/permission/guestPage", component: GuestPage, roles: ["guest"] },
  { path: "/permission/editorPage", component: EditorPage, roles: ["editor"] },
  {
    path: "/components/richTextEditor",
    component: RichTextEditor,
    roles: ["admin", "editor"],
  },
  {
    path: "/components/Markdown",
    component: Markdown,
    roles: ["admin", "editor"],
  },
  { path: "/table", component: Table, roles: ["admin", "editor"] },
  { path: "/excel/export", component: ExportExcel, roles: ["admin", "editor"] },
  { path: "/excel/upload", component: UploadExcel, roles: ["admin", "editor"] },
  { path: "/user", component: User, roles: ["admin"] },
  { path: "/bug", component: Bug, roles: ["admin"] },
  { path: "/error/404", component: Error404 },
];
