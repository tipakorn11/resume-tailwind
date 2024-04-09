const accessMenu = ({ PERMISSIONS }) => {
  const menuItems = [];

  const _checkPermission = (data) => {
    if (Array.isArray(PERMISSIONS)) {
      const permission = PERMISSIONS.find(
        (item) => item.menu_name === data && item.permission_view === 1
      );
      return permission !== undefined;
    }
    return false;
  };

  if (_checkPermission("home") || true) {
    menuItems.push({
      tag: "NavItem",
      imgBlack: '/image/home-b.png',
      imgWhite: '/image/home-w.png',
      alt: "หน้าหลัก",
      altEng: "",
      to: "/",
    });
  }
  if (_checkPermission("member") || true) {
    menuItems.push({
      tag: "NavItem",
      imgBlack: '/image/add-friend-b.png',
      imgWhite: '/image/add-friend-w.png',
      altEng: "member",
      alt: "เพิ่มสมาชิค",
      to: "/member",
    });
  } if (_checkPermission("borrow") || true) {
    menuItems.push({
      tag: "NavItem",
      imgBlack: '/image/return-book-b.png',
      imgWhite: '/image/return-book-w.png',
      altEng: "borrow",
      alt: "ยืม-คืน",
      to: "/borrow",
    });
  } if (_checkPermission("borrow-list") || true) {
    menuItems.push({
      tag: "NavItem",
      imgBlack: '/image/list-b.png',
      imgWhite: '/image/list-w.png',
      altEng: "borrow-list",
      alt: "รายการยืม-คืน",
      to: "/borrow-list",
    });
  } if (_checkPermission("e-learning") || true) {
    menuItems.push({
      tag: "NavItem",
      imgBlack: '/image/open-book2-b.png',
      imgWhite: '/image/open-book2-w.png',
      altEng: "e-learning",
      alt: "เพิ่มสื่อผู้สอน",
      to: "/e-learning",
    });
  } if (_checkPermission("user") || true) {
    menuItems.push({
      tag: "NavItem",
      imgBlack: '/image/user-normal-b.png',
      imgWhite: '/image/user-normal-w.png',
      altEng: "user",
      alt: "ผู้ใช้งาน",
      to: "/user",
    });
  }
  return menuItems;
};

export default accessMenu;