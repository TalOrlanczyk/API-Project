import React from 'react';
import './svgs.css'

export const Pokeball = () => {
    return (
        <div>
            <span className="middle">
                <svg className="Icon-root" viewBox="0 0 32 32" stroke="none">
                    <path id="red" d="M2,16 a 6 6 0 0 1 28 0 Z" />
                    <path id="blue" d="M2,16 a 6 6 0 0 0 28 0 Z" />
                    <path id="white" d="M2,16 a 6 6 0 0 0 28 0 Z" fill="white" />
                    <line x1="2" y1="16" x2="30" y2="16" stroke="black" />
                    <circle cx="16" cy="16" r="5" fill="grey" stroke="black" />
                    <circle cx="16" cy="16" r="3" fill="white" stroke="black" />
                    <circle cx="16" cy="16" r="14" fill="none" stroke="black" />
                </svg>
            </span>

        </div>
    )
}
export const SpaceX = () => {
    return (
        <svg className="Icon-root-spacex" viewBox="0 0 331.644 40.825" stroke="none">>
            <g>
                <path fill="#005288" d="M77.292,15.094H49.249l-1.039,0.777v24.947h7.763v-9.355l0.741-0.664h20.579   c5.196,0,7.632-1.398,7.632-4.985v-5.728C84.924,16.493,82.489,15.094,77.292,15.094 M77.292,24.317   c0,1.69-1.118,2.041-3.554,2.041H56.799l-0.827-0.804V20.21l0.741-0.678h17.025c2.436,0,3.554,0.347,3.554,2.045V24.317z" />
                <polyline fill="#005288" points="99.081,19.813 105.761,29.6 105.391,30.548 90.618,30.548 86.847,35.187 108.837,35.187 110.361,36.115 113.775,40.824 122.659,40.824 103.186,14.775" />
                <polyline fill="#005288" points="187.418,35.757 187.418,28.833 188.217,28.143 203.079,28.143 203.079,23.734 179.524,23.734 179.524,40.823 214.27,40.823 214.27,36.435 188.252,36.435" />
                <rect x="179.524" y="15.094" fill="#005288" width="35.113" height="4.848" />
                <path fill="#005288" d="M140.361,19.685h28.288c-0.436-3.597-2.668-4.595-8.33-4.595H140.06c-6.389,0-8.427,1.247-8.427,6.082   v13.565c0,4.84,2.038,6.087,8.427,6.087h20.259c5.745,0,7.945-1.079,8.095-4.81h-28.053l-0.832-0.783V20.209" />
                <path fill="#005288" d="M29.333,25.118H8.754l-0.606-0.667v-4.402l0.603-0.466h27.742l0.379-0.927   c-0.945-2.431-3.392-3.565-7.936-3.565H9.665c-6.385,0-8.426,1.247-8.426,6.082v2.844c0,4.841,2.041,6.086,8.426,6.086h20.533   l0.645,0.566v4.602l-0.526,0.718H6.83v-0.022H0.678c0,0-0.704,0.353-0.677,0.518c0.525,3.382,2.829,4.34,8.345,4.34h20.987   c6.384,0,8.486-1.247,8.486-6.087v-3.543C37.819,26.363,35.717,25.118,29.333,25.118" />
                <path fill="#005288" d="M236.725,14.988h-11.551l-0.627,1.193l12.828,9.351c2.43-1.407,5.074-2.833,7.95-4.24" />
                <path fill="#005288" d="M247.075,32.603l11.275,8.222h11.692l0.484-1.089L253.69,27.413   C251.454,29.054,249.245,30.787,247.075,32.603" />
                <path fill="#A7A9AC" d="M235.006,40.806h-10.451l-0.883-1.383C230.778,32.562,262.56,3.151,331.644,0   C331.644,0,273.658,1.956,235.006,40.806" />
            </g>
        </svg>
    )
}

export const HexagonHole = () => {
    return (
        <div className="rsr">
            <svg version="1.1" width="100%" height="8vh" viewBox="-7 -7 270 270" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "hidden", position: "relative" }}>
                <defs>
                    <linearGradient id="MyGradient">
                        <stop offset="0%" stopColor=" #7f5a83" />
                        <stop offset="74%" stopColor="#0d324d" />
                    </linearGradient>
                </defs>
                <path fill="url(#MyGradient)" stroke="#000000" d="M190.354,164.27C158.81,182.239,127.26600000000002,
                        200.20800000000003,95.72300000000001,218.17600000000002C96.90100000000001,218.17600000000002,98.07900000000001,
                        218.17600000000002,99.25700000000002,218.17600000000002C67.92300000000002,199.84300000000002,36.59000000000002,
                        181.51000000000002,5.257000000000019,163.17600000000002C5.8350000000000195,164.18400000000003,6.413000000000019,
                        165.191,6.99000000000002,166.198C7.2,129.896,7.41,93.594,7.621,57.292C7.043,58.299,6.465000000000001,59.307,
                        5.888,60.314C37.432,42.345,68.97500000000001,24.375999999999998,100.519,6.408000000000001C99.34100000000001,
                        6.408000000000001,98.164,6.408000000000001,96.986,6.408000000000001C128.31900000000002,24.741,159.65300000000002,
                        43.075,190.986,61.408C190.408,60.401,189.831,59.393,189.253,58.386C189.04199999999997,94.688,188.832,130.99,
                        188.62099999999998,167.292C188.59499999999997,171.808,195.59499999999997,171.805,195.62099999999998,
                        167.292C195.832,130.99,196.04199999999997,94.688,196.253,58.385999999999996C196.26,57.154999999999994,
                        195.57899999999998,55.983999999999995,194.51999999999998,55.364C173.778,43.227,153.03499999999997,
                        31.090999999999998,132.29199999999997,18.954C122.34699999999998,13.135000000000002,112.40199999999997,
                        7.316000000000001,102.45699999999997,1.4969999999999999C100.46399999999997,0.33099999999999996,98.80399999999996,
                        -0.673,96.48299999999996,0.6489999999999999C93.51599999999996,2.339,90.54899999999996,4.029,87.58299999999996,
                        5.719C59.173,21.903,30.764,38.086,2.354,54.27C1.2810000000000001,54.881,0.6280000000000001,56.067,0.621,57.292C0.482,
                        81.324,0.34199999999999997,105.355,0.203,129.387C0.136,140.909,0.069,152.431,0.0030000000000000027,163.953C-0.009999999999999997,
                        166.236,-0.056999999999999995,168.179,2.222,169.513C5.1690000000000005,171.237,8.116,172.961,11.062999999999999,
                        174.686C36.17,189.375,61.275999999999996,204.066,86.383,218.756C89.33,220.48,92.277,222.204,95.22399999999999,
                        223.929C97.51599999999999,225.27,99.21399999999998,224.244,101.20799999999998,223.11C111.21899999999998,217.407,
                        121.22999999999999,211.704,131.242,206.001C152.124,194.10500000000002,173.006,182.21,193.88799999999998,170.315C197.808,168.081,
                        194.283,162.032,190.354,164.27Z" strokeWidth="0" strokeOpacity="1" > 
                </path>
                <text className="TextSvg" x="20%" y="50%" fill="black">API</text>
            </svg>
        </div>
    )
}
// export default Pokeball;