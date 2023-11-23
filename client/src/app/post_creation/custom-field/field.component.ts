import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
  Output
} from '@angular/core';

@Component({
  selector: 'add-category-field',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label>Custom Field Name:<input type="text" id="inputField" name="inputName" value="{{ fieldName }}"></label><br>
    <label>Custom Instructions:<br><textarea id="disabledInputField" name="inputPlaceholder" rows="4" cols="50">{{fieldInstructions}}</textarea></label><br>
    <textarea id="disabledInputField" name="inputPlaceholder" disabled rows="4" cols="50">
      Students will type their responses in here.
    </textarea>
    <br>
    <input type="button" (click)="onClick()" value="Delete"><br>
  `,
  styleUrls: ['./field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes are happen');
  }

  @Output() deleted = new EventEmitter<any>();

  constructor(private host: ElementRef<HTMLElement>) {}

  onClick() {
    this.host.nativeElement.remove();
    this.deleted.emit(null);
  }

  @Input() name: string = "This is a test";
  @Input() fieldInstructions: string = "Placeholder Instructions";
  @Input() fieldName: string = "Placeholder String";

}