import { DateFormatter } from '../utils/date-formatter.util';

export interface SuccessResponse<T = any> {
  success: true;
  data: T;
  timeZone: string;
  epochTime: number;
}

export interface ErrorResponse {
  success: false;
  message: string;
  errorCode?: string;
  timeZone: string;
  epochTime: number;
}

export class ResponseFormatter {
  static success<T>(data: T): SuccessResponse<T> {
    return {
      success: true,
      data,
      timeZone: 'UTC',
      epochTime: DateFormatter.getTimestamp(),
    };
  }

  static error(message: string, errorCode?: string): ErrorResponse {
    return {
      success: false,
      message,
      errorCode,
      timeZone: 'UTC',
      epochTime: DateFormatter.getTimestamp(),
    };
  }
}
