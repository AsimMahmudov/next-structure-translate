import { TitleComponent } from "@/components/ui/text/TitleComponent";
import Link from "next/link";
import LanguageSelect from "./LanguageModal";

const Header = () => {
	return (
		<header className="bg-[#000000] fixed top-0 left-0 w-full border-transparent z-50 border border-b-[#424242] py-3">
			<div className="container flex justify-between items-center">
				<Link href={"/"}>
					<TitleComponent className="text-white md:text-[24px] text-[22px] ">
						Asim<span className="text-[#9900ff]">Dev</span>
					</TitleComponent>
				</Link>

				<LanguageSelect />
			</div>
		</header>
	);
};

export default Header;
