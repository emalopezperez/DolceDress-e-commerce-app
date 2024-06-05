import { Collection } from '../../../../models/Collection';
export interface PropsMenuItems {
  menuItems: Menu[];
  categories:Collection[];
  currentPath?: string;
  openSideMenu?: () => void;
}

export interface PropsMenuMobil {
  menuItems: Menu[];
  categories: Collection[];
  currentPath?: string;
  openMenuMobil?: boolean;
  setOpenMenuMobil: (values: boolean) => void;
}

export interface Menu {
  id: number;
  path: string;
  title: string;
  subMenu?: boolean;
}

