import React from 'react'
import PropTypes from 'prop-types'
import CourseListRow from './CourseListRow'
import WithLogging from '../HOC/WithLogging'

function CourseList({ courses = [] }) {
  return (
    <table className="border-collapse w-11/12 mx-auto my-8 border border-solid border-[color:var(--color-table-rows)]">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {courses.length === 0 ? (
          <CourseListRow isHeader={true} textFirstCell="No course available yet" />
        ) : (
          courses.map(course => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={String(course.credit)}
            />
          ))
        )}
      </tbody>
    </table>
  )
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
}

const CourseListWithLogging = WithLogging(CourseList)
export default CourseListWithLogging
