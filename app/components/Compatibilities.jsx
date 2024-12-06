import React from 'react'
import { cn } from '@/lib/utils'
import Marquee from '@/components/ui/marquee'
import games from "../../public/data/games.json";

const firstRow = games.slice(0, reviews.length / 2);
const secondRow = games.slice(reviews.length / 2);

const GamesCard = ({
  img,
  href
  }: {
  img: string;
  href: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Compatibilities = () => {
  return (
    <div className='flex'>
      <h2>Transformez votre expérience de jeu avec Steam Deck. Découvrez une bibliothèque de jeux adaptée à votre console portable, pour jouer partout avec une qualité inégalée.</h2>

    </div>
  )
}

export default Compatibilities