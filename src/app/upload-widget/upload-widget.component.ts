import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptService } from '../script.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-upload-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-widget.component.html',
  styleUrl: './upload-widget.component.css',
})
export class UploadWidgetComponent {
  uploadedImage = '';
  isDisabled = false;
  uploadedImages: string[] = [];

  constructor(private scriptService: ScriptService) {
    this.scriptService.load('uw');
  }

  processResults = (error: any, result: any): void => {
    if (result.event === 'close') {
      this.isDisabled = false;
    }
    if (result && result.event === 'success') {
      const secureUrl = result.info.secure_url;
      const previewUrl = secureUrl.replace('/upload/', '/upload/w_400/');
      this.uploadedImages.push(previewUrl);
      this.isDisabled = false;
    }
    if (error) {
      this.isDisabled = false;
    }
  };

  cloudName = environment.CLOUD_NAME;
  uploadPreset = environment.UPLOAD_PRESET;

  uploadWidget = (): void => {
    this.isDisabled = true;
    window.cloudinary.openUploadWidget(
      {
        cloudName: this.cloudName,
        uploadPreset: this.uploadPreset,
        sources: ['local', 'url'],
        tags: ['myphotoalbum-angular'],
        clientAllowedFormats: ['image'],
        resourceType: 'image',
      },
      this.processResults
    );
  };
}
