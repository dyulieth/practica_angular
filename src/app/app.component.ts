import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practica';
  array = ['Dennys', 'Yulieth', 'Mauricio'];
  products = [
    {
      id: '1',
      image: 'assets/images/imagen1.jpg',
      title: 'Mascarilla Aloe vera',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/imagen2.jpg',
      title: 'Mascarilla Ice cream',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/imagen3.jpg',
      title: 'Esencia de caracol',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/imagen4.jpg',
      title: 'Brillo Ushas',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/imagen5.jpg',
      title: 'Vitamina C para ojos',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/imagen6.jpg',
      title: 'Jabon Facial',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];
  addItem(){
    this.array.push('nuevo item');
  }

  deleteItem(index: number){
    this.array.splice(index);
  }
}
