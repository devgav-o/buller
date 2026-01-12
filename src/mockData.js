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
        madeWithLoveDesc: 'כל מנה מוכנת בקפידה',
        localBusiness: 'עסק מקומי',
        localBusinessDesc: 'גאים להיות חלק מקהילת יוקנעם',

        // Gallery Section
        ourGallery: 'הגלריה שלנו',
        gallerySubtitle: 'טעים לעיניים ולבטן',

        // Contact Section
        getInTouch: 'צרו קשר',
        contactSubtitle: 'נשמח לראות אתכם',
        visitUs: 'בואו לבקר',
        address: 'יוקנעם-, ישראל',
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
        sandwiches: 'כריכים',
        vegan: 'טבעוני',
        sides: 'תוספות',
        drinks: 'משקאות',
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
        address: 'Yokneam, Israel',
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
        sandwiches: 'Sandwiches',
        vegan: 'Vegan',
        sides: 'Sides',
        drinks: 'Drinks',
    },
};

export const menuItems = {
    sandwiches: [
        {
            id: 1,
            name: { he: 'כריך עוף חריף', en: 'Spicy Chicken Sandwich' },
            description: {
                he: 'חזה עוף מתובל, ירקות טריים, רוטב חריף ביתי',
                en: 'Seasoned chicken breast, fresh vegetables, homemade spicy sauce',
            },
            price: '42₪',
            isVegan: false,
        },
        {
            id: 2,
            name: { he: 'כריך טריאקי עוף', en: 'Chicken Teriyaki Sandwich' },
            description: {
                he: 'עוף בציפוי טריאקי מתוק, כרוב סגול, בצל מקורמל',
                en: 'Sweet teriyaki glazed chicken, purple cabbage, caramelized onions',
            },
            price: '44₪',
            isVegan: false,
        },
        {
            id: 3,
            name: { he: 'כריך עוף מרינטה', en: 'Marinated Chicken Sandwich' },
            description: {
                he: 'חזה עוף במרינדה מיוחדת, עגבניות, חסה, מיונז שום',
                en: 'Specially marinated chicken breast, tomatoes, lettuce, garlic mayo',
            },
            price: '40₪',
            isVegan: false,
        },
        {
            id: 4,
            name: { he: 'כריך נקניק', en: 'Sausage Sandwich' },
            description: {
                he: 'נקניק מעושן איכותי, בצל מטוגן, חרדל ודבש',
                en: 'Quality smoked sausage, fried onions, honey mustard',
            },
            price: '38₪',
            isVegan: false,
        },
    ],
    vegan: [
        {
            id: 5,
            name: { he: 'כריך שווארמה טבעוני', en: 'Vegan Shawarma Sandwich' },
            description: {
                he: 'שווארמה צמחונית, חומוס, טחינה, סלט ישראלי',
                en: 'Plant-based shawarma, hummus, tahini, Israeli salad',
            },
            price: '38₪',
            isVegan: true,
        },
        {
            id: 6,
            name: { he: 'סלט ים תיכוני', en: 'Mediterranean Salad' },
            description: {
                he: 'ירקות טריים, זיתים, גבינת פטה טבעונית, ויניגרט לימון',
                en: 'Fresh vegetables, olives, vegan feta, lemon vinaigrette',
            },
            price: '34₪',
            isVegan: true,
        },
    ],
    sides: [
        {
            id: 7,
            name: { he: "צ'יפס בית", en: 'House Fries' },
            description: {
                he: "צ'יפס פריך, מלח ים, רוזמרין",
                en: 'Crispy fries, sea salt, rosemary',
            },
            price: '18₪',
        },
        {
            id: 8,
            name: { he: 'טבעות בצל', en: 'Onion Rings' },
            description: {
                he: "טבעות בצל פריכות עם רוטב צ'ילי מתוק",
                en: 'Crispy onion rings with sweet chili sauce',
            },
            price: '20₪',
        },
    ],
    drinks: [
        {
            id: 9,
            name: { he: 'לימונדה ביתית', en: 'Homemade Lemonade' },
            description: {
                he: 'לימונדה טבעית עם נענע',
                en: 'Natural lemonade with fresh mint',
            },
            price: '14₪',
        },
        {
            id: 10,
            name: { he: 'קפה קר', en: 'Iced Coffee' },
            description: {
                he: 'קפה קר עם חלב/חלב צמחי',
                en: 'Iced coffee with milk/plant milk',
            },
            price: '16₪',
        },
    ],
};

export const galleryImages = [
    'https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?w=800&q=80',
    'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80',
    'https://images.unsplash.com/photo-1548940740-204726a19be3?w=800&q=80',
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
    'https://images.unsplash.com/photo-1619221882174-34f2fdb6b5bb?w=800&q=80',
    'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&q=80',
];
