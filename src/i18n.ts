import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
            "products": {
              "title": "Products",
              "solutions": "Solutions",
              "mobile_app": "Mobile App",
              "dashboard": "Dashboard",
              "capital": "Bosta Capital",
              "fulfillment":"Fulfillment"
            },
            "integrations": {
              "title": "Integrations",
              "shopify": "Shopify",
              "woocommerce": "WooCommerce",
              "custom_apis": "Custom APIs"
            },
            "use_cases": {
              "title": "Use Cases",
              "businesses": "Businesses",
              "smes": "SMEs"
            },
            "company": {
              "title": "Company",
              "about_us": "About Us",
              "careers": "Careers",
              "pricing": "Pricing",
              "faqs": "FAQs"
            },
            "resources": {
              "title": "Resources",
              "blog": "Blog",
              "insights":"Bost Insights"
            },
            "track_shipment": "Track Shipment",
            "track_order": "Track Your Order",
            "tracking_no": "Tracking No.",
            "order_number": "Order Number #",
            "arriving_by": "Arriving By",
            "picked_up": "Picked Up",
            "processing": "Processing",
            "out_for_delivery": "Out For Delivery",
            "delivered": "Delivered",
            "returned": "Returned",
            "track_details": "Track Details",
            "order_created": "Your order has been created, Bosta will pick it up once your shipper is ready.",
            "order_received": "Order has been received at Bosta's warehouse and is being processed.",
            "order_prepared": "Order is being prepared for delivery.",
            "order_out_for_delivery": "Order is out for delivery",
            "rescheduled": "Order has been rescheduled because we couldn't reach you by phone.",
            "brand_name": "Bosta",
            "less": "Less",
            "more": "More",
            "logo_alt_text": "Bosta Logo",
            "sign_up":"Sign Up",
            "sign_in":"Sign In",
    },
  },
  ar: {
    translation: {
      "products": {
        "title": "المنتجات",
        "solutions": "الحلول",
        "mobile_app": "تطبيق الموبايل",
        "dashboard": "لوحة التحكم",
        "capital":"بوسطة كابيتال",
        "fulfillment":"تخزين"
      },
      "integrations": {
        "title": "التكاملات",
        "shopify": "شوبيفاي",
        "woocommerce": "ووكومرس",
        "custom_apis": "الربط عن طريق APIs"
      },
      "use_cases": {
        "title": "نوع التاجر",
        "businesses": "شركات كبيرة",
        "smes": "شركات الصغيرة والمتوسطة"
      },
      "company": {
        "title": "الشركة",
        "about_us": "عن بوسطة",
        "careers": "الوظائف",
        "pricing": "التسعير",
        "faqs": "الأسئلة الشائعة"
      },
      "resources": {
        "title": "مصادر",
        "blog": "المدونة",
        "insights":"تقارير بوسطة"

      },
      "track_shipment": "تتبع شحنتك",
      "track_order": "تتبع شحنتك",
      "tracking_no": "رقم التتبع",
      "order_number": "رقم الطلب #",
      "arriving_by": "الوصول بحلول",
      "picked_up": "تم الاستلام",
      "processing": "قيد المعالجة",
      "out_for_delivery": "في طريقه للتسليم",
      "delivered": "تم التسليم",
      "returned": "تم ترجيع الطلب",
      "track_details": "تفاصيل التتبع",
      "order_created": "تم إنشاء طلبك، ستقوم بوسطة باستلامه عندما يكون شاحنكم جاهزًا",
      "order_received": "تم استلام الطلب في مستودعات بوستا وهو قيد المعالجة.",
      "order_prepared": "الطلب قيد التحضير للتسليم.",
      "order_out_for_delivery": "الطلب في طريقه للتسليم",
      "rescheduled":"تم إعادة جدولة الطلب لأنه لم يكن من الممكن الوصول إليك عبر الهاتف",
      "brand_name": "بوسطة",
      "less": "اقل",
      "more": "اكثر",
      "logo_alt_text": "شعار بوسطة",
      "sign_up":"اشترك",
      "sign_in":"سجل الدخول",
    },
  },
};

const directionMap: { [key: string]: 'ltr' | 'rtl' } = {
  en: 'ltr',
  ar: 'rtl',
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources, 
    fallbackLng: 'en', 
    debug: true, 
    interpolation: {
      escapeValue: false, 
    },
  });

// Update `dir` and `lang` attributes dynamically when the language changes
i18n.on('languageChanged', (lng) => {
  const dir = directionMap[lng] || 'ltr';
  document.documentElement.lang = lng;
  document.documentElement.dir = dir;
});

export default i18n;
