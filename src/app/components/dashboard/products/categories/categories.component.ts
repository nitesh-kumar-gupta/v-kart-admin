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
  selParCategories: String[];
  error: Error;
  constructor(
    private title: Title,
    private scriptService: ScriptService,
    private styleService: StyleService) {
    this.title.setTitle('v-kart Categories');
    this.selParCategories = [];
  }
  ngOnInit() {
    const self = this;
    this.initCategoryForm();
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
      console.log('categoryForm: ', this.categoryForm.value);
    }
  }
}
