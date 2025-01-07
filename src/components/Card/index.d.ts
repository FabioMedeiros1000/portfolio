export type CardProps = {
    titleCard: string;
    text: string;
    stacks?: string[];
    links?: {
        github: string;
        demo: string;
    };
} & React.HTMLAttributes<HTMLDivElement>;
declare const Card: ({ titleCard, text, ...rest }: CardProps) => import("react/jsx-runtime").JSX.Element;
export default Card;
