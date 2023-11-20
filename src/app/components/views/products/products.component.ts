import { Component } from '@angular/core';
import { Router } from '@angular/router';
import  Product  from 'src/app/models/Product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

products: Product[] = [];

/**
 *
 */
constructor(
private productService: ProductService,
private authService: AuthService,
private router: Router) {

  if(!this.authService.ifLoggedIn()){
    this.router.navigate(['/login']);
  }

}

ngOnInit(): void {

  this.getAll();
  
}

displayedColumns: string[] = ['id', 'name', 'price', 'category'];


deleteProduct(id: string){
console.log('foi');
  }

updateProduct(product: Product){

}

getAll(){
this.productService.getAll().subscribe(
  resposta =>{
    console.log(resposta);
    this.products = resposta;
  }
)
}

}
