import React, { useState, useEffect } from "react";
import { IMedicalInformation } from "@/types/medical-information";
import { Button } from "@/components/common/Button";
import { updateReportAccess } from "@/api/reports/reportsAPI";
import { updateHistoryAccess } from "@/api/history/historyAPI";

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
  }, [data, updateReportAccess, setSelectedRows, isModalOpen]);

  const toggleRow = (doctorId: string) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(doctorId)) {
        return prevSelectedRows.filter((id) => id !== doctorId);
      } else {
        return [...prevSelectedRows, doctorId];
      }
    });
  };

  const handlePermissionChange = async () => {
    try {
      // Filter out doctors whose permissions haven't changed
      const doctorsToUpdate = data.filter(
        (doctor) => selectedRows.includes(doctor.doctorId) !== doctor.allowed
      );

      // Update permissions only for doctors whose permissions have changed
      await Promise.all(
        doctorsToUpdate.map(async (doctor) => {
          const allowed = selectedRows.includes(doctor.doctorId);
          console.log(
            "Passing details",
            patientSessionId,
            doctor.doctorId,
            allowed
          );
          if (patientSessionId) {
            console.log(`Updating permission for doctor ${doctor.doctorId}`);
            await updateHistoryAccess(
              patientSessionId,
              doctor.doctorId,
              allowed
            );
            console.log(`Permission updated for doctor ${doctor.doctorId}`);
          }
        })
      );
      console.log("Permissions updated successfully");
    } catch (error) {
      console.error("Error calling updateReportAccess:", error);
    }
  };

  console.log("Rendering HistoryPermissionTable with data:", data);

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
              Last Accessed
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-ugray-200">
          {Array.isArray(data) &&
            data.map((doctor) => (
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
                  {doctor.informationLastAccessDate
                    ? new Date(
                        doctor.informationLastAccessDate
                      ).toLocaleDateString("en-GB")
                    : "N/A"}
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

