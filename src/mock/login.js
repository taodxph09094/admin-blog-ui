const tokens = {
  admin: "admin-token",
  guest: "guest-token",
  editor: "editor-token",
};

const users = {
  "admin-token": {
    id: "admin",
    role: "admin",
    name: "Tao Xuan Dang",
    avatar:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/122861955_709385313012197_8245357468634257824_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=r6sOwxVSNZAAX8Ic1FT&tn=Ggmf3f38_8N-3Xty&_nc_ht=scontent.fhan2-1.fna&oh=00_AT9ri2v3i_o8Bplk0X3CaeGPvlsgiRrZUE91LQNNeYun5Q&oe=629A53B8",
    description: "Có tất cả các quyền trình trong hệ thống",
  },
  "editor-token": {
    id: "editor",
    role: "editor",
    name: "Thùy Linh",
    avatar:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/279287205_762837011352798_8861342554435188756_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=om2-rV53IssAX-M5yU9&_nc_ht=scontent.fhan2-3.fna&oh=00_AT8cXYz5yzUPSTWQ5XrlV3DROUdRh8ZFgVFH_n0jNwvqMw&oe=627B4E61",
    description:
      "Có thể xem tất cả các trang ngoại trừ trang quản lý người dùng",
  },
  "guest-token": {
    id: "guest",
    role: "guest",
    name: "Khách",
    avatar:
      "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
    description: "Chỉ có thể xem Dashboard",
  },
};

export default {
  login: (config) => {
    const { username } = JSON.parse(config.body);
    const token = tokens[username];
    if (!token) {
      return {
        status: 1,
        message: "Tên người dùng hoặc mật khẩu sai",
      };
    }
    return {
      status: 0,
      token,
    };
  },
  userInfo: (config) => {
    const token = config.body;
    const userInfo = users[token];
    if (!userInfo) {
      return {
        status: 1,
        message: "Không lấy được thông tin người dùng",
      };
    }
    return {
      status: 0,
      userInfo,
    };
  },
  getUsers: () => {
    return {
      status: 0,
      users: Object.values(users),
    };
  },
  deleteUser: (config) => {
    const { id } = JSON.parse(config.body);
    const token = tokens[id];
    if (token) {
      delete tokens[id];
      delete users[token];
    }
    return {
      status: 0,
    };
  },
  editUser: (config) => {
    const data = JSON.parse(config.body);
    const { id } = data;
    const token = tokens[id];
    if (token) {
      users[token] = { ...users[token], ...data };
    }
    return {
      status: 0,
    };
  },
  ValidatUserID: (config) => {
    const userID = config.body;
    const token = tokens[userID];
    if (token) {
      return {
        status: 1,
      };
    } else {
      return {
        status: 0,
      };
    }
  },
  addUser: (config) => {
    const data = JSON.parse(config.body);
    const { id } = data;
    tokens[id] = `${id}-token`;
    users[`${id}-token`] = {
      ...users["guest-token"],
      ...data,
    };
    return {
      status: 0,
    };
  },
  logout: (_) => {
    return {
      status: 0,
      data: "success",
    };
  },
};
