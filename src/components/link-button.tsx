import { Link, LinkProps } from "expo-router";

type LinkButtonProps = LinkProps & {
  title: string;
};

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <Link className="mt-1 text-center font-body text-xl" {...rest}>
      {title}
    </Link>
  );
}
