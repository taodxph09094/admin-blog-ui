export default {
  /**
   * @type {boolean} true | false
   * @description 
Cho dù hiển thị bảng cài đặt bên phải
   */
  showSettings: true,
  // Nếu bạn chỉ muốn hiển thị bảng cài đặt hệ thống trong môi trường phát triển chứ không muốn hiển thị trong môi trường sản xuất, vui lòng mở dòng mã sau
  // showSettings: process.env.NODE_ENV === "development",

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,
};
