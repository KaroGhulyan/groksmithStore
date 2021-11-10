import { Alert } from 'antd'
import React from 'react'
import './error-indicator.scss'

const ErrorIndicator:React.FC<any> = ({errorMessage}) => {
  return (
    <Alert
      message="Error Text"
      description={errorMessage}
      type="error"
      closable
    />
  )
}

export default ErrorIndicator
