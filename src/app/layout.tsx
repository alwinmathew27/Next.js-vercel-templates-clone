import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/navbar/page";
// import NavBarItem from "./component/navbar/page";
import Footerbot from "./component/footer/footerbot";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });
// const roboto = Oswald({ subsets: ["latin"], weight: ["400", "700"]})


export const metadata: Metadata = {
  title: "Find your Template",
  description: "Generated by create next app",
	openGraph: {
		title: "Find your Template",
		description: "Generated by create next app",
		url: "https://vercel.com/templates",
		images:[
			{
				url: "/images/ai.jpeg", 
				alt: "Generative AI"
			}
		]
	}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<title>Find your Template</title>
			</head>
			<body className={geist.className}>
				<Header />
					{children}
				<Footerbot/>
			</body>
		</html>
	);
}

