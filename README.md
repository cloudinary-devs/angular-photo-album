# Setup

Create an unsigned upload preset in your Cloudinary product environment.

Create `/src/environments/environment.ts` with the following content:

```js
export const environment = {
  CLOUD_NAME: "YOUR-CLOUD-NAME",
  UPLOAD_PRESET: "YOUR-UNSIGNED-UPLOAD-PRESET",
};
```

# Run

`(npx) ng serve` or `(npx) ng build`
