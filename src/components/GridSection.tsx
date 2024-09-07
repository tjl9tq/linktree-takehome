import { Section } from "../App";
import Link from "./Link";

const GridSection = ({ section }: { section: Section }) => {
  const { title, items } = section;
  return (
    <div className="w-1/2  max-w-lg m-auto">
      {title && <div className="font-bold">{title}</div>}
      <div className="grid grid-cols-2 gap-4 p-4">
        {items.map((link) => {
          return (
            <Link
              key={title}
              href={link.href}
              text={link.title}
              imageSrc={link.img}
              imageAlt={link.title}
              style="grid"
            />
          );
        })}
      </div>
    </div>
  );
};

export default GridSection;
