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

export const TicketButtonData = [{
  className : "fa-solid fa-reply",
  value : "Reply"
},
{
  className : "fa-solid fa-sticky-note",
  value : "Add Note"
},{
  className : "fa-solid fa-mail-forward",
  value : "Forward"
},{
  className : "fa-solid fa-times-circle",
  value : "Close"
},{
  className : "fa-solid fa-code-merge",
  value : "Merge"
},{
  className : "fa-solid fa-trash",
  value : "Delete"
}
]