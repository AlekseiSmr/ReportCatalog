import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServerConfig } from '../constants/Routes';
import { catchError } from 'rxjs/operators';
import { ErrHelper } from '../helpers/err.helper';
import { HttpClient } from '@angular/common/http';
import { MarkedReport } from '../models/marked-report.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarkedReportsService {
  private readonly endpoint =
    environment.domain + ServerConfig.MARKED_REPORTS_ENDPOINT;

  constructor(private http: HttpClient) {}

  get(query: string): Observable<MarkedReport[]> {
    // ! Fake implementation
    return new Observable(observer => {
      const model: MarkedReport[] = [
        { id: 1, name: 'Marked Report 1' },
        { id: 2, name: 'Marked Report 2' },
        { id: 3, name: 'Marked Report 3' },
      ];

      observer.next(model);
      observer.complete();
    });

    return this.http
      .get<MarkedReport[]>(this.endpoint + '/' + query)
      .pipe(catchError(ErrHelper.handleError));
  }
}
