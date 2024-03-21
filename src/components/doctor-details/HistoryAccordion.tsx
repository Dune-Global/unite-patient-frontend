"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import React from "react";
import { Button } from "../common/Button";
import { IAccordionData } from "@/types/accordion-data";

const HistoryAccordion: React.FC<IAccordionData> = ({
  diseaseDescription,
  diseaseName,
  date,
  symptoms,
  status,
  isLastItem = false, // Default to false if not provided
}) => {
  return (
    // <div className="border-l-2 border-dashed border-ugray-200 relative pb-10 pl-4">

    <div
      className={` relative pl-4 ${
        !isLastItem && "border-l-2 border-dashed border-ugray-200  pb-10 "
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full border-4 absolute border-uindigo-400 bg-ugray-0   ${
          !isLastItem ? "-left-2" : " -left-[6px] "
        } `}
      />
      <div className="mb-3 pl-4 ">{date}</div>
      <Accordion type="multiple" className="flex flex-col gap-4 mx-4">
        <AccordionItem
          value="item-1"
          className="bg-ugray-0 rounded-md px-6 py-2"
        >
          <AccordionTrigger className="flex">
            <div className="flex flex-col items-start gap-3 justify-between w-full">
              <span className="text-ugray-900 text-left text-lg font-semibold">
                {diseaseName}
              </span>
              <span className="text-ugray-200 sm:text-left text-justify text-sm sm:text-base">
                {diseaseDescription}
              </span>
            </div>
            <ChevronDown className="h-6 w-6 shrink-0 text-ugray-400 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="border-b border-ugray-100 mb-6" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="flex flex-col py-3 sm:p-3 gap-2">
                <span className="text-ugray-200">Symptoms</span>
                <span className="text-justify sm:text-left">{symptoms}</span>
              </div>
              <div className="flex flex-col py-3 sm:p-3 gap-2">
                <span className="text-ugray-200">Status</span>
                <span>{status}</span>
              </div>
              <div className="mt-4 sm:ml-0 sm:mt-0">
                <Button variant="default" size="sm">
                  View Prescription
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HistoryAccordion;
