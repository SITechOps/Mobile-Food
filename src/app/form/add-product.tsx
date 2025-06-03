import { useForm } from "react-hook-form";
import { Form } from "../../components/form";
import { ProductFormData } from "../../interfaces/IProduct";
import { useProductActions } from "@/src/hooks/use-product-actions";

export default function AddForm() {
  const { control, handleSubmit } = useForm<ProductFormData>();
  const { onSubmit } = useProductActions();

  return (
    <Form
      control={control}
      onPress={handleSubmit(onSubmit)}
      title="Adicionar Produto"
    />
  );
}
