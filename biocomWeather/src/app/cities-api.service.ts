import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesApiService {
  private SERVER_URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public getCities(){  
		return this.httpClient.get(this.SERVER_URL);  
	} 
}


	

	 