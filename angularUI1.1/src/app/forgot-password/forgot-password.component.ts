import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataShareService } from 'app/common/data-share.service';
import { ConstantsService } from "app/common/constants.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  model = { password: '', confirmPassword: '' }
  constructor(private _sharedService: DataShareService, private constantsService: ConstantsService) { }
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  public confirmPasswordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  setLoginPageMessage() {
    this._sharedService.addDataToMap("loginPageMessage", "Password has been reset successfully");
  }

}
