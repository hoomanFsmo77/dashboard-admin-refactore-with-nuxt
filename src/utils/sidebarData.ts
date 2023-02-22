
const sidebarMainData=[
    {
        id:1,
        title:'Dashboards',
        icon:'bi bi-house-door',
        isOpen:true,
        hasSub:true,
        subMenuList:[
            {title:'default',to:{name:'Dashboards-default'},isSelected:true},
            {title:'Cms',to:{name:'Dashboards-Cms'}},
            {title:'E-commerce',to:{name:'Dashboards-ECommerce'}},
            {title:'Projects',to:{name:'Dashboards-projects'}},
            {title:'Charts',to:{name:'Dashboards-charts'}},
        ]
    },
    {
        id:2,
        title:'CMS',
        icon:'bi bi-book',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Posts',to:{name:'CMS-Posts'}},
            {title:'Add new post',to:{name:'CMS-newPost'}},
            {title:'Categories',to:{name:'CMS-Categories'}},
            {title:'Media Library',to:{name:'CMS-Medialibrary'}},
        ]
    },
    {
        id:3,
        title:'Widgets',
        icon:'bi bi-diagram-3',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Stats',to:{name:'Widgets-Stats'}},
            {title:'Data',to:{name:'Widgets-Data'}},
        ]
    },
    {
        id:4,
        title:'Ecommerce',
        icon:'bi bi-shop-window',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Products',to:{name:'Ecommerce-Products'}},
            {title:'Products_New',to:{name:'Ecommerce-Products_New'}},
            {title:'Orders',to:{name:'Ecommerce-Orders'}},
            {title:'Order_details',to:{name:'Ecommerce-Order_details'}},
            {title:'Customers',to:{name:'Ecommerce-Customers'}},
        ]
    },
    {
        id:5,
        title:'Pages',
        icon:'bi bi-stack',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Profile',to:{name:'Pages-Profile'}},
            {title:'Pricing table',to:{name:'Pages-PricingTable'}},
            {title:'Contacts',to:{name:'Pages-Contacts'}},
            {title:'Invoice',to:{name:'Pages-Invoice'}},
            {title:'knowledge base',to:{name:'Pages-knowledgeBase'},isNew:true},
            {title:'knowledge base-Topic',to:{name:'Pages-knowledgeBase_Topic'},isNew:true},
        ]
    },
    {

        id:6,
        title:'User',
        icon:'bi bi-person-square',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Login page',to:{name:'User-LoginPage'}},
            {title:'Register',to:{name:'User-Register'}},
            {title:'Login v.2',to:{name:'User-Login2'},isNew:true},
            {title:'Register v.2',to:{name:'User-Register2'},isNew:true},
        ]
    },
    {
        id:7,
        title:'Components',
        icon:'bi bi-puzzle',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Cards',to:{name:'Components-Cards'}},
            {title:'Calender',to:{name:'Components-Calender'}},
            {title:'Gallery',to:{name:'Components-Gallery'}},
            {title:'Loading buttons',to:{name:'Components-LoadingButtons'}},
            {title:'Maps',to:{name:'Components-Maps'}},
            {title:'Notifications',to:{name:'Components-Notifications'}},
            {title:'Preloaders',to:{name:'Components-Preloaders'}},
        ]
    },
    {
        id:8,
        title:'Charts',
        icon:'bi bi-pie-chart',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Charts',to:{name:'Charts-Chart'}},
            {title:'speedometer + Sparkline',to:{name:'Charts-charts_speedometer_sparkline'}},
        ]
    },
    {
        id:9,
        title:'Forms',
        icon:'bi bi-ui-radios',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Basic forms',to:{name:'Forms-Basic_forms'}},
            {title:'Advance forms',to:{name:'Forms-Advance_forms'}},
            {title:'File uploads',to:{name:'Forms-File_uploads'}},
            {title:'Text editor',to:{name:'Forms-Text_editor'}},
            {title:'Validation',to:{name:'Forms-Validation'}},
        ]
    },
    {
        id:10,
        title:'Tables',
        icon:'bi bi-table',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'Tailwind tables',to:{name:'Tables-Tailwind_tables'}},
            {title:'Datatable',to:{name:'Tables-Datatable'}},
        ]
    },
]
const sidebarDocsData=[
    {
        id:11,
        title:'Introduction',
        icon:'bi bi-code-slash',
        isOpen:false,
        hasSub:false,
        to:{name:'docs-Introduction'}
    },{
        id:12,
        title:'Directory structure',
        icon:'bi bi-compass',
        isOpen:false,
        hasSub:false,
        to:{name:'docs-Directory_structure'}
    },
    {
        id:13,
        title:'Css',
        icon:'bi bi-pen-fill',
        isOpen:false,
        hasSub:true,
        subMenuList:[
            {title:'CSS components',to:{name:'docs-CSS_components'}},
            {title:'Customizing CSS',to:{name:'docs-Customizing_CSS'}},
        ]
    },
    {
        id:14,
        title:'Credits',
        icon:'bi bi-bricks',
        isOpen:false,
        hasSub:false,
        to:{name:'docs-Credits'}
    }


]


export {sidebarDocsData,sidebarMainData}