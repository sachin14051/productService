import { Injectable } from '@angular/core';
import { Iproduct } from '../model/model';
import { ProductStatus } from '../const/const';

@Injectable({
  providedIn: 'root'
})
export class BackendService  {
 pArray :Array<Iproduct>= [{
  pname : "Hp Pavillion",
  pdesc : "HP Pavilion Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX GTX 1650) 15-DK2095TX Gaming Laptop  (15.6 Inch, Shadow Black & Ultra Violet, 2.23 Kg, With MS Office)",
  id : "abcdef",
  pstatus :ProductStatus.inprogress
}]
  constructor() { }

  getAllArray(){
    return this.pArray;
  }


  getAddProduct(obj : Iproduct){
   return   this.pArray.unshift(obj)
  }

  getUpdatedStatus(id:string,newstatus:ProductStatus){
     this.pArray.forEach(e => {
      if(e.id === id){
        e.pstatus = newstatus
        return
      }
     
   })
   
  }
}
