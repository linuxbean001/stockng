import { MenuItem } from './menu.model';



export const BUMENU: MenuItem[] = [
    {
        id: 1,
        label: 'Menu',
        isTitle: true
    },
     {
        id: 2,
        label: 'Dashboard',
        icon: 'bx bx-home-circle',
        link: '/sa/dashboard',
    },{
        id: 3,
        label: 'Alerts',
        icon: 'bx bx-arrow-to-top',
        link: '/bu/alerts',
    },{
        id: 4,
        label: 'Cluster',
        icon: 'bx bx-planet',
        link: '/bu/cluster',
    },{
        id: 5,
        label: 'Reports',
        icon: 'bx bx-receipt',
        link: '/bu/reports',
    },{
        id: 6,
        label: 'Namespaces',
        icon: 'bx bx-baseball',
        link: '/bu/namespaces/list',
    },{
        id: 7,
        label: 'Change Quota',
        icon: 'bx bx-task',
        link: '/bu/changequota',
    },{
        id: 8,
        label: 'Container Registry',
        icon: 'bx bx-arrow-to-left',
        link: '/bu/containerregistry',
    },{
        id: 9,
        label: 'Persistent Volumes',
        icon: 'bx bx-badge',
        link: '/bu/persistent',
    },{
        id: 10,
        label: 'Users',
        icon: 'bx bx-user-circle',
        link: '/bu/users',
    },{
        id: 11,
        label: 'Workloads',
        icon: 'bx bx-sticker',
        link: '/bu/workloads',
    }
];




export const SAMENU: MenuItem[] = [
    {
        id: 1,
        label: 'Menu',
        isTitle: true
    },
     {
        id: 2,
        label: 'Dashboard',
        icon: 'bx bx-home-circle',
        link: '/sa/dashboard',
    },{
        id: 4,
        label: 'Cluster',
        icon: 'bx bxs-book-alt',
        link: '/sa/cluster',
    },{
        id: 3,
        label: 'Alerts',
        icon: 'bx bx-arrow-to-top',
        link: '/sa/alerts',
    },{
        id: 4,
        label: 'Clusters',
        icon: 'bx bx-planet',
        link: '/sa/clusterslist',
    },{
        id: 5,
        label: 'Namespaces',
        icon: 'bx bx-baseball',
        link: '/sa/namespaces/list',
    },{
        id: 6,
        label: 'Approvals',
        icon: 'bx bx-task',
        link: '/sa/approvals',
    },{
        id: 7,
        label: 'Container Registries',
        icon: 'bx bx-arrow-to-left',
        link: '/sa/containerregistries',
    },{
        id: 8,
        label: 'Organizations',
        icon: 'bx bx-badge',
        link: '/sa/organizations',
    },{
        id: 9,
        label: 'Users',
        icon: 'bx bx-user-circle',
        link: '/sa/users',
    }
];






export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'Menu',
        isTitle: true
    },
     {
        id: 2,
        label: 'Dashboards',
        icon: 'bx-home-circle',
        link: '/dashboard',
    },
      // {
        // id: 2,
        //  label: 'Dashboards',
        //  icon: 'bx-home-circle',
        //  badge: {
        //     variant: 'info',
        //      text: '03',
        // },
        //  subItems: [
         //   {
            //    id: 3,
             //   label: 'Default',
            //    link: '/dashboard',
            //    parentId: 2
           // },
            //{
             //   id: 4,
              //  label: 'Saas',
             //   link: '/dashboards/saas',
            //    parentId: 2
          //  },
            //{
             //   id: 5,
            //    label: 'Crypto',
             //   link: '/dashboards/crypto',
            //    parentId: 2
          //  },
       // ]
  //  },
  {
         id: 3,
          label: 'Cluster',
          icon: 'bx bx-planet',
         // badge: {
            // variant: 'info',
             // text: '03',
        // },
          subItems: [
            {
                id: 1,
                label: 'Namespaces',
                link: '/cluster/namespaces',
                parentId: 3
            },
            {
               id: 2,
                label: 'Nodes',
                link: '/cluster/nodes',
            parentId: 3
            },
            {
                id: 3,
                label: 'Persistent Volumes',
               link: '/cluster/persistent',
            parentId: 3
          },
          {
                id: 4,
                label: 'Roles',
               link: '/cluster/roles',
            parentId: 3
          },
          {
                id: 5,
                label: 'Storage Classes',
               link: '/cluster/storageclasses',
            parentId: 3
          },
        ]
    },{
         id: 4,
          label: 'Workloads',
          icon: 'bx bx-sticker',
         // badge: {
            // variant: 'info',
             // text: '03',
        // },
          subItems: [
            {
                id: 1,
                label: 'Deployments',
                link: '/workloads/developments',
                parentId: 4
            },
            {
               id: 2,
                label: 'Replica Sets',
                link: '/workloads/replica',
            parentId: 4
            },
            {
                id: 3,
                label: 'Replication Controllers',
               link: '/workloads/replication',
            parentId: 2
          },
          {
                id: 4,
                label: 'Daemon Sets',
               link: '/workloads/daemonsets',
            parentId: 4
          },
          {
                id: 5,
                label: 'Pet Sets',
               link: '/',
            parentId: 4
          },{
                id: 6,
                label: 'Jobs',
               link: '/workloads/jobs',
            parentId: 4
          },{
                id: 7,
                label: 'Pods',
               link: '/workloads/pods',
            parentId: 4
          },

        ]
    },
     {
         id: 5,
          label: 'Discovery Balancing',
          icon: 'bx bx-arrow-to-top',
         // badge: {
            // variant: 'info',
             // text: '03',
        // },
          subItems: [
            {
                id: 1,
                label: 'Ingresses',
                link: '/discovery/ingresses',
                parentId: 5
            },
            {
               id: 2,
                label: 'Services',
                link: '/discovery/services',
            parentId: 5
            }
        ]
    },{
         id: 5,
          label: 'Config and Storage',
          icon: 'bx bx-badge',
         // badge: {
            // variant: 'info',
             // text: '03',
        // },
          subItems: [
            {
                id: 1,
                label: 'Config Maps',
                link: '/config/configmaps',
                parentId: 5
            },
            {
               id: 2,
                label: 'PersistentVolumeClaims',
                link: '/config/persistentvalume',
            parentId: 5
            },
            {
               id: 2,
                label: 'Secrets',
                link: '/config/secrets',
            parentId: 5
            }
        ]
    },{
         id: 5,
          label: 'Compute',
          icon: 'bx bx-message-rounded-detail',
         // badge: {
            // variant: 'info',
             // text: '03',
        // },
          subItems: [
            {
                id: 1,
                label: 'List Of Clusters',
                link: '/',
                parentId: 5
            },
            {
               id: 2,
                label: 'List Of PRODS',
                link: '/',
            parentId: 5
            },
            {
                id: 3,
                label: 'Deployed PRODS',
               link: '/',
            parentId: 5
          },
        ]
    },
    {
        id: 6,
        label: 'Storage',
        icon: 'bx bx-blanket',
        link: '/',
    },
     {
         id: 7,
          label: 'Approvals',
          icon: 'bx bx-baseball',
         // badge: {
            // variant: 'info',
             // text: '03',
        // },
          subItems: [
            {
                id: 3,
                label: 'Creating',
                link: '/',
                parentId: 7
            },
            {
               id: 4,
                label: 'Placing',
                link: '/',
            parentId: 7
            },
            {
                id: 5,
                label: 'Pending Request Statu',
               link: '/',
            parentId: 7
          },
          {
                id: 6,
                label: 'New User creation',
               link: '/',
            parentId: 7
          },
        ]
    },
     {
         id: 8,
          label: 'Adimistration',
          icon: 'bx bx-cookie',
         // badge: {
            // variant: 'info',
             // text: '03',
        // },
          subItems: [
            {
                id: 1,
                label: 'User Management',
                link: '/',
                parentId: 8
            },
            {
               id: 2,
                label: 'Creating User',
                link: '/',
            parentId: 8
            },
            {
                id: 3,
                label: 'Assign Role To User',
               link: '/',
            parentId: 8
          },
          {
                id: 4,
                label: 'Users',
               link: '/',
               parentId: 8
          },
          
        ]
    },
    {
        id: 9,
        label: 'Service Interaction',
        icon: 'bx bx-bone',
        link: '/',
    },
     {
        id: 14,
        label: 'Activity Log',
        icon: 'bx bx-arrow-to-left',
        link: '/',
    },
    {
         id: 10,
          label: 'Saas Module',
          icon: 'bx bx-cloud-rain',
         // badge: {
            // variant: 'info',
             // text: '03',
        // },
          subItems: [
            {
                id: 1,
                label: 'Logs',
                link: '/',
                parentId: 10
            },
            {
               id: 2,
                label: 'Admimnistrative Work',
                link: '/',
                parentId: 10
            },
        ]
    },
    {
        id: 11,
        label: 'OptionToRolloutUpgrades',
        icon: 'bx bx-carousel',
        link: '/',
    },
    //{
        // id: 12,
         // label: 'Image repositories',
         // icon: 'bx bx-photo-album',
         // badge: {
            // variant: 'info',
             // text: '03',
        // },
         // subItems: [
          //  {
              //  id: 1,
            //    label: 'Container registry',
              //  link: '/',
              //  parentId: 12
           // }
       // ]
   // },
    {
         id: 12,
          label: 'Alerts',
          icon: 'bx bx-arrow-to-top',
         // badge: {
            // variant: 'info',
             // text: '03',
        // },
          subItems: [
            {
                id: 1,
                label: 'Security Breach',
                link: '/',
                parentId: 12
            },{
                id: 2,
                label: 'low memory',
                link: '/',
                parentId: 12
            }
        ]
    },{
         id: 13,
          label: 'Networking',
          icon: 'bx bx-arrow-from-right',
         // badge: {
            // variant: 'info',
             // text: '03',
        // },
          subItems: [
            {
                id: 1,
                label: 'Security Rules Associated',
                link: '/',
                parentId: 13
            },{
                id: 2,
                label: 'Firewall Rule Visualization',
                link: '/',
                parentId: 13
            }
        ]
    },
    {
        id: 14,
        label: 'Container Registry',
        icon: 'bx bx-arrow-to-left',
        link: '/containerregistry',
    },     
    {
        id: 6,
        isLayout: true
    },
    {
        id: 7,
        label: 'Apps',
        isTitle: true
    },
    {
        id: 8,
        label: 'Calendar',
        icon: 'bx-calendar',
        link: '/calendar',
    },
    {
        id: 9,
        label: 'Chat',
        icon: 'bx-chat',
        link: '/chat',
        badge: {
            variant: 'success',
            text: 'New',
        },
    },
    {
        id: 10,
        label: 'Ecommerce',
        icon: 'bx-store',
        subItems: [
            {
                id: 11,
                label: 'Products',
                link: '/ecommerce/products',
                parentId: 10
            },
            {
                id: 12,
                label: 'Product Detail',
                link: '/ecommerce/product-detail',
                parentId: 10
            },
            {
                id: 13,
                label: 'Orders',
                link: '/ecommerce/orders',
                parentId: 10
            },
            {
                id: 14,
                label: 'Customers',
                link: '/ecommerce/customers',
                parentId: 10
            },
            {
                id: 15,
                label: 'Cart',
                link: '/ecommerce/cart',
                parentId: 10
            },
            {
                id: 16,
                label: 'Checkout',
                link: '/ecommerce/checkout',
                parentId: 10
            },
            {
                id: 17,
                label: 'Shops',
                link: '/ecommerce/shops',
                parentId: 10
            },
            {
                id: 18,
                label: 'Add Product',
                link: '/ecommerce/add-product',
                parentId: 10
            },
        ]
    },
    {
        id: 19,
        label: 'Crypto',
        icon: 'bx-bitcoin',
        subItems: [
            {
                id: 20,
                label: 'Wallet',
                link: '/crypto/wallet',
                parentId: 19
            },
            {
                id: 21,
                label: 'Buy/Sell',
                link: '/crypto/buy-sell',
                parentId: 19
            },
            {
                id: 22,
                label: 'Exchange',
                link: '/crypto/exchange',
                parentId: 19
            },
            {
                id: 23,
                label: 'Lending',
                link: '/crypto/lending',
                parentId: 19
            },
            {
                id: 24,
                label: 'Orders',
                link: '/crypto/orders',
                parentId: 19
            },
            {
                id: 25,
                label: 'KYC Application',
                link: '/crypto/kyc-application',
                parentId: 19
            },
            {
                id: 26,
                label: 'ICO Landing',
                link: '/crypto-ico-landing',
                parentId: 19
            }
        ]
    },
    {
        id: 27,
        label: 'Email',
        icon: 'bx-envelope',
        subItems: [
            {
                id: 28,
                label: 'Inbox',
                link: '/email/inbox',
                parentId: 27
            },
            {
                id: 29,
                label: 'Read Email',
                link: '/email/read',
                parentId: 27
            }
        ]
    },
    {
        id: 30,
        label: 'Invoices',
        icon: 'bx-receipt',
        subItems: [
            {
                id: 31,
                label: 'Invoice List',
                link: '/invoices/list',
                parentId: 30
            },
            {
                id: 32,
                label: 'Invoice Detail',
                link: '/invoices/detail',
                parentId: 30
            },
        ]
    },
    {
        id: 33,
        label: 'Projects',
        icon: 'bx-briefcase-alt-2',
        subItems: [
            {
                id: 34,
                label: 'Projects Grid',
                link: '/projects/grid',
                parentId: 33
            },
            {
                id: 35,
                label: 'Projects List',
                link: '/projects/list',
                parentId: 33
            },
            {
                id: 36,
                label: 'Project Overview',
                link: '/projects/overview',
                parentId: 33
            },
            {
                id: 37,
                label: 'Create New',
                link: '/projects/create',
                parentId: 33
            }
        ]
    },
    {
        id: 38,
        label: 'Tasks',
        icon: 'bx-task',
        subItems: [
            {
                id: 39,
                label: 'Task List',
                link: '/tasks/list',
                parentId: 38
            },
            {
                id: 40,
                label: 'Kanban Board',
                link: '/tasks/kanban',
                parentId: 38
            },
            {
                id: 41,
                label: 'Create Task',
                link: '/tasks/create',
                parentId: 38
            }
        ]
    },
    {
        id: 42,
        label: 'Contacts',
        icon: 'bxs-user-detail',
        subItems: [
            {
                id: 43,
                label: 'User Grid',
                link: '/contacts/grid',
                parentId: 42
            },
            {
                id: 44,
                label: 'User List',
                link: '/contacts/list',
                parentId: 42
            },
            {
                id: 45,
                label: 'Profile',
                link: '/contacts/profile',
                parentId: 42
            }
        ]
    },
    {
        id: 46,
        label: 'Pages',
        isTitle: true
    },
    {
        id: 47,
        label: 'Authentication',
        icon: 'bx-user-circle',
        subItems: [
            {
                id: 48,
                label: 'Login',
                link: '/pages/login-1',
                parentId: 47
            },
            {
                id: 49,
                label: 'Register',
                link: '/pages/register-1',
                parentId: 47
            },
            {
                id: 50,
                label: 'Recover Password',
                link: '/pages/recoverpwd-1',
                parentId: 47
            },
            {
                id: 51,
                label: 'Lock Screen',
                link: '/pages/lock-screen-1',
                parentId: 47
            }
        ]
    },
    {
        id: 52,
        label: 'Utility',
        icon: 'bx-file',
        subItems: [
            {
                id: 53,
                label: 'Starter Page',
                link: '/pages/starter',
                parentId: 52
            },
            {
                id: 54,
                label: 'Maintenance',
                link: '/pages/maintenance',
                parentId: 52
            },
            {
                id: 55,
                label: 'Timeline',
                link: '/pages/timeline',
                parentId: 52
            },
            {
                id: 56,
                label: 'FAQs',
                link: '/pages/faqs',
                parentId: 52
            },
            {
                id: 57,
                label: 'Pricing',
                link: '/pages/pricing',
                parentId: 52
            },
            {
                id: 58,
                label: 'Error 404',
                link: '/pages/404',
                parentId: 52
            },
            {
                id: 59,
                label: 'Error 500',
                link: '/pages/500',
                parentId: 52
            },
        ]
    },
    {
        id: 60,
        label: 'Components',
        isTitle: true
    },
    {
        id: 61,
        label: 'UI Elements',
        icon: 'bx-tone',
        subItems: [
            {
                id: 62,
                label: 'Alerts',
                link: '/ui/alerts',
                parentId: 61
            },
            {
                id: 63,
                label: 'Buttons',
                link: '/ui/buttons',
                parentId: 61
            },
            {
                id: 64,
                label: 'Cards',
                link: '/ui/cards',
                parentId: 61
            },
            {
                id: 65,
                label: 'Carousel',
                link: '/ui/carousel',
                parentId: 61
            },
            {
                id: 66,
                label: 'Dropdowns',
                link: '/ui/dropdowns',
                parentId: 61
            },
            {
                id: 67,
                label: 'Grid',
                link: '/ui/grid',
                parentId: 61
            },
            {
                id: 68,
                label: 'Images',
                link: '/ui/images',
                parentId: 61
            },
            {
                id: 69,
                label: 'Modals',
                link: '/ui/modals',
                parentId: 61
            },
            {
                id: 70,
                label: 'Range Slider',
                link: '/ui/rangeslider',
                parentId: 61
            },
            {
                id: 71,
                label: 'Progress Bars',
                link: '/ui/progressbar',
                parentId: 61
            },
            {
                id: 72,
                label: 'Sweet-Alert',
                link: '/ui/sweet-alert',
                parentId: 61
            },
            {
                id: 73,
                label: 'Tabs & Accordions',
                link: '/ui/tabs-accordions',
                parentId: 61
            },
            {
                id: 74,
                label: 'Typography',
                link: '/ui/typography',
                parentId: 61
            },
            {
                id: 75,
                label: 'Video',
                link: '/ui/video',
                parentId: 61
            },
            {
                id: 76,
                label: 'General',
                link: '/ui/general',
                parentId: 61
            },
            {
                id: 77,
                label: 'Colors',
                link: '/ui/colors',
                parentId: 61
            },
            {
                id: 78,
                label: 'Image Cropper',
                link: '/ui/image-crop',
                parentId: 61
            },
        ]
    },
    {
        id: 79,
        label: 'Forms',
        icon: 'bxs-eraser',
        subItems: [
            {
                id: 80,
                label: 'Form Elements',
                link: '/form/elements',
                parentId: 79
            },
            {
                id: 81,
                label: 'Form Validation',
                link: '/form/validation',
                parentId: 79
            },
            {
                id: 82,
                label: 'Form Advanced',
                link: '/form/advanced',
                parentId: 79
            },
            {
                id: 83,
                label: 'Form Editors',
                link: '/form/editor',
                parentId: 79
            },
            {
                id: 84,
                label: 'Form File Upload',
                link: '/form/uploads',
                parentId: 79
            },
            {
                id: 85,
                label: 'Form Repeater',
                link: '/form/repeater',
                parentId: 79
            },
            {
                id: 86,
                label: 'Form Wizard',
                link: '/form/wizard',
                parentId: 79
            },
            {
                id: 87,
                label: 'Form Mask',
                link: '/form/mask',
                parentId: 79
            }
        ]
    },
    {
        id: 88,
        icon: 'bx-list-ul',
        label: 'Tables',
        subItems: [
            {
                id: 89,
                label: 'Basic Tables',
                link: '/tables/basic',
                parentId: 88
            },
            {
                id: 90,
                label: 'Advanced Table',
                link: '/tables/advanced',
                parentId: 88
            }
        ]
    },
    {
        id: 91,
        icon: 'bxs-bar-chart-alt-2',
        label: 'Charts',
        subItems: [
            {
                id: 92,
                label: 'Apex charts',
                link: '/charts/apex',
                parentId: 91
            },
            {
                id: 93,
                label: 'Chartjs Chart',
                link: '/charts/chartjs',
                parentId: 91
            },
            {
                id: 94,
                label: 'Chartist Chart',
                link: '/charts/chartist',
                parentId: 91
            },
            {
                id: 95,
                label: 'E - Chart',
                link: '/charts/echart',
                parentId: 91
            }
        ]
    },
    {
        id: 96,
        label: 'Icons',
        icon: 'bx-aperture',
        subItems: [
            {
                id: 97,
                label: 'Boxicons',
                link: '/icons/boxicons',
                parentId: 96
            },
            {
                id: 98,
                label: 'Material Design',
                link: '/icons/materialdesign',
                parentId: 96
            },
            {
                id: 99,
                label: 'Dripicons',
                link: '/icons/dripicons',
                parentId: 96
            },
            {
                id: 100,
                label: 'Font awesome',
                link: '/icons/fontawesome',
                parentId: 96
            },
        ]
    },
    {
        id: 101,
        label: 'Maps',
        icon: 'bx-map',
        subItems: [
            {
                id: 102,
                label: 'Google Maps',
                link: '/maps/google',
                parentId: 101
            }
        ]
    }
];

