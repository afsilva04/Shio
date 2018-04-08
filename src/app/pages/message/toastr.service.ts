import { Injectable } from '@angular/core';
import { ToastrService, ToastrConfig } from 'ngx-toastr';

@Injectable()
export class MessageService{
	public options:ToastrConfig;
    
    constructor(
        private _toastrService:ToastrService        
    ) { 
        this.options = this._toastrService.toastrConfig;
    }

    showSuccessToastr(message:string, title?:string){
        this.options.tapToDismiss = true;
		this.options.timeOut = 10000;
		this.options.positionClass = 'toast-top-right';

		this._toastrService.toastrConfig.timeOut = 10000;
		this._toastrService.toastrConfig.extendedTimeOut = 5000;
		this._toastrService.toastrConfig.maxOpened = 0;
		this._toastrService.toastrConfig.tapToDismiss = true;
		this._toastrService.toastrConfig.positionClass = 'toast-top-right';
		this._toastrService.toastrConfig.titleClass = 'toast-title';
		this._toastrService.toasts.push(this._toastrService['success'](message,title));
    }

    showErrorToastr(message:string, title?:string){
        this.options.tapToDismiss = true;
		this.options.timeOut = 10000;
		this.options.positionClass = 'toast-top-right';

		this._toastrService.toastrConfig.timeOut = 10000;
		this._toastrService.toastrConfig.extendedTimeOut = 5000;
		this._toastrService.toastrConfig.maxOpened = 0;
		this._toastrService.toastrConfig.tapToDismiss = true;
		this._toastrService.toastrConfig.positionClass = 'toast-top-right';
		this._toastrService.toastrConfig.titleClass = 'toast-title';
		this._toastrService.toasts.push(this._toastrService['error'](message,title));
    }

}