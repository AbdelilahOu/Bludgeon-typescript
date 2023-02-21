import { Response } from "express";
export const errorResponse = (
  res: Response,
  message: string,
  statusCode = 500,
  error = {}
) => {
  console.log(error);
  res.status(statusCode).json({
    success: false,
    message,
    error: {
      statusCode,
      message,
      error,
    },
  });
};
