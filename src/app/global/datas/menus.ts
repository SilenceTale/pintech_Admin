export const menus = {
  member: [
    { code: 'list', name: '회원관리', url: '/member/list' },
    { code: 'configList', name: '회원 목록', url: '/memer/config/list' },
  ],
  board: [
    { code: 'configList', name: '게시판 목록', url: '/board/config/list' },
    { code: 'configWrite', name: '게시판 등록', url: '/board/config/write' },
    { code: 'list', name: '게시글 관리', url: '/board/list' },
  ],
}

export default function getMenus(menuCode) {
  return menus[menuCode] ?? []
}
