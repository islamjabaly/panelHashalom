import image from "../assest/images/images";

const materials=[
    {
        name:'ברזל',
        data:[
            {
                    name:'פרופילים',
                    price:'80₪ למטר',
                    img:image.profilicon()
            },
            {
                name:'דבל טי',
                price:'מחיר למטר 120₪',
                img:image.doubleTicon()
        },        {
            name:'רשת בניין',
            price:'מחיר ליחידה 90₪',
            img:image.resheticon()
    }, 
    {
        name:'מוט ברזל',
        price:'מחיר למטר 20₪',
        img:image.mooticon()
},      
        ]
    },
    {
        name:'צבע',
        data:[
            {
                    name:'צבע ברזל',
                    price:'250₪',
                    img:image.steelcoloricon()
            },
            {
                name:'צבע עץ',
                price:'150₪',
                img:image.woodcoloricon()
        },        {
            name:'צבע קיר',
            price:'90₪',
            img:image.wallcoloricon()
    }, 
    {
        name:'צבע תקרה',
        price:'100₪',
        img:image.roofcoloricon()
},      
        ]
        
    },
    {
        name:' ברגים',
        data:[
            {
                    name:'בורג לפנל גג',
                    price:'מחיר לקרטון 120₪',
                    img:image.porgGagicon()
            },
            {
                name:'בורג לפנל קיר',
                price:'90₪ מחיר לקרטון ',
                img:image.porgkericon()
        },        {
            name:'בורג פח לפח',
            price:'מחיר לקרטון 60₪',
            img:image.porgpahpahicon()
    }, 
    {
        name:'בורג גאמפו',
        price:'מחיר לקרטון 190₪',
        img:image.jampoicon()
},      
        ]    }, 
    {
        name:'פנל מבודד קיר לבן ',
        data:[
            {
                    name:'פנל קיר עובי 50 חלק',
                    price:'50₪',
                    img:image.panelwallhalakicon()
            },
            {
                name:'  פנל קיר עובי 100  חלק',
                price:'66₪',
                img:image.panelwall100halakicon()
        },        {
            name:'פנל קיר עובי 50 פסים',
            price:'50₪',
            img:image.panelwallpasemicon()
    }, 
    {
        name:'פנל קיר עובי 100 פסים',
        price:'67₪',
        img:image.panelwall100pasemicon()
},      
        ]    },
    {
        name:'פנל מבודד גג ',
        data:[
            {
                    name:'פנל גג עובי 50',
                    price:'55₪',
                    img:image.panelGagicon()
            },
            {
                name:'פח גלי ',
                price:'35₪',
                img:image.pahGaliicon()
        },        {
            name:'פנל גג עובי 100',
            price:'75₪',
            img:image.panelGag100icon()
    }, 
    {
        name:'פנל גג שטוח',
        price:'53 ₪',
        img:image.panelShatowahicon()
},      
        ]    },
    {
        name:'אבזרים פח',
        data:[
            {
                    name:'U',
                    price:'35₪',
                    img:image.Uicon()
            },
            {
                name:'U לבן ',
                price:'27₪',
                img:image.Ulavanicon()
        },  
            {
                name:'L 10*10',
                price:'28₪',
                img:image.zawya10icon()
        },        {
            name:'L 5*5',
            price:'25₪',
            img:image.zawya5icon()
    }, 
    {
        name:'מרזב',
        price:'40₪',
        img:image.mzrebicon()
},      
{
    name:'סוגר צד',
    price:'35₪',
    img:image.sogericon()
},      
        ]    },
    {
        name:'עץ',
        data:[
            {
                    name:'עץ לקיר',
                    price:'27₪',
                    img:image.woodwallicon()
            },
            {
                name:'עץ לפורגולות',
                price:'55₪',
                img:image.woodPorgolaicon()
        },        {
            name:'ברקית',
            price:'35₪',
            img:image.parketicon()
    }, 
    {
        name:'לוחות דיקט',
        price:'50₪',
        img:image.dikticon()
},      
        ]    },
    {
        name:' אנסטלציה',
        data:[
            {
                    name:'חיבורים',
                    price:'30₪',
                    img:image.heboricon()
            },
            {
                name:'צינורות',
                price:'45₪',
                img:image.tsinoricon()
        },        {
            name:'ברזים',
            price:'60₪',
            img:image.berezicon()
    }, 
    {
        name:'אבזרי מגולוון',
        price:'50₪',
        img:image.mgolbanicon()
},      
        ]    },
    {
        name:' גבס',
        data:[
            {
                    name:'לוחות גבס לקיר',
                    price:'50₪',
                    img:image.wallGebesicon()
            },
            {
                name:'גבס לתקרה',
                price:'40₪',
                img:image.roofgebesicon()
        },        {
            name:'מסילות גבס',
            price:'15₪',
            img:image.Ugebesicon()
    }, 
    {
        name:'זווית גבס',
        price:'25₪',
        img:image.Lgebesicon()
},      
        ]    }
    
    


]

export default materials
