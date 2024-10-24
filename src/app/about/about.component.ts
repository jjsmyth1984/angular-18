import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [
        NgClass,
        NgForOf
    ],
    providers: [UserService],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

    users = [];

    // Constructor inject UserService
    constructor(private userService: UserService) {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.userService.getUsers().subscribe((users:any)=> {
            this.users = users;
        });
    }

}
