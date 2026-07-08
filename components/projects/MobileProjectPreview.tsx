import Image from "next/image";

type Props = {
    screenshots: string[];
};

export default function MobileProjectPreview({
    screenshots,
}: Props) {
    return (
        <div
            className="
            relative
            h-[340px]
            overflow-hidden
            bg-gradient-to-br
            from-slate-900
            via-[#111827]
            to-slate-900"
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl" />

            {/* Phone 1 */}
            {screenshots[0] && (
                <div
                    className="
                    absolute
                    bottom-0
                    left-[18%]
                    h-[285px]
                    w-[140px]
                    rotate-[-10deg]
                    overflow-hidden
                    rounded-lg
                    border
                    border-white/10
                  shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
                >
                    <Image
                        src={screenshots[0]}
                        alt=""
                        fill
                        sizes="200px"
                        className="object-cover"
                    />
                </div>
            )}

            {/* Phone 2 */}
            {screenshots[1] && (
                <div
                    className="
                    absolute
                    bottom-0
                    right-[18%]
                    h-[300px]
                    w-[145px]
                    rotate-[8deg]
                    overflow-hidden
                    rounded-lg
                    border
                    border-white/10
                   shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
                >
                    <Image
                        src={screenshots[1]}
                        alt=""
                        fill
                        sizes="200px"
                        className="object-cover"
                    />
                </div>
            )}

            {/* Phone 3 */}
            {screenshots[2] && (
                <div
                    className="
                    absolute
                    top-8
                    left-1/2
                    h-[210px]
                    w-[105px]
                    -translate-x-1/2
                    overflow-hidden
                    rounded-lg
                    border
                    border-white/10
                    opacity-30
                    shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
                >
                    <Image
                        src={screenshots[2]}
                        alt=""
                        fill
                        sizes="200px"
                        className="object-cover"
                    />
                </div>
            )}
        </div>
    );
}