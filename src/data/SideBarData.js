export const SideBarData = [
    {
      path: '/', /* path is used as id to check which NavItem is active basically */
      name: 'Home',
      css: 'fa fa-fw fa-home',
      key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
    },
    {
      path: '/about',
      name: 'About',
      css: 'fa-solid fa-ticket',
      key: 2
    },
    {
      path: '/NoMatch',
      name: 'NoMatch',
      css: 'fa fa-contact-book',
      key: 3
    },
    {
        path: '/NoMatchFan',
        name: 'NoMatchFan',
        css: 'fa fa-fan',
        key: 4
      },
      {
        path: '/sms',
        name: 'Sms',
        css: 'fa fa-sms',
        key: 5
      },
      {
        path: '/Graph',
        name: 'Graph',
        css: 'fa fa-bar-chart',
        key: 6
      },
  ]

