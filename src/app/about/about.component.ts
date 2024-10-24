import {Component, inject} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [
        NgClass,
        NgForOf
    ],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent {

    constructor() {
    }

}
