import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ModernNavigation from '../layout/ModernNavigation'

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: jest.fn(),
  }),
}))

describe('Header', () => {
  it('renders the logo and navigation', () => {
    render(<ModernNavigation />)

    expect(screen.getByText('Himanshu Gandhi')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
  })

  it('toggles mobile menu when menu button is clicked', () => {
    render(<ModernNavigation />)

    const menuButton = screen.getByLabelText('Toggle menu')
    fireEvent.click(menuButton)

    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('has theme toggle button', () => {
    render(<ModernNavigation />)

    const themeButton = screen.getByLabelText('Toggle theme')
    expect(themeButton).toBeInTheDocument()
  })
}) 