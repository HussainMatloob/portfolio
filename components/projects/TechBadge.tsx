type Props = {
    title: string;
};

export default function TechBadge({ title }: Props) {
    return (
        <span
            className="rounded-full
            border border-blue-500/20
            bg-blue-500/10
            px-3
            py-1
            text-xs
            font-medium
            text-blue-300"
        >
            {title}
        </span>
    );
}