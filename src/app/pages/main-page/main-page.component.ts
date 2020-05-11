import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    public trialForm: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.defineForm();
        console.log(this.trialForm.value);
    }

    public scrollToSecondPart(): void {
        const element: HTMLElement = document.getElementById('secondPart');
        element.scrollIntoView();
    }

    public get form(): { [p: string]: AbstractControl } {
        return this.trialForm.controls;
    }

    public onSubmit(): void {
        setTimeout(() => {
            console.log(this.trialForm.value);
        });
    }

    private defineForm(): void {
        this.trialForm = this.fb.group({
            email: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.email
                ])
            ],
            firstName: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(2),
                    Validators.pattern('^[A-Za-zА-Яа-яЁё\s]+$')
                ])
            ],
            middleName: [
                '',
                Validators.compose([
                    Validators.minLength(2),
                    Validators.pattern('^[A-Za-zА-Яа-яЁё\s]+$')
                ])
            ],
            lastName: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(2),
                    Validators.pattern('^[A-Za-zА-Яа-яЁё\s]+$')
                ])
            ],
            phoneNumber: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(2),
                    Validators.pattern('^(\\+7[-_()\\s]+|\\+7\\s?[(]{0,1}[0-9]{3}[)]{0,1}\\s?\\d{3}[-]{0,1}\\d{2}[-]{0,1}\\d{2})')
                ])
            ],
            sendEmailNotification: [false]
        });
    }

}
