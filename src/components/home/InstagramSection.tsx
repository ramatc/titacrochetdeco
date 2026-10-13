import { instagramSection } from "@/content/home";
import { instagram } from "@/content/site";
import { feedPhotos } from "@/data/instagram";
import { buttonClasses } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function InstagramSection() {
  return (
    <section aria-labelledby="instagram-title" className="py-16 md:py-section">
      <div className="page-container">
        <SectionHeading
          id="instagram-title"
          title={instagramSection.title}
          lead={`@${instagram.handle}`}
          aside={
            <a
              href={instagram.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses("secondary")}
            >
              <InstagramIcon />
              {instagramSection.cta}
            </a>
          }
        />
      </div>

      <ul className="mt-10 grid grid-cols-3 gap-1 md:mt-14 md:grid-cols-6">
        {feedPhotos.map((photo, index) => (
          <li key={index}>
            <a
              href={photo.postUrl ?? instagram.profileUrl}
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
