import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/student";
  getAllStudent(){
   return this.http.get(this.url);
  }

  saveStudnetData(data:any){
    // console.log(data)
    return this.http.post(this.url,data)
  }

  deleteStudent(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
}
