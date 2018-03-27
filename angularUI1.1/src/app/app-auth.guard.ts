import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/common/auth.service';

@Injectable()
export class AppAuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) { }
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url;
		return this.checkLogin(url);
	}

	checkLogin(url: string): boolean {
		if (this.authService.getLoginStatus()) { return true; }

		this.router.navigate(['/Login']);
		return false;
	}
}
