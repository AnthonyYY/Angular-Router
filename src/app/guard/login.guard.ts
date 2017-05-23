/**
 * Created by AnthonyYY on 2017/5/23.
 */
import {CanActivate} from '@angular/router';

export class LoginGuard implements CanActivate {
  canActivate() {
    const loggedIn: boolean = Math.random() < 0.5;
    console.log(loggedIn);
    if ( !loggedIn ) {
      console.log( '用户未登陆' );
    }
    return loggedIn;
  }
}
