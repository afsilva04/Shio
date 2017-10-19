import { Component, ViewEncapsulation } from '@angular/core';
import { EntsalHeader } from './entsal-header.model';
import { EntsalItem } from './entsal-item.model';

@Component({
	selector: 'transaction-out',
	templateUrl: './transaction-out.component.html',
	encapsulation: ViewEncapsulation.None
	})
export class TransactionOutComponent{
	public title:string;
	public itemsTitle:string;
	public header:EntsalHeader;
	public item:EntsalItem;
	public item1:EntsalItem;
	public item2:EntsalItem;
	public items:EntsalItem[];
	public mode:string;

	  public data = [];
	  public settings = {
	    selectMode: 'single',  //single|multi
	    hideHeader: false,
	    hideSubHeader: false,
	    actions: {
	      columnTitle: 'Actions',
	      add: true,
	      edit: true,
	      delete: true,
	      custom: [],
	      position: 'right' // left|right
	    },
	    add: {     
	      addButtonContent: '<h4 class="mb-1"><i class="fa fa-plus ml-3 text-success"></i></h4>',
	      createButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
	      cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
	    },
	    edit: {
	      editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>',
	      saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
	      cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
	    },
	    delete: {
	      deleteButtonContent: '<i class="fa fa-trash-o text-danger"></i>',
	      confirmDelete: true
	    },
	    noDataMessage: 'No data found',
	    columns: {     
	      id: {
	        title: 'ID',
	        editable: false,
	        width: '60px',
	        type: 'html',
	        valuePrepareFunction: (value) => { return '<div class="text-center">' + value + '</div>'; }       
	      },
	      firstName: {
	        title: 'First Name',
	        type: 'string',
	        filter: true
	      },
	      lastName: {
	        title: 'Last Name',
	        type: 'string'
	      },
	      username: {
	        title: 'Username',
	        type: 'string'
	      },
	      email: {
	        title: 'E-mail',
	        type: 'string'
	      },
	      age: {
	        title: 'Age',
	        type: 'number'
	      }
	    },
	    pager: {
	      display: true,
	      perPage: 10
	    }
	  };	

	constructor(){
		this.title = 'Crear Salida';
		this.header = new EntsalHeader('','','','','','');
		this.item = new EntsalItem('','','','','','',false, '');
		this.item1 = new EntsalItem('1','Producto','Dabalash','2','1850','0', true, 'Obregon');
		this.item2 = new EntsalItem('2','Servicio','Corte','1','150','20', false, 'Obregon');
		this.items = []; //[ this.item1, this.item2 ];
		this.mode = 'add';
		this.itemsTitle = 'Agregar Item';

	    this.getData((data) => {
	      this.data = data;
	    });		
	}

	onSubmit(){
		console.log(this.header);
	}

	onSubmitAddItem(){
		//Llamar servicio de agregar item
		//si pudo agregar
		let itemToAdd = new EntsalItem('',this.item.type, this.item.concept, 
			this.item.quantity, this.item.price, this.item.aditional, 
			this.item.anticipated, this.item.subsidiary);

		this.items.push(itemToAdd);
		
		this.item.id = '';
		this.item.type = '';
		this.item.concept = '';
		this.item.quantity = '';
		this.item.price = '';
		this.item.aditional = '';
		this.item.anticipated = false;
		this.item.subsidiary = '';
	}	

	OnSubmitUpdateItem(id){
		//Llamar servicio de modificación por id
		//Si e pudo modificar -> Actualizar lista de items

		console.log(this.item.price);

		this.item.id = '';
		this.item.type = '';
		this.item.concept = '';
		this.item.quantity = '';
		this.item.price = '';
		this.item.aditional = '';
		this.item.anticipated = false;
		this.item.subsidiary = '';		

		this.mode = 'add';
		this.itemsTitle = 'Agregar Item';
	}

	public getData(data) {
		const req = new XMLHttpRequest();
		req.open('GET', 'assets/data/users.json');
		req.onload = () => {
		  data(JSON.parse(req.response));
		};
		req.send();
	}

	public onDeleteConfirm(event): void {
		if (window.confirm('Are you sure you want to delete?')) {
		  event.confirm.resolve();
		} else {
		  event.confirm.reject();
		}
	}

	public onRowSelect(event){
	// console.log(event);
	}

	public onUserRowSelect(event){
	//console.log(event);   //this select return only one page rows
	}

	public onRowHover(event){
	//console.log(event);
	}	

	public editItemForm(index){
		let itemIndex = this.items[index];
		let itemToUpdate = new EntsalItem(itemIndex.id, itemIndex.type, itemIndex.concept, 
			itemIndex.quantity, itemIndex.price, itemIndex.aditional, 
			itemIndex.anticipated, itemIndex.subsidiary);

		this.item = itemToUpdate;

		this.mode = 'update';
		this.itemsTitle = 'Modificar Item';
	}

	public deleteItem(index){
		let itemToDelete = this.items[index];
		console.log(itemToDelete);
		//Llamar servicio borrar por id
		//Si pudo borrar
		this.items.splice(index,1);
	}

	public cancelUpdate(){
		this.item.id = '';
		this.item.type = '';
		this.item.concept = '';
		this.item.quantity = '';
		this.item.price = '';
		this.item.aditional = '';
		this.item.anticipated = false;
		this.item.subsidiary = '';		

		this.mode = 'add';		
		this.itemsTitle = 'Agregar Item';
	}

}