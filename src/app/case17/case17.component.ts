import {Component, OnInit} from '@angular/core';
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {UploadFileService} from "../upload-file.service";
import {UPLOADS_LOCALSTORAGE_KEY} from "../constants";

@Component({
  selector: 'app-case17',
  templateUrl: './case17.component.html',
  styleUrls: ['./case17.component.css']
})
export class Case17Component implements OnInit {

  selectedFiles?: FileList;
  filename = "";
  currentFile?: File;
  progress = 0;
  message = '';
  errorMsg = '';

  uploadedFilenames: { filename: string, pos: number }[];
  displayedColumns = ['pos', 'filename', 'path'];

  constructor(private uploadService: UploadFileService) {
  }

  ngOnInit(): void {
    this.loadFilenames();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    let firstFile = this.selectedFiles?.item(0);
    this.filename = firstFile ? firstFile.name : "";
  }

  upload(): void {
    this.errorMsg = '';
    this.message = '';
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe((event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);

            } else if (event instanceof HttpResponse) {
              this.message = event.body.responseMessage;
              this.saveUploadedFilename(file.name);
              this.loadFilenames();
            }
          },
          (err: any) => {
            console.log(err);

            if (err.error && err.error.responseMessage) {
              this.errorMsg = err.error.responseMessage;
            } else {
              this.errorMsg = 'Error occurred while uploading a file!';
            }

            this.currentFile = undefined;
          });
      }

      this.selectedFiles = undefined;
    }
  }

  private saveUploadedFilename(filename: string) {
    const uploads = localStorage.getItem(UPLOADS_LOCALSTORAGE_KEY);
    let filenames = uploads ? JSON.parse(uploads) : [];
    filenames.push({
      filename: filename,
      pos: filenames.length + 1
    });
    localStorage.setItem(UPLOADS_LOCALSTORAGE_KEY, JSON.stringify(filenames));
  }

  private loadFilenames() {
    const uploads = localStorage.getItem(UPLOADS_LOCALSTORAGE_KEY);
    this.uploadedFilenames = uploads ? JSON.parse(uploads) : [];
  }
}
