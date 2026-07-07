type Props = {
    title: string;
};

export default function SkillBadge({ title }: Props) {
    return (
        <span
            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
        >
            {title}
        </span>
    );
}