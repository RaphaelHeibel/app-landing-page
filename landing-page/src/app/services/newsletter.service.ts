import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterResponse } from '../interfaces/newsletter.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  readonly endpointUrl = "https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/";

  constructor(readonly http: HttpClient) { }

  sendData(name:string, email:string): Observable<NewsletterResponse> {
    const data = {
      name: name,
      email: email
    };

    return this.http.post<NewsletterResponse>(this.endpointUrl, data);
  }
}
