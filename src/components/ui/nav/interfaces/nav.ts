export interface PropsMenuItems {
  menuItems: Menu[];
  categoryProducts: SubMenu[];
  currentPath?: string;
  openSideMenu?: () => void;
}

export interface PropsMenuMobil {
  menuItems: Menu[];
  categoryProducts: SubMenu[];
  currentPath?: string;
  openMenuMobil?: boolean;
  setOpenMenuMobil: (values: boolean) => void
}

export interface Menu {
  id: number;
  path: string;
  title: string;
  subMenu?: boolean;
}

export interface SubMenu {
  id: number;
  path: string;
  title: string;
}
