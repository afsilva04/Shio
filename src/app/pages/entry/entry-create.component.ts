import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Entry } from 'app/pages/entry/entry.model';

@Component({
	selector: 'entry-create',
	templateUrl: './entry-create.component.html',
	providers: []
    })
export class EntryCreateComponent{
    public title:string;
    public entry: Entry;
    public dateStruct:NgbDateStruct;    

    constructor(
        private modalService: NgbModal,
        private ngbDateParserFormatter: NgbDateParserFormatter
    ){ }

    ngOnInit(){
        this.title = 'Crear Entrada';
        this.entry = new Entry(0, null, 0, 0);
    }

}