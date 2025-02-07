import Link from "next/link";
import Image from "next/image";
import carddata from "./dynamicpage.json";
import Geistspace from "../../component/geist_spacer/geistspace";

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
      <div className="mx-auto max-w-7xl py-4 ">
        {/* Main Content Section */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[35%_61%] mb-8 lg:mb-16">
          {/* Left Section */}
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900"
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

              <div className="flex flex-row gap-4">
                <Link
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md text-xs sm:text-base  bg-black lg:px-16 px-7 sm:px-12 py-2.5 text-white hover:bg-black/90 text-center"
                >
                  Deploy
                </Link>
                <button className="rounded-md text-xs lg:px-16 sm:text-base border border-gray-200 px-7 sm:px-12 py-2.5 hover:bg-gray-50">
                  View Demo
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-4">
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
          <div className="right-section h-[400px] lg:h-[450px] relative rounded-2xl shadow-2xl overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Related templates Section */}
        <div className="mt-8 lg:mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 lg:mb-8">
            Related Templates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                    <div className="absolute top-4 left-4">
                      <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                        <span className="text-sm">N</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                      {relatedCard.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                      {relatedCard.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
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

        <div className="mt-10">
          <Geistspace />
        </div>
      </div>
    </div>
  );
}
