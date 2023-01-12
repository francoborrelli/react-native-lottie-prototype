import React, { FC } from 'react';
import { Icon, IconElement } from '@ui-kitten/components';

export const BackIcon: FC = (props): IconElement => <Icon {...props} name='arrow-back' />;

export const LayoutIcon: FC = (props): IconElement => <Icon {...props} name='layout-outline' />;

export const PersonIcon: FC = (props): IconElement => <Icon {...props} name='person-outline' />;

export const MoreVerticalIcon: FC = (props): IconElement => (
  <Icon {...props} name='more-vertical' />
);

export const LogoutIcon: FC = (props): IconElement => <Icon {...props} name='log-out-outline' />;

export const InfoIcon: FC = (props): IconElement => <Icon {...props} name='info-outline' />;

export const AlertTriangleIcon: FC = (props): IconElement => (
  <Icon {...props} name='alert-triangle-outline' />
);

export const EyeIcon: FC = (props): IconElement => <Icon {...props} name='eye-outline' />;

export const EyeOffIcon: FC = (props): IconElement => <Icon {...props} name='eye-off-outline' />;

export const MenuIcon: FC = (props): IconElement => <Icon {...props} name='menu-outline' />;

export const HomeIcon: FC = (props): IconElement => <Icon {...props} name='home-outline' />;

export const DoneAllIcon: FC = (props): IconElement => <Icon {...props} name='done-all-outline' />;

export const GridIcon: FC = (props): IconElement => <Icon {...props} name='grid-outline' />;

export const SearchIcon: FC = (props): IconElement => <Icon {...props} name='search-outline' />;
