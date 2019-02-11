import { Injectable } from '@angular/core';
import { StyleStore } from './../interfaces/style';
@Injectable({
  providedIn: 'root'
})
export class StyleService {
  styles: Object;
  constructor() {
    this.styles = {};
    StyleStore.forEach((style: any) => {
      this.styles[style.name] = {
        loaded: false,
        src: style.src
      };
    });
  }
  load(...styles: string[]) {
    const promises = [];
    styles.forEach((style) => promises.push(this.loadStyle(style)));
    return Promise.all(promises);
  }

  loadStyle(name: string) {
    return new Promise((resolve, reject) => {
      if (this.styles[name].loaded) {
        resolve({ style: name, loaded: true, status: 'Already Loaded' });
      } else {
        const style = (<HTMLElement>document.createElement('link'));
        style['rel'] = 'stylesheet';
        style['href'] = this.styles[name].src;
        if (style['readyState']) {
          style['onreadystatechange'] = () => {
            if (style['readyState'] === 'loaded' || style['readyState'] === 'complete') {
              style['onreadystatechange'] = null;
              this.styles[name].loaded = true;
              resolve({ script: name, loaded: true, status: 'Loaded' });
            }
          };
        } else {
          style.onload = () => {
            this.styles[name].loaded = true;
            resolve({ style: name, loaded: true, status: 'Loaded' });
          };
        }
        style.onerror = (error: any) => resolve({ style: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(style);
      }
    });
  }
}