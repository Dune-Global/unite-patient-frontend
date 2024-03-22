"use client";

import React from "react";
import classNames from "classnames";
import { Check } from "lucide-react";

interface ProgressStepProps {
  step: number;
  name: string;
  currentStep: number;
  isLastStep: boolean;
}

const ProgressStep: React.FC<ProgressStepProps> = ({
  step,
  name,
  currentStep,
  isLastStep,
}) => {
  const isCompleted = step <= currentStep;
  const isNextCompleted = step + 1 <= currentStep;

  return (
    <React.Fragment>
      {/* Circle */}
      <div
        className={classNames(
          "flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full relative",
          {
            "bg-uindigo-400 text-ugray-0": isCompleted,
            "bg-uindigo-200 text-ugray-400": !isCompleted,
          }
        )}
      >
        {isCompleted ? <Check size={24} className="w-4 md:w-5" /> : step}

        <div
          className={classNames(
            "absolute top-14 w-full min-w-[100px] xl:min-w-[200px] flex text-center justify-center items-center hidden lg:block",
            {
              "text-uindigo-400": isCompleted,
              " text-ugray-900": !isCompleted,
            }
          )}
        >
          <span className="text-sm 2xl:text-lg">{name}</span>
        </div>
      </div>

      {/* Line */}
      {!isLastStep && (
        <div
          className={classNames("flex-1 h-1.5", {
            "bg-uindigo-400": isCompleted && isNextCompleted,
            "bg-uindigo-200": !isNextCompleted,
          })}
        />
      )}
    </React.Fragment>
  );
};

interface ProgressProps {
  currentStep: number;
}

const Progress: React.FC<ProgressProps> = ({ currentStep }) => {
  const steps = [
    "Medicine Started",
    "Maintenance Stage",
    "Recovery Stage",
    "Final Stage",
  ];

  return (
    <div className=" flex items-center justify-between w-full">
      {steps.map((step, index) => (
        <ProgressStep
          key={step}
          step={index + 1}
          name={step}
          currentStep={currentStep}
          isLastStep={index === steps.length - 1}
        />
      ))}
    </div>
  );
};

export default Progress;
