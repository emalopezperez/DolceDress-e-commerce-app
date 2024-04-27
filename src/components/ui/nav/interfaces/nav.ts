export interface PropsMenuItems {
  menuItems: Menu[];
  currentPath?: string;
  color?: boolean;
}

interface Menu {
  path: string;
  title: string;
}
