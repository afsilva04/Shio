import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Entry } from 'app/pages/entry/entry.model';
import { EntryService } from 'app/pages/entry/entry.service';
import { Router } from '@angular/router';

@Component({
	selector: 'entry-create',
	templateUrl: './entry-create.component.html',
	providers: [EntryService]
    })
export class EntryCreateComponent{
    public title:string;
    public entry: Entry;
    public dateStruct:NgbDateStruct;    

    constructor(
        private modalService: NgbModal,
        private ngbDateParserFormatter: NgbDateParserFormatter,
        private _entrService: EntryService,
        private _router: Router
    ){ }

    ngOnInit(){
        this.title = 'Crear Entrada';
        this.entry = new Entry(0, null, 0, '', 0, 0);
    }

    createEntry(){
        this.entry.date = this.ngbDateParserFormatter.format(this.dateStruct);
        this._entrService.createEntry(this.entry).subscribe(
            response => {
                console.log('entrada creada');
                this._router.navigate(['/pages/entry-update', response.id]);
            }
        );
    }

}