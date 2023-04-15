export default function AnimatedGradient({
	fromColor,
	toColor,
	left,
	right,
	top,
	bottom,
}: {
	fromColor: string;
	toColor: string;
	right?: number | null;
	bottom?: number | null;
	top?: number | null;
	left?: number | null;
}) {
	return (
		<div
			style={{
				position: 'absolute',
				background: `radial-gradient(50% 50% at 50% 50%, ${fromColor} 0%, rgba(0, 0, 0, 0) 100%)`,
				height: '200px',
				width: '200px',
				right: right + 'px',
				left: left + 'px',
				top: top + 'px',
				bottom: bottom + 'px',
			}}
		/>
	);
}
