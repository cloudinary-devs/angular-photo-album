import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { Subject, lastValueFrom, takeUntil } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.css',
})
export class DragAndDropComponent {
  dragOver = false;
  droppedFiles: { file: File; previewUrl: string }[] = [];
  private destroy$ = new Subject<void>();
  loadingStates: boolean[] = [];

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private abortFileUpload(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroy$ = new Subject<void>();
  }

  handleDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragOver = true;
  }

  handleDragLeave(): void {
    this.dragOver = false;
  }

  async handleDrop(event: DragEvent): Promise<void> {
    event.preventDefault();
    this.dragOver = false;

    const files = Array.from(event.dataTransfer?.files || []);
    this.droppedFiles = [];
    this.loadingStates = Array.from({ length: files.length }, () => true);

    this.abortFileUpload();

    if (files && files.length > 0) {
      const url = `https://api.cloudinary.com/v1_1/${environment.CLOUD_NAME}/upload`;
      try {
        for (const file of files) {
          const formData = new FormData();
          const fields = {
            file,
            upload_preset: environment.UPLOAD_PRESET,
            tags: ['myphotoalbum-angular'],
            multiple: true,
            resource_type: 'image',
          };
          Object.entries(fields).forEach(([key, value]) => {
            if (typeof value === 'boolean') {
              formData.append(key, value.toString());
            } else {
              formData.append(key, value as string);
            }
          });

          const data = await lastValueFrom(
            this.http.post(url, formData).pipe(takeUntil(this.destroy$))
          );

          const secureUrl = (data as any).secure_url;
          const previewUrl = secureUrl.replace(
            '/upload/',
            '/upload/w_400/f_auto,q_auto/'
          );
          this.droppedFiles.push({ file, previewUrl });
          this.loadingStates[this.droppedFiles.length - 1] = false;
        }
      } catch (error) {
        console.log(error);
        this.loadingStates[this.droppedFiles.length - 1] = false;
      }
    }
  }

  isAnyLoading(): boolean {
    return this.loadingStates?.some((loading) => loading) ?? false;
  }
}
