import { generateReactHelpers } from "@uploadthing/react/hooks";
import { OurFileRouter, type ourFileRouter } from "@/app/api/uploadthing/core";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
