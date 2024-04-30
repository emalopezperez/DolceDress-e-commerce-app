export interface PropsMenuItems {
  menuItems: Menu[];
  currentPath?: string;
  color?: boolean;
  openSideMenu?: () => void;
}

interface Menu {
  path: string;
  title: string;
}
