import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface SketchResponse {
  "id": number
  "user_id": number
  "title": string
  "image": string
  "note": string
}

@Injectable({
  providedIn: 'root'
})

export class SketchService {

  constructor(private httpClient: HttpClient) {}

  saveSketch(inputData: object) {
    return this.httpClient.post(`http://127.0.0.1:8000/sketches`, inputData);
  }

  getSketches() {
    return this.httpClient.get(`http://127.0.0.1:8000/sketches`);
  }

  getSketch(sketchId: any) {
    return this.httpClient.get(`http://127.0.0.1:8000/sketches/${sketchId}`);
  }

  updateSketch(inputData:any, sketchId: any) {
    return this.httpClient.patch(`http://127.0.0.1:8000/sketches/${sketchId}`, inputData);
  }

  destroySketch(sketchId: any) {
    return this.httpClient.delete(`http://127.0.0.1:8000/sketches/${sketchId}`)
  }

}
