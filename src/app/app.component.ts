import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template_drivern_forms by XperTuto.com';

  /* app.component.ts */
  onSubmit(userForm: NgForm): void {
    console.log(userForm.value);
  }

  resetForm(userForm: NgForm): void {
    userForm.resetForm();
  }
}
