# Introduction
This application showcases how to integrate the Cloudinary's Angular SDK. The sample project showcases the following functionality:

* Using the Upload Widget
* Uploading via API calls
* Displaying transformed images
  
# Setup

Create an unsigned upload preset in your Cloudinary product environment and make note the name of the unsigned upload preset as well as your Cloudinary cloud name.

Create `/src/environments/environment.ts` with the following content:

```js
export const environment = {
  CLOUD_NAME: "YOUR-CLOUD-NAME",
  UPLOAD_PRESET: "YOUR-UNSIGNED-UPLOAD-PRESET",
};
```

# Run

From your terminal run `(npx) ng serve` and follow the instructions to see this sample project.
