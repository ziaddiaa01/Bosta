import React from "react";
import { useTranslation } from 'react-i18next';

interface TransitEvent {
  timestamp: string;
  state: string;
  code: number;
}

interface OrderDetails {
  TrackingNumber: string;
  CurrentStatus: {
    state: string;
    code: number;
    timestamp: string;
  };
  PromisedDate: string;
  TransitEvents: TransitEvent[];
}

interface ArriveDetailsProps {
  details: OrderDetails;
}

const stages = [
  { label: "picked_up", code: 10 },
  { label: "processing", code: 24 },
  { label: "out_for_delivery", code: 41 },
  { label: "delivered", code: 45 },
];

const ArriveDetails: React.FC<ArriveDetailsProps> = ({ details }) => {
  const { t, i18n } = useTranslation();
  const { TrackingNumber, PromisedDate, TransitEvents, CurrentStatus } = details;

  const getStageTimestamp = (code: number) => {
    if (!Array.isArray(TransitEvents)) {
      console.error("TransitEvents is not an array or is undefined");
      return null;
    }

    const event = TransitEvents.filter((event) => event.code === code).sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )[0];

    return event
      ? new Date(event.timestamp).toLocaleDateString(`${i18n.language === 'ar' ? 'ar-EG' : 'en-US'}`, {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      : null;
  };

  // Check if the current status is one of the relevant states
  const currentStageCode = CurrentStatus ? CurrentStatus.code : null;
  const currentStageIndex = stages.findIndex(
    (stage) => stage.code === currentStageCode
  );

  // If CurrentStatus exists, use it to determine if the order has passed the current stages
  const stageStatuses = stages.map((stage, index) => ({
    ...stage,
    isCompleted: index <= currentStageIndex, // Stage is complete if it is before or equal to the current stage
    isCurrent: index === currentStageIndex, // Stage is current if it matches the current stage
  }));

  const statusMessage =
    currentStageCode === 45
      ? new Date(CurrentStatus.timestamp).toLocaleDateString(`${i18n.language === 'ar' ? 'ar-EG' : 'en-US'}`, {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      : currentStageCode === 60
      ? new Date(CurrentStatus.timestamp).toLocaleDateString(`${i18n.language === 'ar' ? 'ar-EG' : 'en-US'}`, {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      : new Date(PromisedDate).toLocaleDateString(`${i18n.language === 'ar' ? 'ar-EG' : 'en-US'}`, {
          weekday: "short",
          month: "short",
          day: "numeric",
        });

  return (
    <div className="font-cairo bg-white rounded-lg shadow-md w-[90%] lg:w-[70%] mx-auto p-6">
      <div className="border-b border-b-black">
        <p className="mb-2 font-medium">
          <h3 className="text-[#667085] uppercase">
            {t('order_number')} <span>{TrackingNumber}</span>
          </h3>
        </p>
        <h1 className="mb-4 text-3xl font-bold text-myblack">
          {currentStageCode === 45 ? (
            t('delivered')
          ) : currentStageCode === 46 ? (
            t('returned')
          ) : (
            <>
              {t('arriving_by')} <span className="text-[#0098A5]">{statusMessage}</span>
            </>
          )}
        </h1>
      </div>

      <div className="w-full lg:w-2/3 flex flex-row-reverse lg:block gap-5 justify-center lg:mx-auto mt-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between lg:ml-[4px]">
          {stageStatuses.map((stage, index) => (
            <div
              key={stage.code}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-0 items-center ${
                index < stages.length - 1 ? "w-1/3" : "lg:w-auto w-1/3"
              }`}
            >
              <div
                className={`h-6 w-6 rounded-full flex flex-col lg:flex-row items-center justify-center ${
                  stage.isCompleted
                    ? "bg-[#0098A5] text-white"
                    : "bg-gray-200 text-gray-500"
                } shadow`}
              >
                {stage.isCompleted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-check"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FFFFFF"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                ) : (
                  <div
                    className={`h-3 w-3 rounded-full ${
                      stage.isCurrent ? "bg-[#0098A5]" : "bg-white"
                    }`}
                  />
                )}
              </div>
              {index < stages.length - 1 && (
                <div
                  className={`w-1 flex-grow lg:h-1 lg:flex-grow lg:mx-1 ${
                    stage.isCompleted
                      ? "bg-[#0098A5]"
                      : "border-t-[#D0D5DD] border-dashed border-t-2"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row justify-start lg:mt-4 gap-8 lg:justify-between">
          {stageStatuses.map((stage) => (
            <div
              key={stage.code}
              className="lg:text-right text-center min-w-fit"
            >
              <p
                className={`text-sm ${
                  stage.isCompleted
                    ? "text-myblack font-bold"
                    : "text-[#667085]"
                }`}
              >
                {t(stage.label)}
              </p>
              <p
                className={`text-xs font-medium ${
                  stage.isCompleted ? "text-myblack" : "text-[#667085]"
                }`}
              >
                {stage.isCompleted ? getStageTimestamp(stage.code) : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArriveDetails;
