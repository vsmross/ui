import { navbarData } from 'src/app/Models/navbarSide';
import { Query } from '@angular/core';

export const navbarItem: navbarData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'fa fa-tachometer',
    badge: {
      class: 'bg-info',
      text: 'NEW'
    }
  },
  {
    name: 'Hotel',
    url: '/hotel',
    icon: 'fa fa-th-large',
    children: [
      {
        name: 'Add New Hotel',
        url: '/hotel/addNewHotel',
        badge: {
          class: 'bg-danger',
          text: 'New'
        }
      }
    ]
  },
  {
    title : true,
    name: 'Theme Color',
  },
  {
    name: 'Colors',
    url: '/theme/color',
    icon: 'fa fa-eyedropper',
  },
  {
    title : true,
    name: 'Tools',
  },
  {
    name: 'Signin',
    url: '/signin',
    icon: 'fa fa-lock'
  },
  {
    name: 'Signup',
    url: '/signup',
    icon: 'fa fa-lock'
  }
];
