import React, { useState, useEffect } from "react";
import { IMedicalInformation } from "@/types/medical-information";
import { Button } from "@/components/common/Button";
import { updateReportAccess } from "@/api/reports/reportsAPI";

interface HistoryPermissionTableProps {
  data: IMedicalInformation[];
  isModalOpen?: boolean;
  patientSessionId?: string;
}

const HistoryPermissionTable: React.FC<HistoryPermissionTableProps> = ({
  data,
  isModalOpen,
  patientSessionId,
}) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  useEffect(() => {
    // Reset selectedRows to reflect the current permissions
    const newSelectedRows = data.reduce((acc: string[], doctor) => {
      if (doctor.allowed) {
        acc.push(doctor.doctorId);
      }
      return acc;
    }, []);
    setSelectedRows(newSelectedRows);
  }, [data, updateReportAccess, setSelectedRows]);

  const toggleRow = (doctorId: string) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(doctorId)) {
        return prevSelectedRows.filter((id) => id !== doctorId);
      } else {
        return [...prevSelectedRows, doctorId];
      }
    });
  };

  const handlePermissionChange = async () => {};

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
                  className="h-4 w-4 text-ublue-200 border-ublue-200 rounded-md"
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
      </div>
    </div>
  );
};

export default HistoryPermissionTable;
