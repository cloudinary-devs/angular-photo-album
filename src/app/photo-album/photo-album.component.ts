import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CldImageComponent } from '../cld-image/cld-image.component';

@Component({
  selector: 'app-photo-album',
  standalone: true,
  imports: [CommonModule, CldImageComponent, HttpClientModule],
  templateUrl: './photo-album.component.html',
  styleUrl: './photo-album.component.css',
})
export class PhotoAlbumComponent {
  photos: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData('myphotoalbum-angular');
  }

  getData(tag: string): void {
    this.http
      .get(
        `https://res.cloudinary.com/${environment.CLOUD_NAME}/image/list/${tag}.json`
      )
      .subscribe((data: any) => {
        this.photos = data.resources;
      });
  }
}
