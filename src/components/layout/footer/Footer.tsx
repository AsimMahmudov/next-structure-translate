import { Description } from "@/components/ui/text/Description";
import { GITHUB_LINK } from "@/constants/admin";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#000000] fixed bottom-0 left-0 w-full border-transparent border border-t-[#424242] py-3">

			<div className="container flex justify-center items-center">
				<Link href={GITHUB_LINK} target={"_blank"}>
					<Description className="  flex items-center   bg-[#2b2b2b00] text-[16px]  text-white px-5 py-2 rounded-lg shadow-sm shadow-transparent  border border-[#424242]   duration-200 transform hover:-translate-y-0.5  ">
						Разработал Asim<span className="text-[#9900ff]">Dev</span>
					</Description>
				</Link>
			</div>
		</footer>
  );
};

export default Footer;