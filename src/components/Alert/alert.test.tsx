import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Alert, { BaseAlertProps } from './alert'

const testProps: BaseAlertProps = {
  title: 'title',
  onClose: jest.fn()
}
const typeProps: BaseAlertProps = {
  ...testProps,
  type: 'success',
  description: 'Info Description',
  closable: false,
}

describe('test alert component', () => {
  it('should render the correct default alert', () => {
    const wrapper = render(<Alert {...testProps} />)
    const element = wrapper.getByText('title')
    expect(element).toBeInTheDocument()
    expect(wrapper.container.querySelector('.nan-alert')).toHaveClass('nan-alert-default')
    fireEvent.click(wrapper.container.querySelector('.nan-alert-close') as HTMLSpanElement)
    expect(testProps.onClose).toHaveBeenCalled()
  })
  it('should render the correct alert based on different type and description', () => {
    const { container, queryByText } = render(<Alert {...typeProps} />)
    expect(queryByText('title')).toHaveClass('bold-title')
    expect(container.querySelector('.nan-alert')).toHaveClass('nan-alert-success')
    expect(queryByText('Info Description')).toBeInTheDocument()
    expect(queryByText('×')).not.toBeInTheDocument()
  })
})