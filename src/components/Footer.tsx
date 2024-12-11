import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Logo from "../assets/Logo.png";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    
    <footer className="font-cairo mb-[-50px] sm:p-6 mt-auto w-full  bg-footer">
      <div className="mx-auto w-full max-w-screen-xl p-4">
        <div className="flex flex-col md:flex-row md:items-start gap-12">
          <div className="mb-6 md:mb-0 mt-10">
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} className="h-8" alt={t('logo_alt_text')} />
              <h3 className="text-2xl font-extrabold text-secondary_red">{t('brand_name')}</h3>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-20">
            <div className="col-span-1">
              <h2 className="mb-4 text-md font-bold text-myblack">{t('products.title')}</h2>
              <ul className="text-nav_items text-sm">
                <li className="mb-2">
                  <Link to="#" className="hover:underline">{t('products.solutions')}</Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">{t('products.mobile_app')}</Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">{t('products.dashboard')}</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="mb-4 text-md font-bold text-myblack">{t('integrations.title')}</h2>
              <ul className="text-nav_items text-sm">
                <li className="mb-2">
                  <Link to="#" className="hover:underline">{t('integrations.shopify')}</Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">{t('integrations.woocommerce')}</Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">{t('integrations.custom_apis')}</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="mb-4 text-md font-bold text-myblack">{t('use_cases.title')}</h2>
              <ul className="text-nav_items text-sm">
                <li className="mb-2">
                  <Link to="#" className="hover:underline">{t('use_cases.businesses')}</Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">{t('use_cases.smes')}</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="mb-4 text-md font-bold text-myblack">{t('company.title')}</h2>
              <ul className="text-nav_items text-sm">
                <li className="mb-2">
                  <Link to="#" className="hover:underline">{t('company.about_us')}</Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">{t('company.careers')}</Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">{t('company.pricing')}</Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">{t('company.faqs')}</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Link to="#" className="underline text-md font-bold text-nav_items">{t('track_shipment')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
