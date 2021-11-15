import { getStrapi } from "./hidratation";

export function getStrapiMedia(media){
    if (typeof media !== "undefined"){
        if (media==null){
            return "";
        }
        const ImageURL = media.url.startsWith("/")
        ? getStrapi(media.url)
        : media.url;

        return ImageURL
    }

}   