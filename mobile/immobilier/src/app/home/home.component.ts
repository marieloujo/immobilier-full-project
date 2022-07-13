import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    slides = [
        {
            title: 'Example Title',
            description: 'Example Description',
            okButtonText: 'Continue',
            skipButtonText: 'Skip',
            backgroundColor: '#8A63B3',
            imageUrl: 'res://slide_1',
            animation: 'slide_left'
        },
        {
            title: 'Example Title',
            description: 'Example Description',
            okButtonText: 'Continue',
            skipButtonText: 'Skip',
            backgroundColor: '#8A63B3',
            imageUrl: 'res://slide_2',
            animation: 'slide_left'
        },
        {
            title: 'Example Title',
            description: 'Example Description',
            okButtonText: 'Continue',
            skipButtonText: 'Skip',
            backgroundColor: '#8A63B3',
            imageUrl: 'res://slide_3',
            animation: 'slide_left'
        }
    ];

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    finish() {

    }
}
