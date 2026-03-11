import { Component } from "@angular/core";

@Component({
    selector:'app-signin-component',  
    template:`<h2>Sign In</h2>`,
    styles:[`
        h2 {
            color: blue;
        }
    `]
})

export class SignInComponent {
    title = 'Sign In';
}