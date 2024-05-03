export interface PropsMenuItems {
  menuItems: Menu[];
  subMenuCategorys: SubMenu[];
  currentPath?: string;
  color?: boolean;
  openSideMenu?: () => void;
}

interface Menu {
  id: number;
  path: string;
  title: string;
  subMenu?: boolean;
}

export interface SubMenu {
  id: number;
  path: string;
  title: string;
  subMenu?: boolean;
}
