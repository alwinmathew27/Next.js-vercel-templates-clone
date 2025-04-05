import Link from "next/link";
import Image from "next/image";
import carddata from "./dynamicpage.json";
import Geistspace from "../../component/geist_spacer/geistspace";
import CommonBtn from "@/app/component/general/CommonBtn";
// this is a dynamic page that will take the id from the url and show the Template details

// Helper function for random card selection
const getRandomCards = (cards: any[], currentId: number, count: number) => {
  const filteredCards = cards.filter((card) => card.id !== currentId);
  const shuffled = [...filteredCards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const card = carddata.find((card) => card.id === parseInt(id));

  if (!card) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="wrapper min-h-screen bg-background py-4 mt-16 lg:py-8">
      {/* <div className="m py-4 "> */}
      {/* Main Content Section */}
      <div className="grid gap-12 lg:grid-cols-12 mb-8 lg:mb-16">
        {/* Left Section */}
        <div className="order-2 lg:order-1 space-y-6  lg:col-span-4 xl:col-span-5">
          <Link
            href="/"
            className=" items-center text-sm text-gray-500 hover:text-gray-900 lg:block hidden "
          >
            ← Back to Templates
          </Link>

          <div className="space-y-4">
            <div className="hero_tag inline-flex items-center rounded text-gray-500 px-2.5 py-0.5 text-sm font-semibold">
              {card.hero_tag}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl break-words">
              {card.title}
            </h1>

            <p className="text-sm sm:text-xl text-gray-500">
              {card.description}
            </p>
            <div className="flex flex-row gap-4 pt-2 ">
              <CommonBtn padding="px-4 sm:px-8 py-1 sm:py-3" hoverColor = "hover:bg-black-100" bgColor="bg-black" textColor="text-white" className="font-normal text-xs sm:text-base"  text="Deploy"/>
              <CommonBtn padding="px-4 sm:px-8 py-1 sm:py-3" hoverColor = "hover:bg-blue-100" bgColor="bg-white" textColor="text-black" className=" font-normal text-xs sm:text-base"  text="View Demo" border = "border border-gray-200"/>
            </div>
          </div>

          <div className="space-y-4 p-3">
            <div className="flex justify-between border-b py-2">
              <span className="text-gray-500">Framework</span>
              <span className="text-gray-500">{card.Framework}</span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span className="text-gray-500">Use Case</span>
              <span className="text-gray-500">{card.usecase}</span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span className="text-gray-500">CSS</span>
              <span className="text-gray-500">{card.css}</span>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 right-section md:col-span-4 lg:col-span-8 xl:col-span-7   ">
          <div>
            <Link
              href="/"
              className=" items-center text-sm text-gray-500 hover:text-gray-900 lg:hidden block mb-4"
            >
              ← Back to Templates
            </Link>
          </div>
          <div className=" h-[400px] lg:h-[400px] relative rounded-2xl shadow-2xl overflow-hidden  ">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover shadow-2xl w-[100%] h-[100%]  "
              priority
            />
          </div>
        </div>
      </div>

      {/* Related templates Section */}
      <div className="mt-8 lg:mt-28">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 lg:mb-8">
          Related Templates
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 max-380:grid-cols-1">
          {getRandomCards(carddata, parseInt(id), 4).map((relatedCard) => (
            <Link
              key={relatedCard.id}
              href={`/cards/${relatedCard.id}`}
              className="group block"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <div className="relative aspect-video">
                  <Image
                    src={relatedCard.image}
                    alt={relatedCard.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
                      <span className="text-sm">N</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                    {relatedCard.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow ">
                    {relatedCard.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto ">
                    <div className="flex items-center text-sm text-gray-500">
                      <span>by</span>
                      <span className="flex items-center ml-1">
                        <span className="mr-1">▲</span>
                        {relatedCard.author}
                      </span>
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <Geistspace />
      </div>
      {/* </div> */}
    </div>
  );
}
