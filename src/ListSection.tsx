import { Section } from "./App";
import Link from "./Link";

const ListSection = ({ section }: { section: Section }) => {
  const { title, items } = section;

  return (
    <div className="space-y-4 w-1/2 max-w-lg m-auto my-6">
      {title && <div className="font-bold">{title}</div>}
      {items.map((link) => {
        const { title, img, href } = link;
        return (
          <Link
            key={title}
            text={title}
            href={href}
            imageSrc={img}
            imageAlt={title || ""}
          />
        );
      })}
    </div>
  );
};

export default ListSection;
