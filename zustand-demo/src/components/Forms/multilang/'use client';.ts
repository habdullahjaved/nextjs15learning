"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { langService } from "@/services/admin/languages/langService";
import { vehicleService } from "@/services/vehicles/vehicleService";
import { useAuthStore } from "@/store/authStore";
import { vehicleSchema } from "@/validations/admin/vehicles/createSchema";
import { Vehicle, VehicleTranslation } from "@/lib/types/vehicle";
import Titlebar from "@/components/molecules/Titlebar";
import TranslationFields from "./TranslationFields";

const AddVehicle = () => {
  const token = useAuthStore((state: any) => state.authData.token);
  const [vehicle, setVehicle] = useState<Vehicle>({
    category_id: "",
    translations: [],
  });
  const [fieldErrors, setFieldErrors] = useState<
    Record<number, { title?: string }>
  >({});
  const [languages, setLanguages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]); // optional: for selecting vehicle category
  const router = useRouter();

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await langService.getAll();
        const langs = response.data.languages;
        setLanguages(langs);
        const translations = langs.map((lang: any) => ({
          locale: lang.locale,
          title: "",
          meta_title: "",
          meta_description: "",
          description: "",
          content: "",
        }));
        setVehicle((prev) => ({ ...prev, translations }));
      } catch (err) {
        console.error("Language fetch error:", err);
      }
    };

    fetchLanguages();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setVehicle((prev) => ({ ...prev, [name]: value }));
  };

  const handleTranslationChange = (
    index: number,
    key: keyof VehicleTranslation,
    value: string
  ) => {
    const updatedTranslations = [...vehicle.translations];
    updatedTranslations[index][key] = value;
    setVehicle((prev) => ({ ...prev, translations: updatedTranslations }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = vehicleSchema.safeParse(vehicle);

    if (!result.success) {
      const newErrors: Record<number, { title?: string }> = {};
      let firstErrorIndex: number | null = null;

      result.error.errors.forEach((err) => {
        if (err.path[0] === "translations") {
          const index = err.path[1] as number;
          const field = err.path[2] as string;

          if (field === "title") {
            if (!newErrors[index]) newErrors[index] = {};
            newErrors[index].title = "Title is required";
            if (firstErrorIndex === null) firstErrorIndex = index;
          }
        }
      });

      setFieldErrors(newErrors);
      if (firstErrorIndex !== null) {
        const el = document.querySelector(
          `[data-tab-index="${firstErrorIndex}"]`
        ) as HTMLElement;
        el?.click();
      }
      return;
    }

    setFieldErrors({});
    setLoading(true);
    const response = await vehicleService.create(result.data);
    if (response.data.status === 1) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Vehicle created successfully!",
        confirmButtonColor: "#635bff",
      }).then(() => {
        setLoading(false);
        router.push("/admin/vehicles");
      });
    }
  };

  return (
    <>
      <Titlebar title="Add Vehicle" href="/admin/vehicles" label="Back" />
      <div className="rounded-md shadow p-4 mt-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category_id"
              value={vehicle.category_id ?? ""}
              onChange={handleInputChange}
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#635bff]"
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>

          <TranslationFields
            translations={vehicle.translations}
            onChange={handleTranslationChange}
            errors={fieldErrors}
          />

          <div className="text-right">
            <button
              type="submit"
              className="bg-[#635bff] text-white px-6 py-2 rounded-md hover:bg-[#4b44e0]"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddVehicle;
