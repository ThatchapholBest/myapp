import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name!: string;
  age!: number;
  
  onSave(){
    console.log('Name:',this.name)
    console.log('Age:',this.age)
  }

  isInputEnabled1: boolean = false;
  isInputEnabled2: boolean = false;
  isInputEnabled3: boolean = false;

  constructor(private router: Router) {}
  navigatorToHome2(){
    this.router.navigate(['./home2/'])
  }

}
