// Mock data for Buller Deli

export const translations = {
    he: {
        // Navigation
        home: 'בית',
        menu: 'תפריט',
        about: 'אודות',
        gallery: 'גלריה',
        contact: 'צור קשר',

        // Hero Section
        heroTitle: 'בּולֶר דֶלי',
        heroSubtitle: 'טעמים אמיתיים, מנות טריות, אווירה חמה',
        heroDescription:
            "דלי וסנדוויצ'ים בלב יוקנעם. מגישים כל יום מנות טריות עם אהבה",
        orderNow: 'הזמינו עכשיו',
        viewMenu: 'לתפריט המלא',

        // Menu Section
        ourMenu: 'התפריט שלנו',
        menuSubtitle: 'מנות טריות שנעשות בכל יום באהבה',
        menuDescription:
            'כל הכריכים והמנות שלנו מוכנים טריים מדי יום עם מרכיבים איכותיים ותשומת לב לכל פרט',

        // About Section
        aboutUs: 'אודותינו',
        aboutTitle: 'סיפור של טעם ואהבה',
        aboutText1:
            "בולר דלי הוא לא סתם דלי - זה מקום שבו כל סנדוויץ' מוכן עם אהבה, כל מרכיב נבחר בקפידה, וכל לקוח מקבל יחס אישי.",
        aboutText2:
            'אנחנו מאמינים שאוכל טוב מתחיל ממרכיבים איכותיים, עבודת יד, ותשוקה אמיתית למה שאנחנו עושים. בואו לטעום את ההבדל.',
        freshIngredients: 'מרכיבים טריים',
        freshIngredientsDesc: 'רק הטוב ביותר בכל יום',
        madeWithLove: 'נעשה באהבה',
        madeWithLoveDesc: 'כל מנה מוכנה בקפידה',
        localBusiness: 'עסק מקומי',
        localBusinessDesc: 'גאים להיות חלק מקהילת יוקנעם',

        // Gallery Section
        ourGallery: 'הגלריה שלנו',
        gallerySubtitle: 'טעים לעיניים ולבטן',

        // Contact Section
        getInTouch: 'צרו קשר',
        contactSubtitle: 'נשמח לראות אתכם',
        visitUs: 'בואו לבקר',
        address: 'הגיא 8, יקנעם, העמקים',
        openingHours: 'שעות פתיחה',
        weekdays: "ימים א'-ה': 10:00 - 22:00",
        weekends: "ימי ו' ושבת: 09:00 - 23:00",
        followUs: 'עקבו אחרינו',
        orderDelivery: 'הזמינו משלוח',
        available10bis: 'זמינים ב-10bis',

        // Footer
        footerText: 'בולר דלי - טעמים אמיתיים מיוקנעם',
        footerRights: 'כל הזכויות שמורות',

        // Menu categories
        salty: 'מלוחים',
        dips: 'מטבלים Home Made (250 גר׳)',
        sweets: 'מתוקים',
        vegan: 'טבעוני',
    },
    en: {
        // Navigation
        home: 'Home',
        menu: 'Menu',
        about: 'About',
        gallery: 'Gallery',
        contact: 'Contact',

        // Hero Section
        heroTitle: 'Buller Deli',
        heroSubtitle: 'Real Flavors, Fresh Plates, Warm Vibes',
        heroDescription:
            'A deli & sandwich spot in the heart of Yokneam. Serving fresh, delicious meals made with love every day',
        orderNow: 'Order Now',
        viewMenu: 'View Full Menu',

        // Menu Section
        ourMenu: 'Our Menu',
        menuSubtitle: 'Fresh dishes made with love every day',
        menuDescription:
            'All our sandwiches and dishes are prepared fresh daily with quality ingredients and attention to every detail',

        // About Section
        aboutUs: 'About Us',
        aboutTitle: 'A Story of Taste & Love',
        aboutText1:
            "Buller Deli is not just another deli - it's a place where every sandwich is made with love, every ingredient is carefully selected, and every customer gets personal attention.",
        aboutText2:
            'We believe that good food starts with quality ingredients, handcrafted preparation, and genuine passion for what we do. Come taste the difference.',
        freshIngredients: 'Fresh Ingredients',
        freshIngredientsDesc: 'Only the best, daily',
        madeWithLove: 'Made with Love',
        madeWithLoveDesc: 'Every dish crafted carefully',
        localBusiness: 'Local Business',
        localBusinessDesc: 'Proud to be part of Yokneam community',

        // Gallery Section
        ourGallery: 'Our Gallery',
        gallerySubtitle: 'A feast for the eyes and stomach',

        // Contact Section
        getInTouch: 'Get in Touch',
        contactSubtitle: "We'd love to see you",
        visitUs: 'Visit Us',
        address: 'הגיא 8, יקנעם, העמקים',
        openingHours: 'Opening Hours',
        weekdays: 'Sun-Thu: 10:00 AM - 10:00 PM',
        weekends: 'Fri-Sat: 09:00 AM - 11:00 PM',
        followUs: 'Follow Us',
        orderDelivery: 'Order Delivery',
        available10bis: 'Available on 10bis',

        // Footer
        footerText: 'Buller Deli - Real Flavors from Yokneam',
        footerRights: 'All rights reserved',

        // Menu categories
        salty: 'Savory',
        dips: 'Home Made Dips',
        sweets: 'Sweets',
        vegan: 'Vegan',
    },
};

export const menuItems = {
    salty: [
        {
            id: 1,
            name: {
                he: '12 כריכי ביס (סלט ביצים/טונה/סלמון)',
                en: '12 Roll Sandwiches (Egg salad/Tuna/Salmon)',
            },
            description: {
                he: 'סט של 12 כריכים קטנים - בחר מסלט ביצים, טונה, או סלמון',
                en: 'A set of 12 mini rolls - choose from egg salad, tuna, or salmon',
            },
            price: '144₪',
            isVegan: false,
        },
        {
            id: 2,
            name: { he: 'מגש ירקות עונתיים', en: 'Seasonal Vegetable Platter' },
            description: {
                he: 'מגש עשיר עם ירקות טריים עונתיים - עגבניות, מלפפון, גזר וחסה',
                en: 'Generous platter with fresh seasonal vegetables - tomatoes, cucumbers, carrots and lettuce',
            },
            price: '128₪',
            isVegan: true,
        },
        {
            id: 3,
            name: { he: 'סלט אישי', en: 'Personal Salad' },
            description: {
                he: 'סלט טרי בפרט - ירקות שונות לבחירתך עם רוטב בתוספת חינם',
                en: 'Fresh custom salad - choose your vegetables with complimentary dressing',
            },
            price: '42₪',
            isVegan: true,
        },
        {
            id: 4,
            name: { he: 'כיכר לחם מחמצת', en: 'Sourdough Bread' },
            description: {
                he: 'לחם מחמצת טרי וטעים - אידיאלי כצד או להכנת כריכים ביתיים',
                en: 'Fresh and delicious sourdough bread - perfect as a side or for homemade sandwiches',
            },
            price: '24₪',
            isVegan: true,
        },
        {
            id: 5,
            name: { he: 'קרקרים גרעינים', en: 'Seed Crackers' },
            description: {
                he: 'קרקרים פריכים עשירים בגרעינים - בריאי וטעימים',
                en: 'Crispy crackers rich with seeds - healthy and delicious',
            },
            price: '26₪',
            isVegan: true,
        },
    ],
    dips: [
        {
            id: 6,
            name: { he: 'צזיקי', en: 'Tzaziki' },
            description: {
                he: 'תערובת יוגורט עם מלפפון וצמחי תבלין - קר וטרוף',
                en: 'Yogurt blend with cucumber and fresh herbs - cool and refreshing',
            },
            price: '21₪',
            isVegan: false,
        },
        {
            id: 7,
            name: { he: 'מטבוחה', en: 'Matbucha' },
            description: {
                he: 'תערובת עגבניות ופלפלים מטוגנים - קלאסי מרוקאי',
                en: 'Roasted tomato and pepper blend - Moroccan classic',
            },
            price: '29₪',
            isVegan: true,
        },
        {
            id: 8,
            name: { he: 'זיתים', en: 'Olives' },
            description: {
                he: 'זיתים טריים ובחירה - מלוח וטעים',
                en: 'Fresh hand-picked olives - salty and flavorful',
            },
            price: '18₪',
            isVegan: true,
        },
        {
            id: 9,
            name: { he: 'סלט טונה', en: 'Tuna Salad' },
            description: {
                he: 'טונה זה עם ירקות וברגר ביתי - עשיר וטעים',
                en: 'Fresh tuna with vegetables and homemade mayo - rich and satisfying',
            },
            price: '29₪',
            isVegan: false,
        },
        {
            id: 9,
            name: { he: 'סלט ביצים', en: 'Egg Salad' },
            description: {
                he: 'ביצים קשות מעורבבות עם מיונז וצמחי תבלין - רך וטעים',
                en: 'Hard-boiled eggs mixed with mayo and fresh herbs - creamy and delicious',
            },
            price: '29₪',
            isVegan: false,
        },
    ],
    sweets: [
        {
            id: 10,
            name: { he: '9 שוקולד צ׳יפס', en: '9 Chocolate Chips' },
            description: {
                he: 'עוגיות שוקולד חם - מתוקות ופרוסות שוקולד',
                en: 'Fresh baked chocolate chip cookies - sweet with rich chocolate pieces',
            },
            price: '99₪',
        },
        {
            id: 11,
            name: { he: 'עוגת שמרים', en: 'Danish' },
            description: {
                he: 'עוגת שמרים טרייה - פריכה מבחוץ, רכה בתוך',
                en: 'Fresh Danish pastry - crispy outside, soft inside',
            },
            price: '48₪',
        },
        {
            id: 11,
            name: {
                he: 'קופסת עוגיות (טחינה/מייפל פקאן/ביסקוטי)',
                en: 'Box of Cookies (Tahina/Maple Pecan/Biscoti)',
            },
            description: {
                he: 'מבחר עוגיות בעבודת יד - טחינה, מייפל פקאן וביסקוטי',
                en: 'Assorted handmade cookies - tahina, maple pecan and biscotti varieties',
            },
            price: '44₪',
        },
        {
            id: 11,
            name: {
                he: 'פונדט',
                en: 'Fondant',
            },
            description: {
                he: 'שוקולד ממס עם פירות ומרשמלו - טעים להטבול',
                en: 'Melting chocolate with fruits and marshmallows - perfect for dipping',
            },
            price: '48₪',
        },
    ],
};

export const galleryImages = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
];
