import Link from 'next/link';
import AnimatedGradient from '@/components/AnimatedGradient';

function MenuItem({ href, title }: { href: string; title: string }) {
	return (
		<Link
			href={href}
			className="group rounded-lg border border-transparent px-6 py-4"
			rel="noopener noreferrer"
		>
			<h2 className="flex text-2xl font-semibold">
				{`${title} `}
				<span className="ml-3 flex items-center justify-center transition-transform opacity-0 group-hover:translate-x-2 group-hover:opacity-100 motion-reduce:transform-none">
					<svg
						width="24"
						height="24"
						viewBox="0 0 28 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15.9687 1.22502L27.5187 12.775C27.6937 12.95 27.818 13.1396 27.8915 13.3438C27.965 13.5479 28.0011 13.7667 28 14C28 14.2334 27.9632 14.4521 27.8897 14.6563C27.8162 14.8604 27.6926 15.05 27.5187 15.225L15.9687 26.775C15.6479 27.0958 15.2466 27.2633 14.7647 27.2773C14.2829 27.2913 13.8676 27.1238 13.5187 26.775C13.1687 26.4542 12.9861 26.0528 12.971 25.571C12.9558 25.0892 13.1238 24.6738 13.475 24.325L22.05 15.75L2.49372 15.75C1.99789 15.75 1.58197 15.582 1.24597 15.246C0.909973 14.91 0.742556 14.4947 0.743721 14C0.743721 13.5042 0.91114 13.0883 1.24597 12.7523C1.58081 12.4163 1.99672 12.2488 2.49372 12.25L22.05 12.25L13.475 3.67502C13.1541 3.35419 12.9861 2.94585 12.971 2.45002C12.9558 1.95418 13.1238 1.54585 13.475 1.22502C13.7958 0.875019 14.2041 0.700016 14.7 0.700016C15.1958 0.700016 15.6187 0.875019 15.9687 1.22502Z"
							fill="white"
						/>
					</svg>
				</span>
			</h2>
		</Link>
	);
}

export default function Home() {
	return (
		<main className="min-h-screen">
			<AnimatedGradient
				bottom={0}
				right={0}
				fromColor="#f6d365"
				toColor="#fda085"
			/>

			<h1>Spark</h1>
			<p>
				Create your own adventure using Ai to generate images and test that
				inspire you and match your style
			</p>

			<MenuItem title="Start" href="" />
			<MenuItem title="Bookshelf" href="/bookshelf" />
			<MenuItem title="About" href="/about" />

			<footer>
				<p>Team Code Vision submission</p>
				<p>
					<a href="https://lablab.ai">lablab.ai</a> stable diffusion 2.0
					hackatlon
				</p>
			</footer>
		</main>
	);
}
