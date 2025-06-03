import { useForm } from "react-hook-form";
import { Form } from "../../components/form";
import { ProductFormData } from "../../interfaces/IProduct";
import { useProductActions } from "@/src/hooks/use-product-actions";

export default function EditForm() {
  const { product, onSubmit } = useProductActions();
  const { control, handleSubmit } = useForm<ProductFormData>({
    defaultValues: product && { ...product },
  });

  return (
    <Form
      control={control}
      onPress={handleSubmit(onSubmit)}
      title="Editar Produto"
    />
  );
}
