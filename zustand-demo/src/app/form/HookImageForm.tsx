"use client";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { UploadCloud } from "lucide-react";

export function HookImageForm() {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [data, setData] = useState("");
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      console.log("Watched change", name, value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setValue("images", files); // Register manually
    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previewUrls);
  };

  const onSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("category", data.category);
    formData.append("aboutYou", data.aboutYou);
    data.images?.forEach((file: File) => {
      formData.append("images", file);
    });

    setData(JSON.stringify({ ...data, images: data.images?.length }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4">
        <input
          className="rounded border focus:ring-1 focus:ring-gray-500 p-2"
          {...register("firstName")}
          placeholder="First name"
        />

        <select
          className="rounded border focus:ring-1 focus:ring-gray-500 p-2"
          {...register("category", { required: true })}
        >
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>

        <textarea
          className="rounded border focus:ring-1 focus:ring-gray-500 p-2 col-span-2"
          {...register("aboutYou")}
          placeholder="About you"
        />

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          multiple
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />

        {/* Styled file uploader */}
        <div
          className="col-span-2 flex items-center justify-center border-2 border-dashed rounded-md p-6 cursor-pointer hover:bg-gray-100 transition"
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="text-center text-gray-600">
            <UploadCloud className="mx-auto mb-2 w-8 h-8 text-gray-400" />
            <p className="text-sm">
              <strong>Click to upload</strong> or drag and drop (not yet active)
            </p>
            <p className="text-xs text-gray-500">PNG, JPG up to 5MB each</p>
          </div>
        </div>

        {/* Previews */}
        <div className="col-span-2 flex gap-3 flex-wrap mt-2">
          {imagePreviews.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`preview-${i}`}
              className="w-24 h-24 object-cover rounded shadow"
            />
          ))}
        </div>
      </div>

      <p className="mt-4 whitespace-pre-wrap break-all text-sm">{data}</p>

      <div className="flex justify-end">
        <input
          className="bg-green-600 mt-4 px-4 py-2 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 transition"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  );
}
