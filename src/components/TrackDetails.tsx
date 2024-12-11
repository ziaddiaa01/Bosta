import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface TransitEvent {
    timestamp: string;
    state: string;
    code: number;
    msg?: string;
    exceptionCode?: string;
}

interface TrackDetailsProps {
    details: {
        TransitEvents: TransitEvent[];
    };
}

const keywordToTranslationKeyMap: { [key: string]: string } = {
    "created": "order_created",
    "received": "order_received",
    "prepared": "order_prepared",
    "out for delivery": "order_out_for_delivery",
    "rescheduled": "rescheduled"
};

const TrackDetails: React.FC<TrackDetailsProps> = ({ details }) => {
    const { TransitEvents } = details;
    const [showMore, setShowMore] = useState(false);
    const { t, i18n } = useTranslation();

    const formatDate = (timestamp: string) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString(i18n.language === 'ar' ? 'ar-EG' : 'en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const formatTime = (timestamp: string) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString(i18n.language === 'ar' ? 'ar-EG' : 'en-US', {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    const translateState = (state: string): string => {
        for (const keyword in keywordToTranslationKeyMap) {
            if (state.toLowerCase().includes(keyword)) {
                return t(keywordToTranslationKeyMap[keyword]);
            }
        }
        return state;
    };

    if (!TransitEvents) {
        return null;
    }

    return (
        <div className="w-[73%] mx-auto p-4 my-10">
            <div className={`xl:hidden ${showMore ? 'block' : 'hidden'}`}>
                <h2 className="text-2xl text-[#667085] font-semibold mb-4">{t('track_details')}</h2>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    {TransitEvents.map((event, index) => {
                        const shouldDisplay = typeof event.state === 'string' && !event.state.includes('Exception');

                        if (!shouldDisplay) return null;

                        return (
                            <li key={index} className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <div className="border border-gray-300 mt-2 p-4 rounded-lg shadow-md">
                                    <div className="mb-2">
                                        <p className="font-bold text-gray-800">
                                            {formatDate(event.timestamp)}
                                        </p>
                                    </div>
                                    <p className="font-normal text-sm text-gray-800">{translateState(event.state)}</p>
                                    <p className="text-sm text-gray-600">{formatTime(event.timestamp)}</p>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>

            <div className="hidden xl:block">
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    {TransitEvents.map((event, index) => {
                        const shouldDisplay = typeof event.state === 'string' && !event.state.includes('Exception');

                        if (!shouldDisplay) return null;

                        const isHidden = !showMore && index > 2;
                        const opacityClass = index === 2 && !showMore ? 'opacity-15' : 'opacity-100';

                        return (
                            <li
                                key={index}
                                className={`mb-10 ms-4 transition-opacity duration-300 ${isHidden ? 'hidden' : ''} ${opacityClass}`}
                            >
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <div className="border border-gray-300 mt-2 p-4 rounded-lg shadow-md">
                                    <div className="mb-2">
                                        <p className="font-bold text-gray-800">
                                            {formatDate(event.timestamp)}
                                        </p>
                                    </div>
                                    <p className="font-normal text-sm text-gray-800">{translateState(event.state)}</p>
                                    <p className="text-sm text-gray-600">{formatTime(event.timestamp)}</p>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>

            <div className="text-center mt-4 w-fit items-center mx-auto flex gap-1">
                <button
                    onClick={handleShowMore}
                    className="p-0 text-[#0098A5]"
                >
                    {showMore ? t('less') : t('more')}
                </button>
                <svg
                    className={`w-2.5 h-2.5 ms-2.5 text-[#0098A5] transition duration-300 ${showMore ? 'rotate-180' : 'rotate-0'}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </div>
        </div>
    );
};

export default TrackDetails;
