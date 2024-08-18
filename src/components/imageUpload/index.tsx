import { ImageUp } from "lucide-react";

import { InputProps } from "../ui/input";

type ImageUploadProps = InputProps & {
  containerSize?: "medium" | "large";
};

export function ImageUpload({ containerSize = "medium", ...rest }: ImageUploadProps) {
  const containerStyle = containerSize === "medium" ? "size-[120px]" : "w-[415px] h-[340px]";

  return (
    <div className={`flex items-center justify-center rounded-xl bg-popover ${containerStyle}`}>
      <label
        htmlFor="file-dropzone"
        className={`flex size-full flex-col items-center justify-center ${containerStyle}`}
      >
        <ImageUp className="text-primary" size={32} />
        <input {...rest} type="file" id="file-dropzone" className="hidden" />
      </label>
    </div>
  );
}
