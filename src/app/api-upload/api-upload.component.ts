import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropComponent } from '../drag-and-drop/drag-and-drop.component';

@Component({
  selector: 'app-api-upload',
  standalone: true,
  imports: [CommonModule, DragAndDropComponent],
  templateUrl: './api-upload.component.html',
  styleUrl: './api-upload.component.css',
})
export class ApiUploadComponent {}
