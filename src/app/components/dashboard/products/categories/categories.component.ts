import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Error } from 'src/app/interfaces/error';
import { Title } from '@angular/platform-browser';
import { ScriptService } from 'src/app/services/script.service';
import { StyleService } from 'src/app/services/style.service';
declare const jQuery: any;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryForm: FormGroup;
  error: Error;
  constructor(
    private title: Title,
    private scriptService: ScriptService,
    private styleService: StyleService) {
    this.title.setTitle('v-kart Categories');
  }
  ngOnInit() {
    this.initCategoryForm();
    this.styleService.load('bootstrapSelect').then((data) => {
      console.log('loaded: ', data);
    }).catch((err) => {
      console.error('not loaded......', err);
    });
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
}
