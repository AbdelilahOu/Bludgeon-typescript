<<<<<<< HEAD
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
=======
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
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834
