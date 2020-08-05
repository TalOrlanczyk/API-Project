import { SpaceXBaseUrl } from "../../Utils/ConstValues";


const get = async (url) => (
    await fetch(url)
        .then(response => response.json())
        .then(json =>  json
        )
)
export const SpaceXUpcomingLaunches = () => get(`${SpaceXBaseUrl}launches/upcoming`);