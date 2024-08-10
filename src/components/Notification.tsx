import React from "react";

export enum AlertType {
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

const Notification: React.FC<{type: AlertType, message: string}> = ({ type, message }) => {
  return (
    <div>
      {
        {
          success: <Success message={message} />,
          warning: <Warning message={message} />,
          error: <Error message={message} />,
        }[type]
      }
    </div>
  )
};

const Success: React.FC<{message: string}> = ({message}) => {
  return (
    <div>
      <h1 className="bg-green-500">Success: {message}</h1>
    </div>
  )
};

const Warning: React.FC<{message: string}> = ({message}) => {
  return (
    <div>
      <h1 className="bg-yellow-500">Warning: {message}</h1>
    </div>
  )
};

const Error: React.FC<{message: string}> = ({message}) => {
  return (
    <div>
      <h1 className="bg-red-500">Error: {message}</h1>
    </div>
  )
};

export default Notification;
