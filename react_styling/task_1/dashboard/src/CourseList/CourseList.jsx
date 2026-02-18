import React from 'react';
import CourseListRow from './CourseListRow';
import WithLogging from '../HOC/WithLogging';

function CourseList({ courses = [] }) {
  return (
    <div className="w-4/5 mx-auto my-4">
      <table id="CourseList" className="w-full border-collapse">
        {courses.length > 0 ? (
          <>
            <thead>
              <CourseListRow isHeader={true} textFirstCell="Available courses" />
              <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
              {courses.map((course) => (
                <CourseListRow
                  key={course.id}
                  textFirstCell={course.name}
                  textSecondCell={course.credit}
                />
              ))}
            </tbody>
          </>
        ) : (
          <tbody>
            <CourseListRow isHeader={true} textFirstCell="No course available yet" />
          </tbody>
        )}
      </table>
    </div>
  );
}

export default WithLogging(CourseList);
