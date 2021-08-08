import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class BackendService {
    // What other service will I use ? 
    constructor(private http: HttpClient) {}

    // Returns an observable - // Return the data, Return the error, Unscrible the instance
    storeUsers(user) {
        return this.http.post('http://localhost:3030/api/v1/signup', user)
    }

    getUsers() {
        return this.http.get('https://api.github.com/users')
    }
}