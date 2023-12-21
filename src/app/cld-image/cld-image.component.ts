import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudinaryModule, placeholder } from '@cloudinary/ng';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { environment } from '../../environments/environment';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';

@Component({
  selector: 'app-cld-image',
  standalone: true,
  imports: [CommonModule, CloudinaryModule],
  templateUrl: './cld-image.component.html',
  styleUrl: './cld-image.component.css',
})
export class CldImageComponent {
  @Input() publicId: string = '';

  myImage!: CloudinaryImage;
  plugins = [placeholder()];

  ngOnInit(): void {
    const cld = new Cloudinary({
      cloud: {
        cloudName: environment.CLOUD_NAME,
      },
    });
    this.myImage = cld
      .image(this.publicId)
      .resize(thumbnail().width(300).height(300).gravity(autoGravity()))
      .delivery(format('auto'))
      .delivery(quality('auto'));
  }
}
