import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService{

    private key:string = 'e5b7faa10f7846e682ee8bad4f5ba938';
    private token:string = 'BQDzRBEXMuZCu3mK-xTATjMaLje78o0JTuDihiZb9UwEwiHOoUKpKbXdRTWUUOExOQWmeF5Kq1w_nNidkACCDZNc9kwf5gpnTMoYBiOv5_bng74qee6FSy2lM5I08xDUOfHwryaK7xDKceCSxC1sDlfNsU266HZ7AlW-N0MKXq9yw3RO36XP_ZczWoKJCS-FLbVo0nRMI7bSvfWUguR5Wov7mxpg5zECmpAnGyRvenvRYxOEnEilIo93_-EbXYQxxhR26cPWsIqN5th9BjHgGYOQ7TZ-_sf_8DnA23c_xHBIjbEKfKc9sLQKL-qWBCtCeOXycQY';
    private url:string = 'https://api.spotify.com/v1/me/player?market=US';

    constructor(private http: Http){}

    getCurrentTrack(){
        const headers = this.setHeaders();
        return this.http.get(this.url, {
            headers: headers
        }).map((response: Response) => response.json());
    }

    setHeaders(){
        let headerToken = 'Bearer '+this.token;
        let headers = new Headers({'Authorization': headerToken});
        headers.append('Accept', 'application/json');
        return headers;
    }
}