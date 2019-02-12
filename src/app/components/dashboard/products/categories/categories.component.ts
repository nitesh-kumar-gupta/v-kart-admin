import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Error } from 'src/app/interfaces/error';
import { Title } from '@angular/platform-browser';
import { ScriptService } from 'src/app/services/script.service';
import { StyleService } from 'src/app/services/style.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interfaces/category';
declare const jQuery: any;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryForm: FormGroup;
  protected categroy: Category[];
  selParCategories: String[];
  error: Error;
  constructor(
    private title: Title,
    private scriptService: ScriptService,
    private styleService: StyleService,
    private categoryService: CategoryService) {
    this.title.setTitle('v-kart Categories');
    this.selParCategories = [];
    this.categroy = [];
  }
  ngOnInit() {
    this.initCategoryForm();
    this.retrieveCategory();
  }
  initializeBootstrapSelect() {
    const self = this;
    this.styleService.load('bootstrapMultiselect').then((data) => {}).catch((err) => { console.error('css not loaded......', err); });
    this.scriptService.load('bootstrapMultiselect').then((data) => {
      jQuery('#parent_product_catagory').multiselect({
        enableFiltering: true,
        onChange: function(option, checked, select) {
          let value = jQuery(option).val().split(':')[1].trim();
          value = value.substring(1, value.length - 1);
          if (checked) {
            self.selParCategories.push(value);
          } else {
            self.selParCategories.splice(self.selParCategories.indexOf(value), 1);
          }
        }
      });
    }).catch((err) => { console.error('js not loaded......', err); });
  }
  retrieveCategory(id = 'all') {
    this.categoryService.retrieveCategory(id).subscribe((success) => {
      this.categoryService.setCategory(success);
      this.categroy = success;
      this.initializeBootstrapSelect();
    }, (error) => {
      console.error('getCategory error: ', error);
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
    if (this.categoryForm.valid) {
      this.categoryForm.patchValue({
        parent_product_catagory: this.selParCategories
      });
      this.categoryService.addCategory(this.categoryForm.value).subscribe((success) => {
        this.retrieveCategory();
        this.initCategoryForm();
        jQuery('#categoryModal').modal('hide');
      }, (error) => {
        console.error('saveCategory error: ', error);
      });
    }
  }
  editCategory(id) {
    console.log('edit: ', id);
  }
  deleteCategory(id) {
    console.log('delete: ', id);
  }
}
