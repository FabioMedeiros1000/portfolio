export type Props = {
    children: React.ReactNode;
    bgColor: 'red' | 'white';
    type?: 'button' | 'submit';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const Button: ({ children, bgColor, type, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export default Button;
