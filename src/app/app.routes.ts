import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./welcome/welcome.component').then((mod) => mod.WelcomeComponent),
  },
  {
    path: 'upload',
    loadComponent: () =>
      import('./upload-widget/upload-widget.component').then(
        (mod) => mod.UploadWidgetComponent
      ),
  },
  {
    path: 'apiupload',
    loadComponent: () =>
      import('./api-upload/api-upload.component').then(
        (mod) => mod.ApiUploadComponent
      ),
  },
  {
    path: 'album',
    loadComponent: () =>
      import('./photo-album/photo-album.component').then(
        (mod) => mod.PhotoAlbumComponent
      ),
  },
];
