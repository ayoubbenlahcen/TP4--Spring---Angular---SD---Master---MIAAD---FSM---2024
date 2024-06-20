import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Router} from "@angular/router";
import {AppStateService} from "../services/app-state.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{


  constructor(private productService:ProductService ,
              private  router : Router,
              protected appStateService :AppStateService
              ) {
  }
  ngOnInit() {
    this.SearchProducts();
  }

  SearchProducts(){
    /*
    this.appStateService.setProductState({
      status : "LOADING"
    }) ;
     */
    this.productService.getProducts(this.appStateService.productsState.keyword ,
    this.appStateService.productsState.currentPage,
    this.appStateService.productsState.pageSize)
      .subscribe({
        next : resp => {
          this.appStateService.productsState.products= resp.body as Product[] ;
          /*
          je sais que le x-total-countil va etre un entier c'est pour ce la
          on ajouter !
           */
          let totalProducts: number  =  parseInt(resp.headers.get('x-total-count')!) ;
          console.log('total products'+ totalProducts)
          let totalPages : number = Math.floor(totalProducts/this.appStateService.productsState.pageSize) ;
          //this.appStateService.productsState.totalPages = Math.floor(totalProducts/this.appStateService.productsState.pageSize) ;
          if ((totalProducts % this.appStateService.productsState.pageSize)!=0){
            totalPages +=1  ;
            // this.appStateService.productsState.totalPages +=1 ;
          }
          console.log("Total pages : "+this.appStateService.productsState.totalPages)
          // sauvegarder le nombre total des produits  dans le appStateService
          //this.appStateService.productsState.totalProducts = totalProducts ;
          this.appStateService.setProductState({
            products : resp.body as Product[] ,
            totalProducts : totalProducts ,
            totalPages : totalPages ,
            //status : "LOADED" ,
          })
        },
        error : err => {
          console.log(err);
          this.appStateService.setProductState({
            status : 'ERROR' ,
            errorMessage : err
          })
        }
      })
    //this.products=this.productService.getProducts();
  }

  handleCheckProduct(product: Product) {
    this.productService.checkProduct(product).subscribe({
      next :updatedProduct => {
        product.checked=!product.checked;
        //this.getProducts();
      }
    })
  }

  handleDelete(product: Product) {
    if(confirm("Etes vous sure?"))
      this.productService.deleteProduct(product).subscribe({
        next:value => {
          //this.getProducts();
          this.appStateService.productsState.products=this.appStateService.productsState.products.filter(p=>p.id!=product.id);
          this.SearchProducts() ;
        }
      })
  }

/*
  //alors ici on va ignore cette par ce que getProduct on a essayer d l'tiliser pour recoupere les prosuite
  // et aussi faire  la recheche sur des produit
  searchProducts() {
    this.currentPage = 1 ;
    this.totalPages = 0  ;
    this.productService.searchProducts(this.keyword, this.currentPage , this.pageSize).subscribe({
      next : value => {
        this.products=value;
        //alors ici on est besoin de recalculer le total pages
        // alors est ce que il n'y a pas d'autre facon par exemple utlisation de la fonction getProfucts
        // definie precidament -----> la reponce c'est oui
      }
    })
  }
 */

  handelGotToPage(page: number) {
    this.appStateService.productsState.currentPage  = page ;
    this.SearchProducts()
  }

  handleEditProduct(product: Product) {
    this.router.navigateByUrl(`/admin/editProduct/${product.id}`)
  }
}
