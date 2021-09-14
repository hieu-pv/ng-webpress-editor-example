import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-webpress-editor-example';
  onSave(data: Record<string, any>): void {
    console.log(data);
  }
  onClose(e: Record<string, any>): void {
    console.log({ e });
  }
}
