import { instagramSection } from "@/content/home";
import { instagram } from "@/content/site";
import { feedPhotos } from "@/data/instagram";
import { buttonClasses } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Photo } from "@/components/ui/Photo";

export function InstagramSection() {
  return (
    <section aria-labelledby="instagram-title" className="py-16 md:py-24">
      <div className="page-container flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="instagram-title" className="display text-[2.5rem] md:text-[3.5rem]">
            {instagramSection.title}
          </h2>
          <p className="mt-3 text-[0.9375rem] text-ink-soft">@{instagram.handle}</p>
        </div>
        <a
          href={instagram.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses("secondary", "self-start md:self-auto")}
        >
          <InstagramIcon />
          {instagramSection.cta}
        </a>
      </div>

      <ul className="mt-10 grid grid-cols-3 gap-1 md:mt-14 md:grid-cols-6">
        {feedPhotos.map((photo, index) => (
          <li key={index}>
            <a
              href={instagram.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label={`${photo.alt} — ver en Instagram`}
            >
              <Photo
                photo={photo}
                sizes="(min-width: 768px) 17vw, 33vw"
                className="aspect-[4/5]"
                zoomOnHover
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
