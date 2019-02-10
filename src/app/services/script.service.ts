import { Injectable } from '@angular/core';
import { ScriptStore, Script } from './../interfaces/script';
@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  private scripts: Script;
  private filesLoaded: number;
  constructor() {
    this.filesLoaded = 0;
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }
  // load(...scripts: string[]) {
  //   const promises = [];
  //   scripts.forEach((script) => promises.push(this.loadScript(script)));
  //   return Promise.all(promises);
  // }

  // loadScript(name: string) {
  //   return new Promise((resolve, reject) => {
  //     if (this.scripts[name].loaded) {
  //       resolve({ script: name, loaded: true, status: 'Already Loaded' });
  //     } else {
  //       const script = (<HTMLElement>document.createElement('script'));
  //       script.type = 'text/javascript';
  //       script.src = this.scripts[name].src;
  //       if (script.readyState) {  // IE
  //         script.onreadystatechange = () => {
  //           if (script.readyState === 'loaded' || script.readyState === 'complete') {
  //             script.onreadystatechange = null;
  //             this.scripts[name].loaded = true;
  //             resolve({ script: name, loaded: true, status: 'Loaded' });
  //           }
  //         };
  //       } else {  // Others
  //         script.onload = () => {
  //           this.scripts[name].loaded = true;
  //           resolve({ script: name, loaded: true, status: 'Loaded' });
  //         };
  //       }
  //       script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
  //       document.getElementsByTagName('head')[0].appendChild(script);
  //     }
  //   });
  // }

  // runScript(name: string) {
  //   return new Promise((resolve, reject) => {
  //     jQuery.getScript(this.scripts[name].src)
  //       .then((data) => {
  //         resolve([{ script: name, loaded: true, status: 'Loaded' }]);
  //       });
  //   });
  // }
}
