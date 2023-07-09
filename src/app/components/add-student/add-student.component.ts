import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {StudentsService} from '../../students.service'

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor(private student:StudentsService){}

  addStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl( '' ),
  });

  message:boolean=false;
  ngOnInit():void{
    
  }
  SaveData(){
    this.student.saveStudnetData(this.addStudent.value).subscribe((result)=>{
          // console.log(result)
          this.message=true;
          this.addStudent.reset({})
    });
  }

  removeMessage(){
    setTimeout(() => {
    this.message=false;

    }, 5000);
  }
}
