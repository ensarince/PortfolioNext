import { Social } from "../typings";

export const fetchSocials = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSocials` || 'http://localhost:3000/api/getSocials')

    const data = await res.json()
    const socials: Social[] = data.socials;
    //console.log("fetching => > >", skills)
    return socials
}