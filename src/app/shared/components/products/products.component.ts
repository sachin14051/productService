import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/model';
import { ProductStatus } from '../../const/const';
import { IdService } from '../../service/id.service';
import { BackendService } from '../../service/backend.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  productsArray:Array<Iproduct> = [];
  status = ProductStatus


  constructor(private _idService :IdService, private _database:BackendService) { }

  ngOnInit(): void {
    this.productsArray = this._database.getAllArray()

  }
//  ###########product add########################
  onAddProduct(pname:HTMLInputElement,pdesc:HTMLInputElement){
    let obj : Iproduct ={
      pname : pname.value,
      pdesc :pdesc.value,
      id :   this._idService.uuid() ,
      pstatus : ProductStatus.inprogress
    }
    pname.value='';
    pdesc.value='';
      this._database.getAddProduct(obj)
  }
  
  OnclickProcess(id:string,status:ProductStatus){
    this._database.getUpdatedStatus(id,status)

      
  }
  OnclickDispatch(id:string,status:ProductStatus){
    console.log(id,status);
    this._database.getUpdatedStatus(id,status)

  }

  OnclickDelivered(id:string,status:ProductStatus){
    console.log(id,status);
    this._database.getUpdatedStatus(id,status)
  }
}
