import React from "react";

export default function CourseListRow({ isHeader = false, textFirstCell = "", textSecondCell = null }) {
  const bgColor = isHeader ? 'bg-[var(--color-table-header)]' : 'bg-[var(--color-table-rows)]';
  const opacity = isHeader ? 'opacity-[0.66]' : 'opacity-[0.45]';
  const borderClass = 'border border-gray-400';

  return (
    <tr className={`${bgColor} ${opacity}`}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={`${borderClass} text-center py-2`} style={{ width: '70%' }}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={`${borderClass} py-2`} style={{ width: '70%' }}>
              {textFirstCell}
            </th>
            <th className={`${borderClass} py-2`}>
              {textSecondCell}
            </th>
          </>
        )
      ) : (
        <>
          <td className={`${borderClass} py-2 pl-2`}>
            {textFirstCell}
          </td>
          <td className={`${borderClass} py-2 pl-2`}>
            {textSecondCell}
          </td>
        </>
      )}
    </tr>
  );
}
