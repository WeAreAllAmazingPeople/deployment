import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Secret} from './model/secret';
import {CreateSecret} from './model/create-secret';

@Injectable({
  providedIn: 'root'
})
export class SecretService {
  private secretUrl: string;

  constructor(private http: HttpClient) {
    this.secretUrl = 'http://localhost:8080/secrets';
  }

  public findAll(): Observable<Secret[]> {
    return this.http.get<Secret[]>(this.secretUrl);
  }

  public findById(id: string): Observable<Secret> {
    return this.http.get<Secret>(`${this.secretUrl}/${id}`);
  }

  public save(secret: CreateSecret): Observable<any>{
    return this.http.post<Secret>(this.secretUrl, secret);
  }
}
