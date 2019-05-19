import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ServerConfig } from '../constants/Routes';
import { catchError } from 'rxjs/operators';
import { ErrHelper } from '../helpers/err.helper';
import { Construction } from '../models/construction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConstructionsService {
  private readonly endpoint =
    environment.domain + ServerConfig.CONSTRUCTIONS_ENDPOINT;

  constructor(private http: HttpClient) {}

  get(query: string): Observable<Construction[]> {
    // ! Fake implementation
    return new Observable(observer => {
      const model: Construction[] = [
        { id: 1, name: 'Construction 1' },
        { id: 2, name: 'Construction 2' },
        { id: 3, name: 'Construction 3' },
      ];

      observer.next(model);
      observer.complete();
    });

    return this.http
      .get<Construction[]>(this.endpoint + '/' + query)
      .pipe(catchError(ErrHelper.handleError));
  }
}
