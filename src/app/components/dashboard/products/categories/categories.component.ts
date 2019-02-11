import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Error } from 'src/app/interfaces/error';
import { Title } from '@angular/platform-browser';
import { ScriptService } from 'src/app/services/script.service';
declare const jQuery: any;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryForm: FormGroup;
  selParCategories: String[];
  error: Error;
  constructor(
    private title: Title,
    private scriptService: ScriptService) {
    this.title.setTitle('v-kart Categories');
    this.selParCategories = [];
  }
  ngOnInit() {
    this.initCategoryForm();
    this.scriptService.load('popper', 'bootstrapMultiselect').then((data) => {
      console.log('loaded: ', data);
      jQuery('#parent_product_catagory').bsMultiSelect();
    }).catch((err) => {
      console.error('not loaded......', err);
    });
  }
  initCategoryForm() {
    this.categoryForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null),
      parent_product_catagory: new FormControl(null)
    });
  }
  saveCategory() {
    console.log('categoryForm: ', this.categoryForm.value);
  }
  onSelParCat(event) {
    console.log('event: ', event);
  }
}
