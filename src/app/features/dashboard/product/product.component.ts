import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  searchValue = '';
  displayedColumns: string[] = [
    'name',
    'category',
    'description',
    'price',
    'symbol',
  ];
  dataSource = [
    {
      id: 1,
      name: 'Chocolate Frosted Doughnut',
      category: 'Doughnut',
      description:
        'Covered with chocolate layer, this doughnut is definitely for chocolate lovers.',
      price: 159,
      status: 1,
    },
    {
      id: 2,
      name: 'Cinnamon Twist Doughnut',
      category: 'Doughnut',
      description:
        'With fresh strawberries baked in, and a sweet, these are a perfect treat for breakfast.',
      price: 300,
      status: 1,
    },
    {
      id: 3,
      name: 'Old fashioned Doughnut',
      category: 'Doughnut',
      description:
        'Slightly crunchy on the outside, cakey and soft on the inside.',
      price: 320,
      status: 1,
    },
    {
      id: 4,
      name: 'Jelly Doughnut',
      category: 'Doughnut',
      description:
        'A jelly (or jam) doughnut is a doughnut stuffed with jelly filling.',
      price: 250,
      status: 0,
    },
    {
      id: 5,
      name: 'Mexican Green Wave',
      category: 'Pizza',
      description:
        'A pizza loaded with onions, and jalapeno with a liberal sprinkling of exotic Mexican herbs.',
      price: 800,
      status: 0,
    },
    {
      id: 6,
      name: 'Veggie Paradise',
      category: 'Pizza',
      description: 'Golden Corn, Black Olives, Capsicum & Red Paprika',
      price: 602,
      status: 0,
    },
    {
      id: 7,
      name: 'Margherita',
      category: 'Pizza',
      description:
        'A hugely popular margherita, with a deliciously tangy single cheese topping',
      price: 350,
      status: 0,
    },
  ];

  openGetter() {}

  updateProduct(id: number) {
    console.log('update');
    console.log(id);
  }
  deleteProduct(id: number) {
    console.log('delete');
    console.log(id);
  }
  onToggleChange(id: number, isChecked: boolean) {
    const status = isChecked ? 1 : 0;

    console.log(`Calling API for ID: ${id}, New Status: ${status}`);

    // Example API call (adjust according to your service)
    // this.apiService.updateStatus(id, status).subscribe(
    //   (response) => {
    //     console.log('Status updated successfully:', response);
    //   },
    //   (error) => {
    //     console.error('Error updating status:', error);
    //   }
    // );
  }
}
