import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
  standalone:true,
  imports: [IonicModule,FormsModule,CommonModule],
})
export class Home2Component  implements OnInit {

  ngOnInit() {}

  weight!: number;
  height!: number;
  bmi: number = 0;
  bmiString!: string;
  public alertButtons = ['OK'];

  constructor(private router: Router) {}
  back(){
    this.router.navigate(['./home/'])
  }

  bmiCal(){
    this.height = this.height/100;
    this.bmi = this.weight / (this.height*this.height);
    if(this.bmi < 18.5){
      this.bmiString = "UnderWeight"
    }
    else if(this.bmi > 18.5 && this.bmi < 22.90){
      this.bmiString = "Normal Weight"
    }
    else if(this.bmi > 23 && this.bmi < 24.90){
      this.bmiString = "Obesity degree 1"
    }
    else if(this.bmi < 25 && this.bmi < 29.90){
      this.bmiString = "Obesity degree 2"
    }
    else if(this.bmi > 30){
      this.bmiString = "Obesity degree 3"
    }
  }

}
