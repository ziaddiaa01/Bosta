import React, { useState, Suspense } from "react";
import { useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "../redux/store";
import { useTranslation } from 'react-i18next';
import i18n from "i18next";

import {
  setTrackingDetails,
  setTrackingDetailsError,
  clearTrackingDetails,
} from "../redux/trackingSlice";

import Location from "../assets/ac8dbe8ae2210d1a650279fb14d01f7e.png";

const TrackDetails = React.lazy(() => import("../components/TrackDetails"));
const ArriveDetails = React.lazy(() => import("../components/ArrivedDetails"));

const OrderDetails: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const navigation = useNavigation();
  const { t } = useTranslation();
  
  const dispatch = useDispatch();
  const { trackingDetails, error } = useSelector(
    (state: RootState) => state.tracking
  );

  const handleSearch = async () => {
    if (!trackingNumber.trim()) {
      dispatch(setTrackingDetailsError(t('Please enter a valid tracking number.')));
      return;
    }

    try {
      dispatch(clearTrackingDetails());
      const response = await axios.get(`/shipments/track/${trackingNumber}`, {
        headers: {
          "x-requested-by": "Bosta",
        },
      });
      dispatch(setTrackingDetails(response.data));
    } catch (err) {
      dispatch(setTrackingDetailsError(t(`Error :${err}`)));
    }
  };

  return (
    <div className="font-cairo w-10/12 mx-auto  flex flex-col items-center p-5">
      <img src={Location} alt="Location Icon" />
      <h1 className="font-bold text-3xl">{t('track_shipment')}</h1>
      <div className="flex bg-footer w-1/3 my-[5%]">
        <input
          type="text"
          placeholder={t('tracking_no')}
          value={trackingNumber}

          onChange={(e) => setTrackingNumber(e.target.value)}
          className={`border py-2 ${i18n.language === "ar" ? "rounded-r-md" : "rounded-l-md"}  w-full h-10 px-4 outline-[#80CBD2]`}
        />
        <button
          onClick={handleSearch}
          className={`bg-secondary_red min-w-fit h-10 px-4 ${i18n.language === "ar" ? "rounded-l-md" : "rounded-r-md"}  text-center flex items-center justify-center`}
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? (
            <span className="text-primary_white">{t('Searching...')}</span>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-primary_white size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          )}
        </button>
      </div>

      {error && <div className="text-red-500 mt-4">{error}</div>}

      {trackingDetails && (
        <Suspense fallback={<div>{t('Loading...')}</div>}>
          <ArriveDetails details={trackingDetails} />
          <TrackDetails details={trackingDetails} />
        </Suspense>
      )}
    </div>
  );
};

export default OrderDetails;
