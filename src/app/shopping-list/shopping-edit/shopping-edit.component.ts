import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @Input() ingredients!: Ingredients[];
  @ViewChild('ingredientName') ingredientName!: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmount!: ElementRef;

  addIngredients() {
    this.ingredients.push(
      new Ingredients(
        this.ingredientName.nativeElement.value,
        this.ingredientAmount.nativeElement.value
      )
    );
  }
}
