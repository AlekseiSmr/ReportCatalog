import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class ErrHelper {
  public static handleError(error: HttpErrorResponse) {
    if (error.error instanceof Event) {
      return throwError(
        JSON.stringify({
          message:
            'Something went wrong with your request.\nPlease try again later.',
          httpStatus: error.status,
        })
      );
    }

    if (error.error) {
      return throwError(error.error);
    }

    return throwError(
      JSON.stringify({
        message:
          'Something went wrong with your request.\nPlease try again later.',
        httpStatus: error.status,
      })
    );
  }
}
