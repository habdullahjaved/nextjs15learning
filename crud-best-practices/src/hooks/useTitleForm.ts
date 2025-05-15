import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { titleSchema } from "@/schemas/titleSchema";
import { TitleFormData } from "@/schemas/titleSchema";

export const useTitleForm = () =>
  useForm<TitleFormData>({
    resolver: zodResolver(titleSchema),
    defaultValues: {
      title: "",
    },
  });
