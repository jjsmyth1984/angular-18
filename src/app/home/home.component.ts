import {Component} from '@angular/core';
import {NgFor, NgIf} from "@angular/common";
import {LoggerService} from "../../services/logger.service";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        NgIf,
        NgFor
    ],
    providers: [LoggerService],
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent {

    // Constructor inject LoggerService
    constructor(private loggerService: LoggerService) {
    }
}