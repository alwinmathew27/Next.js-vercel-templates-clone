import Link from "next/link";
import Image from "next/image";
import carddata from "../../../lib/data/cardsdata.json";
export default function CardDetails({ searchQuery, activeFilters }) {
  const filteredCards = carddata.filter((card) => {
    // Search filter
    const searchMatch =
      !searchQuery ||
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase());
    // Check all active filters
    const filterMatch = Object.entries(activeFilters).every(
      ([category, items]) => {
        const activeItems = Object.entries(items)
          .filter(([_, isSelected]) => isSelected)
          .map(([item]) => item);

        if (activeItems.length === 0) return true;

        switch (category) {
          case "Framework":
            return activeItems.includes(card.Framework);
          case "Use Case":
            return activeItems.some((item) => card.usecase?.includes(item));
          case "CSS":
            return activeItems.includes(card.css);
          case "Database":
            return activeItems.some((item) => card.Database?.includes(item));
          case "CMS":
            return activeItems.some((item) => card.CMS?.includes(item));
          // Add other categories as needed
          default:
            return true;
        }
      }
    );
    return searchMatch && filterMatch;
  });
  return (
    <div className="container py-6">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-380:grid-cols-1 ">
        {filteredCards.map((card) => (
          <Link key={card.id} href={`/cards/${card.id}`}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full max-w-[300px] mx-auto">
              <div className="relative w-full pb-[56.25%]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col">
                <h3 className="md:text-xl sm:text-lg text-sm font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base flex-grow hidden sm:block">
                  {card.description}
                </p>
                <div className="mt-4 pt-2 border-t border-gray-100">
                  <span className="text-sm text-gray-500 hidden sm:block">
                    {card.author}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
