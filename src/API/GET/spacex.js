import { SpaceXBaseUrlLaunches } from "../../Utils/ConstValues";


const get = async (url) => (
    await fetch(url)
        .then(response => response.json())
        .then(json =>  json
        )
)
export const SpaceXNextLaunche = () => get(`${SpaceXBaseUrlLaunches}/next`);
export const SpaceXPastLaunches = () => get(`${SpaceXBaseUrlLaunches}/past`);