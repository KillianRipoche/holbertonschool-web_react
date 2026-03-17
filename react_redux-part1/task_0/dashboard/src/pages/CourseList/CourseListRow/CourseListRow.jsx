import PropTypes from 'prop-types'
import { useState } from 'react'

function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = '' }) {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  if (isHeader) {
    return (
      <tr className="bg-[color:var(--main-color)] text-white">
        {textSecondCell === null ? (
          <th colSpan="2" className="p-1 pl-2 text-left">{textFirstCell}</th>
        ) : (
          <>
            <th className="p-1 pl-2 text-left">{textFirstCell}</th>
            <th className="p-1 pl-2 text-left">{textSecondCell}</th>
          </>
        )}
      </tr>
    )
  }

  return (
    <tr className={isChecked ? 'bg-[color:var(--checked-color)]' : ''}>
      <td className="p-1 pl-2">
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        {' '}{textFirstCell}
      </td>
      <td className="p-1 pl-2">{textSecondCell}</td>
    </tr>
  )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.string,
}

export default CourseListRow
