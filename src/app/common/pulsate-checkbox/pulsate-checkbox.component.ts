import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'pulsate-checkbox',
    templateUrl: './pulsate-checkbox.component.html',
    styleUrls: ['./pulsate-checkbox.component.css']
})
export class PulsateCheckboxComponent implements OnInit {

    @Input()
    public form: FormGroup;
    @Input()
    public formControlName: string;
    @Input()
    public label: string;

    constructor() {
    }

    ngOnInit() {
        console.log(this.form.value);
    }

}
