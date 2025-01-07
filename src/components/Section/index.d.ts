export type Props = {
    backgroundColor: 'red' | 'white' | 'blue';
    children: JSX.Element;
    padding?: number;
} & React.HTMLAttributes<HTMLDivElement>;
declare const Section: ({ backgroundColor, children, padding, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export default Section;
