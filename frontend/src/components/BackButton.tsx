import { useRouter } from 'next/router';

export default function BackButton() {
	const router = useRouter();

	return (
		<button
			onClick={() => {
				router.back();
			}}
		>
			<svg
				width="28"
				height="28"
				viewBox="0 0 28 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M14 16.8L4.19998 26.6C3.83331 26.9667 3.36664 27.15 2.79998 27.15C2.23331 27.15 1.76664 26.9667 1.39998 26.6C1.03331 26.2333 0.849976 25.7667 0.849976 25.2C0.849976 24.6333 1.03331 24.1667 1.39998 23.8L11.2 14L1.39998 4.19998C1.03331 3.83331 0.849976 3.36664 0.849976 2.79998C0.849976 2.23331 1.03331 1.76664 1.39998 1.39998C1.76664 1.03331 2.23331 0.849976 2.79998 0.849976C3.36664 0.849976 3.83331 1.03331 4.19998 1.39998L14 11.2L23.8 1.39998C24.1667 1.03331 24.6333 0.849976 25.2 0.849976C25.7667 0.849976 26.2333 1.03331 26.6 1.39998C26.9667 1.76664 27.15 2.23331 27.15 2.79998C27.15 3.36664 26.9667 3.83331 26.6 4.19998L16.8 14L26.6 23.8C26.9667 24.1667 27.15 24.6333 27.15 25.2C27.15 25.7667 26.9667 26.2333 26.6 26.6C26.2333 26.9667 25.7667 27.15 25.2 27.15C24.6333 27.15 24.1667 26.9667 23.8 26.6L14 16.8Z"
					fill="white"
				/>
			</svg>
		</button>
	);
}