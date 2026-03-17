import { render, screen, fireEvent } from '@testing-library/react'
import CourseListRow from './CourseListRow'

describe('CourseListRow component', () => {
  it('renders a header row with colspan when textSecondCell is null', () => {
    render(
      <table><tbody>
        <CourseListRow isHeader={true} textFirstCell="Header" textSecondCell={null} />
      </tbody></table>
    )
    const th = screen.getByRole('columnheader')
    expect(th).toHaveAttribute('colspan', '2')
  })

  it('renders a header row with two cells', () => {
    render(
      <table><tbody>
        <CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />
      </tbody></table>
    )
    expect(screen.getByText('First')).toBeInTheDocument()
    expect(screen.getByText('Second')).toBeInTheDocument()
  })

  it('renders a regular row with checkbox', () => {
    render(
      <table><tbody>
        <CourseListRow textFirstCell="Course" textSecondCell="60" />
      </tbody></table>
    )
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('checkbox toggles on click', () => {
    render(
      <table><tbody>
        <CourseListRow textFirstCell="Course" textSecondCell="60" />
      </tbody></table>
    )
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox.checked).toBe(false)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
  })
})
