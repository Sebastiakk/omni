import { of } from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';

export interface Options {
  headers?: HttpHeaders;
  params?: HttpParams;
}

describe('HttpService', () => {
  let service: HttpService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService, HttpClient, HttpHandler],
    });
    service = TestBed.inject(HttpService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('createDefaultOptions => Deberia crear opción default de content-type = application/json', () => {
    // Arrange

    // Act
    const result = service.createDefaultOptions();
    // Assert
    expect(result.headers.get('Content-Type')).toEqual('application/json');
  });

  it('optsName => Deberia dar nombre a opción', () => {
    // Arrange

    // Act
    const result: any = service.optsName('name');
    // Assert
    expect(result.headers.get('xhr-name')).toEqual('name');
  });

  it('doGet => Deberia ejecutar get', () => {
    // Arrange
    const spy = spyOn(httpClient, 'get').and.returnValue(of(null));
    const opts: Options = {
      headers: new HttpHeaders,
      params: new HttpParams,
    };

    // Act
    service.get('/n1/n2', opts);

    // Assert
    expect(spy).toHaveBeenCalled();
  });

  it('doPost => Deberia ejecutar post', () => {
    // Arrange
    const spy = spyOn(httpClient, 'post').and.returnValue(of(null));

    // Act
    service.post('/n1/n2', '');

    // Assert
    expect(spy).toHaveBeenCalled();
  });

});
