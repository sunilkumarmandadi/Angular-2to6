import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
 // appTitle: string = 'myapp';
  // OR (either will work)
   appTitle = 'myapp';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
