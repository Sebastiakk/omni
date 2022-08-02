import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Options {
  headers?: HttpHeaders;
  params?: HttpParams;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(protected readonly httpClient: HttpClient) {
  }

  public createDefaultOptions(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  public optsName(name: string): Options {
    return this.setHeader('xhr-name', name);
  }

  private setHeader(name: string, value: string) {
    const newOpts = this.createDefaultOptions();
    newOpts.headers = newOpts.headers.set(name, value);
    return newOpts;
  }

  private createOptions(opts?: Options): Options {
    const defaultOpts: Options & { headers: HttpHeaders } =
      this.createDefaultOptions();

    if (opts) {
      opts = {
        params: opts.params || defaultOpts.params,
        headers: opts.headers || defaultOpts.headers,
      };

      if (!opts?.headers?.get('Content-Type')) {
        opts.headers = opts?.headers?.set(
          'Content-Type',
          defaultOpts.headers.get('Content-Type') as string,
        );
      }
    }

    return opts || defaultOpts;
  }

  public get<T = any>(serviceUrl: string, opts?: Options): Promise<T> {
    const rOpts = this.createOptions(opts);
    return firstValueFrom(this.httpClient.get<T>(serviceUrl, rOpts));
  }

  public post<T, R>(serviceUrl: string, body: T, opts?: Options): Promise<R> {
    const rOpts = this.createOptions(opts);
    return firstValueFrom(this.httpClient.post<R>(serviceUrl, body, rOpts));
  }

}
