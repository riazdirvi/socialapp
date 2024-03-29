import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  // currentUser$: Observable<User | null> = of(null);

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {

    // this.currentUser$ = this.accountService.currentUser$;
  }


  login() {
    console.log(this.model);
    this.accountService.login(this.model).subscribe({
      next: (user) => {
        console.log(user)       
      },
      error: (error) => console.error(error),
      complete: () => console.log('Login completed')
    });
  }

  logout() {
    this.accountService.logout();    
  }
}
