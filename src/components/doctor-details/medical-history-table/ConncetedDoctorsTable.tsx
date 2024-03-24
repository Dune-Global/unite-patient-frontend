import React, { useState } from "react";
import { IMedicalInformation } from "@/types/medical-information";
import { Button } from "@/components/common/Button";
import { updateReportAccess } from "@/api/reports/reportsAPI";

interface ConnectedDoctorsTableProps {
  data: IMedicalInformation[];
  reportUrl?: string;
  reportId?: string;
}

const ConnectedDoctorsTable: React.FC<ConnectedDoctorsTableProps> = ({
  data,
  reportId,
  reportUrl,
}) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const toggleRow = (doctorId: string) => {
    const isSelected = selectedRows.includes(doctorId);
    if (isSelected) {
      setSelectedRows(selectedRows.filter((id) => id !== doctorId));
    } else {
      setSelectedRows([...selectedRows, doctorId]);
    }
  };

  const handlePermissionChange = async () => {
    try {
      await Promise.all(
        data.map(async (doctor) => {
          const allowed = selectedRows.includes(doctor.doctorId);
          if (reportId) {
            await updateReportAccess(reportId, doctor.doctorId, allowed);
            console.log("reportId:", reportId);
            console.log("doctorId:", doctor.doctorId);
            console.log("allowed:", allowed);
          }
        })
      );
      console.log("Permissions updated successfully");
      console.log("selectedRows", selectedRows);
    } catch (error) {
      console.error("Error calling updateReportAccess:", error);
    }
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-ugray-200">
        <thead className="bg-ugray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-normal text-ugray-400 uppercase tracking-wider"
            >
              {/* <input type="checkbox" /> */}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-ugray-400  tracking-wider"
            >
              Doctor Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-ugray-400  tracking-wider"
            >
              Designation
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-ugray-200">
          {data.map((doctor) => (
            <tr key={doctor.doctorId}>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(doctor.doctorId)}
                  onChange={() => toggleRow(doctor.doctorId)}
                  className=" h-4 w-4 text-ublue-200 border-ublue-200 rounded-md"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={doctor.imgUrl}
                      alt={`${doctor.firstName} ${doctor.lastName}`}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-normal text-ugray-900">
                      {doctor.firstName} {doctor.lastName}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-ugray-500">
                {doctor.designation}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-10 flex justify-end gap-4">
        <Button size="sm" onClick={handlePermissionChange}>
          Save changes
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(reportUrl, "_blank")}
        >
          View report
        </Button>
      </div>
    </div>
  );
};

export default ConnectedDoctorsTable;
