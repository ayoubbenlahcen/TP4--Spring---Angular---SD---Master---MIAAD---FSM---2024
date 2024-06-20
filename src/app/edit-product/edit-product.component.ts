import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements  OnInit{
  productId  !: number ;
  public editProductForm!:FormGroup;
  constructor(private activitedRoute : ActivatedRoute ,
              private fb: FormBuilder,
              private productService:ProductService) {
  }
    ngOnInit(): void {
      // la recouperation de id de produite envyer par le composant ProductComponent
      this.productId =  this.activitedRoute.snapshot.params['id'] ;
      // utilisation de productService pour recouperer les information du produit
      this.productService.getProductsById(this.productId).subscribe({
        next : product => {
          // definir  notre forme groupe qui va contenir les inform atin quand on veut modifier
          this.editProductForm=this.fb.group({
            id : this.fb.control(product.id),
            name : this.fb.control(product.name, [Validators.required]),
            price : this.fb.control(product.price,),
            checked : this.fb.control(product.checked),
          });
          }, error: err => {
          console.log(err)
        }
      }) ;

    }

  updateProduct() {
    let product : Product  = this.editProductForm.value ;
    this.productService.updateProduct(product).subscribe({
      next: product => {
        alert("le produit est bien updated\n"+JSON.stringify(product))
      }, error : err => {
        console.log(err)
        alert("Le produit n'est pas modifier")

      }
    }) ;
  }
}
