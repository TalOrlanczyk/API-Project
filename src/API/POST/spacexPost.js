const post = async(url,body)=> (
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
)
export const LaunchPad = (body) => post('https://api.spacexdata.com/v4/launches/query', obj);
const obj = {
    query:{
        success: null
    },
    options: {
        sort: {
            flight_number: "asc"
        },
        limit: 20,
        populate: [
            "cores.core",
            "cores.landpad",
            "ships",
            "crew",
            "capsules",
            "payloads",
            "launchpad",
            {
                path:"rocket",
                select: {
                    name: 1
                }
            }
        ]
    }
}