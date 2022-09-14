

import React from 'react'
import styles from "./About.module.css";
import './About.scss'
// import logo from '../../assets/logo_white_hackthon.png'

function About() {

    return (
        <div className='h-100 mb-5' id="About" style={{paddingTop: "100px"}}>
            <h1 className='text-light text-center my-4 mt-md-5'>About Us</h1>
            <div class={`${styles.AboutParent} container`}>

                <div className="container1">
                    <svg id="galaxy" viewBox="-10 -10 670 670" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                        <defs>
                            <linearGradient id="galaxy-vector_31-fill" x1="293.478" y1="578.9" x2="331.696" y2="617.078" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">
                                <stop id="galaxy-vector_31-fill-0" offset="0%" stop-color="#387eb8" />
                                <stop id="galaxy-vector_31-fill-1" offset="100%" stop-color="#366994" />
                            </linearGradient>
                            <linearGradient id="galaxy-vector_32-fill" x1="317.147" y1="603.195" x2="358.205" y2="642.36" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)">
                                <stop id="galaxy-vector_32-fill-0" offset="0%" stop-color="#ffe052" />
                                <stop id="galaxy-vector_32-fill-1" offset="100%" stop-color="#ffc331" />
                            </linearGradient>
                        </defs>
                        <g id="galaxy-galaxy">
                            <g id="galaxy-earth_to" transform="translate(325,325)">
                                <g id="galaxy-earth" transform="translate(-325,-325)">
                                    <g id="galaxy-group">
                                        <path id="galaxy-vector" d="M325,392.211c37.12,0,67.211-30.091,67.211-67.211s-30.091-67.211-67.211-67.211-67.211,30.091-67.211,67.211s30.091,67.211,67.211,67.211Z" fill="#d7e6d8" />
                                        <path id="galaxy-vector_2" d="M346.753,352.052l-3.461,5.717c-1.02,1.686-1.559,3.618-1.559,5.587v.172c0,1.671-1.354,3.026-3.026,3.027-2.902.002-5.256-2.351-5.256-5.253c0-2.744-1.09-5.375-3.03-7.316l-1.28-1.28c-2.447-2.447-3.821-5.765-3.821-9.225v-8.22c0-2.596-2.104-4.699-4.7-4.699h-.975c-3.872,0-7.011-3.14-7.011-7.012v-4.279c0-4.064,3.294-7.358,7.358-7.358h23.434l7.538,7.537c2.185,2.186,3.413,5.15,3.413,8.24v3.197c0,1.736,1.407,3.144,3.143,3.144c1.364,0,2.05,1.647,1.088,2.614l-3.109,3.128c-2.294,2.307-4.301,4.884-5.977,7.672l-2.769,4.607Z" fill="#4fc497" />
                                        <path id="galaxy-vector_3" d="M334.156,270.896h10.226c1.926,0,3.487,1.561,3.487,3.486c0,1.926-1.561,3.487-3.487,3.487h-14.131-13.119c-1.651,0-2.988,1.337-2.988,2.987v.566c0,1.313-.522,2.573-1.451,3.502l-1.631,1.631c-2.216,2.217-3.462,5.223-3.462,8.358v3.785c0,1.321,1.072,2.393,2.393,2.393h2.811c2.269,0,4.108-1.84,4.108-4.108c0-1.399.556-2.74,1.545-3.728l1.441-1.442c.989-.989,2.33-1.544,3.728-1.544h5.559c3.261,0,6.388,1.295,8.694,3.601l2.776,2.775c3.249,3.249,5.074,7.656,5.074,12.251v5.03h4.573c4.404,0,8.628,1.749,11.742,4.864l2.223,2.222c2.341,2.341,6.137,2.341,8.478,0c2.385-2.385,2.385-6.251,0-8.635l-.92-.92c-1.968-1.968-.574-5.333,2.209-5.333h7.307h7.802c-.046-.046-.079-.62-.103-1.57-5.97-18.715-19.913-33.871-37.839-41.466h-17.045c-2.157,0-3.905,1.748-3.905,3.904s1.748,3.904,3.905,3.904Z" fill="#4fc497" />
                                        <path id="galaxy-vector_4" d="M297.533,340.349v-4.988c0-3.572-1.419-6.998-3.945-9.524l-.054-.054c-1.629-1.629-3.839-2.545-6.143-2.545-2.208,0-4.325-.877-5.887-2.438l-2.449-2.449c-2.511-2.511-5.916-3.922-9.467-3.922h-10.31l-.777.778c-.466,3.197-.712,6.466-.712,9.793c0,20.255,8.961,38.417,23.134,50.739v-2.841c0-5.691,2.261-11.149,6.285-15.173l5.34-5.341c3.192-3.192,4.985-7.521,4.985-12.035Z" fill="#4fc497" />
                                    </g>
                                    <g id="galaxy-group_2">
                                        <path id="galaxy-vector_5" d="M374.498,275.502C361.276,262.281,343.698,255,325,255s-36.276,7.281-49.498,20.502C262.281,288.724,255,306.302,255,325s7.281,36.276,20.502,49.498C288.724,387.719,306.302,395,325,395s36.276-7.281,49.498-20.502C387.719,361.276,395,343.698,395,325s-7.281-36.276-20.502-49.498Zm11.172,27.833h-11.636c-2.4,0-4.544,1.433-5.463,3.65-.918,2.218-.415,4.747,1.282,6.444l.92.92c1.293,1.293,1.293,3.398,0,4.691-.605.606-1.411.939-2.267.939-.857,0-1.662-.333-2.268-.939l-2.222-2.222c-3.663-3.664-8.534-5.681-13.714-5.681h-1.784v-2.241c0-5.373-2.092-10.424-5.891-14.223l-2.776-2.775c-2.849-2.85-6.637-4.419-10.666-4.419h-5.559c-2.153,0-4.177.839-5.7,2.361l-1.442,1.442c-1.522,1.522-2.361,3.547-2.361,5.7c0,.727-.592,1.319-1.319,1.319h-2.415v-3.39c0-2.411.939-4.679,2.645-6.385l1.631-1.631c1.462-1.462,2.267-3.406,2.267-5.474v-.566c0-.11.09-.198.199-.198h27.251c3.461,0,6.275-2.815,6.275-6.275s-2.814-6.274-6.275-6.274h-10.226c-.616,0-1.116-.501-1.116-1.116s.5-1.116,1.116-1.116h16.417c16.274,7.067,29.08,20.66,35.097,37.459Zm-30.628,32.942l-1.52,1.53c-2.45,2.464-4.6,5.223-6.391,8.202l-2.766,4.601-3.459,5.715c-1.283,2.121-1.962,4.552-1.962,7.031v.171c0,.132-.107.239-.238.239-.001,0-.001,0-.002,0-.657,0-1.276-.256-1.742-.721-.466-.466-.722-1.084-.722-1.743c0-3.509-1.366-6.807-3.847-9.288l-1.28-1.28c-1.938-1.938-3.005-4.513-3.005-7.253v-8.22c0-4.129-3.359-7.489-7.488-7.489h-.975c-2.328,0-4.222-1.894-4.222-4.222v-4.279c0-2.52,2.049-4.57,4.569-4.57h22.279l6.721,6.721c1.674,1.675,2.596,3.9,2.596,6.268v3.197c0,2.387,1.417,4.45,3.454,5.39ZM260.578,325c0-2.634.162-5.23.471-7.781h8.539c2.832,0,5.494,1.102,7.495,3.104l2.449,2.449c2.1,2.099,4.89,3.255,7.859,3.255c1.576,0,3.057.614,4.171,1.728l.054.054c2.017,2.017,3.128,4.699,3.128,7.552v4.988c0,3.801-1.48,7.375-4.168,10.063l-5.34,5.341c-3.749,3.749-6.119,8.509-6.855,13.665-11.026-11.566-17.803-27.215-17.803-44.418ZM325,389.422c-15.698,0-30.1-5.646-41.289-15.011v-1.513c0-4.986,1.942-9.675,5.469-13.201l5.34-5.341c3.741-3.741,5.802-8.715,5.802-14.006v-4.989c0-4.343-1.691-8.426-4.762-11.496l-.054-.054c-2.167-2.167-5.049-3.361-8.115-3.361-1.479,0-2.869-.576-3.915-1.622l-2.449-2.449c-3.055-3.055-7.118-4.738-11.439-4.738h-7.614c6.169-29.133,32.083-51.063,63.026-51.063c2.159,0,4.294.108,6.399.317-2.319,1.053-3.937,3.389-3.937,6.097c0,3.691,3.003,6.693,6.694,6.693h10.226c.385,0,.698.313.698.697c0,.385-.313.698-.698.698h-27.25c-3.185,0-5.777,2.591-5.777,5.776v.566c0,.578-.225,1.121-.634,1.53l-1.631,1.631c-2.759,2.759-4.278,6.428-4.278,10.329v3.786c0,2.857,2.324,5.182,5.181,5.182h2.811c3.803,0,6.897-3.094,6.897-6.897c0-.664.258-1.287.728-1.756l1.441-1.442c.057-.057.116-.11.176-.16.047.054.093.108.145.16l5.559,5.559c-1.069,1.09-1.064,2.84.018,3.923.545.545,1.259.817,1.972.817.714,0,1.428-.272,1.972-.817l1.953-1.952c1.089-1.089,1.089-2.855,0-3.944l-4.309-4.309c2.475.043,4.796,1.025,6.551,2.78l2.775,2.776c2.746,2.745,4.258,6.396,4.258,10.278v.228h-22.949c-5.595,0-10.147,4.552-10.147,10.147v4.279c0,5.404,4.397,9.8,9.801,9.8h.974c1.054,0,1.911.857,1.911,1.911v8.22c0,4.23,1.647,8.206,4.638,11.197l1.28,1.281c1.427,1.427,2.214,3.325,2.214,5.343c0,2.149.837,4.169,2.356,5.689c1.519,1.517,3.538,2.353,5.685,2.353.001,0,.003,0,.004,0c3.207-.001,5.815-2.611,5.815-5.816v-.172c0-1.46.4-2.893,1.156-4.142l3.461-5.718c.001-.002.003-.005.004-.007l2.769-4.606c1.559-2.594,3.432-4.997,5.565-7.144l3.109-3.127c1.235-1.242,1.598-3.09.926-4.707-.673-1.617-2.24-2.662-3.991-2.662-.196,0-.355-.159-.355-.355v-3.197c0-3.858-1.502-7.484-4.23-10.212l-.618-.618c2.926.425,5.626,1.773,7.754,3.901l2.223,2.223c1.712,1.712,3.962,2.569,6.211,2.569s4.499-.857,6.211-2.569c1.68-1.68,2.605-3.914,2.605-6.29s-.925-4.609-2.605-6.29l-.92-.92c-.055-.055-.158-.158-.073-.365.086-.206.232-.206.31-.206h13.355c1.327,5.143,2.033,10.533,2.033,16.086c0,35.523-28.899,64.422-64.422,64.422Z" fill="#27282d" />
                                        <path id="galaxy-vector_6" d="M306.315,278.705c1.54,0,2.789-1.248,2.789-2.789v-5.718c0-1.541-1.249-2.789-2.789-2.789-1.541,0-2.789,1.248-2.789,2.789v5.718c0,1.541,1.248,2.789,2.789,2.789Z" fill="#27282d" />
                                        <path id="galaxy-vector_7" d="M380.607,342.745c-1.444-.538-3.05.196-3.588,1.639-8.052,21.601-28.957,36.114-52.019,36.114-1.54,0-2.789,1.249-2.789,2.789s1.249,2.789,2.789,2.789c12.701,0,24.878-3.863,35.215-11.169c10.107-7.144,17.725-17.025,22.031-28.574.538-1.443-.196-3.049-1.639-3.588Z" fill="#27282d" />
                                        <path id="galaxy-vector_8" d="M311.455,378.834c-2.709-.679-5.388-1.573-7.963-2.656-1.42-.598-3.055.069-3.652,1.489-.597,1.419.069,3.054,1.489,3.652c2.835,1.193,5.786,2.177,8.769,2.926.228.057.456.084.681.084c1.249,0,2.385-.845,2.703-2.111.375-1.494-.533-3.009-2.027-3.384Z" fill="#27282d" />
                                    </g>
                                </g>
                            </g>
                            <g id="galaxy-inner_circle">
                                <g id="galaxy-g1" mask="url(#galaxy-path-9-inside-1_8_4)">
                                    <path id="galaxy-path1" d="M497.022,325c0,95.005-77.017,172.022-172.022,172.022v4c97.214,0,176.022-78.808,176.022-176.022h-4ZM325,152.978c95.005,0,172.022,77.017,172.022,172.022h4c0-97.214-78.808-176.022-176.022-176.022v4ZM152.978,325c0-95.005,77.017-172.022,172.022-172.022v-4c-97.214,0-176.022,78.808-176.022,176.022h4ZM325,497.022c-95.005,0-172.022-77.017-172.022-172.022h-4c0,97.214,78.808,176.022,176.022,176.022v-4ZM498,325c0,95.545-77.455,173-173,173v4c97.754,0,177-79.246,177-177h-4ZM325,152c95.545,0,173,77.455,173,173h4c0-97.754-79.246-177-177-177v4ZM152,325c0-95.545,77.455-173,173-173v-4c-97.754,0-177,79.246-177,177h4ZM325,498c-95.545,0-173-77.455-173-173h-4c0,97.754,79.246,177,177,177v-4Z" fill="#27282d" />
                                    <mask id="galaxy-path-9-inside-1_8_4" mask-type="luminance">
                                        <path id="galaxy-path2" d="M325,499.022c96.11,0,174.022-77.912,174.022-174.022s-77.912-174.022-174.022-174.022-174.022,77.912-174.022,174.022s77.912,174.022,174.022,174.022Zm0,.978c96.65,0,175-78.35,175-175s-78.35-175-175-175-175,78.35-175,175s78.35,175,175,175Z" clip-rule="evenodd" fill="#fff" fill-rule="evenodd" />
                                    </mask>
                                </g>
                            </g>
                            <g id="galaxy-outer_circle_tr" transform="translate(324.5,325) rotate(0)">
                                <g id="galaxy-outer_circle" transform="translate(-324.5,-325)">
                                    <g id="galaxy-ellipse-1-stroke">
                                        <g id="galaxy-g2" mask="url(#galaxy-path-11-inside-2_8_4)">
                                            <path id="galaxy-path3" d="M606.408,325c0,155.417-125.991,281.408-281.408,281.408v4c157.626,0,285.408-127.782,285.408-285.408h-4ZM325,43.5922C480.417,43.5922,606.408,169.583,606.408,325h4C610.408,167.374,482.626,39.5922,325,39.5922v4ZM43.5922,325C43.5922,169.583,169.583,43.5922,325,43.5922v-4C167.374,39.5922,39.5922,167.374,39.5922,325h4ZM325,606.408C169.583,606.408,43.5922,480.417,43.5922,325h-4C39.5922,482.626,167.374,610.408,325,610.408v-4ZM608,325c0,156.297-126.703,283-283,283v4c158.506,0,287-128.494,287-287h-4ZM325,42c156.297,0,283,126.703,283,283h4C612,166.494,483.506,38,325,38v4ZM42,325C42,168.703,168.703,42,325,42v-4C166.494,38,38,166.494,38,325h4ZM325,608C168.703,608,42,481.297,42,325h-4c0,158.506,128.494,287,287,287v-4Z" fill="#27282d" />
                                            <mask id="galaxy-path-11-inside-2_8_4" mask-type="luminance">
                                                <path id="galaxy-path4" d="M325,608.408c156.522,0,283.408-126.886,283.408-283.408s-126.886-283.4078-283.408-283.4078-283.4078,126.8858-283.4078,283.4078s126.8858,283.408,283.4078,283.408ZM325,610c157.401,0,285-127.599,285-285s-127.599-285-285-285-285,127.599-285,285s127.599,285,285,285Z" clip-rule="evenodd" fill="#fff" fill-rule="evenodd" />
                                            </mask>
                                        </g>
                                    </g>
                                    <g id="galaxy-c7_tr" transform="translate(120,128) rotate(0)">
                                        <g id="galaxy-c7" transform="translate(-120,-128)">
                                            <circle id="galaxy-ellipse-7" r="39" transform="translate(120 128)" fill="#27282d" stroke-width="2" />
                                            <g id="galaxy-vuejs">
                                                <path id="galaxy-vector_9" d="M96.3483,95l14.0727.0055l9.199,15.2695l9.167-15.2683l14.06-.0036L119.69,135.171L96.3483,95Z" fill="#35495e" />
                                                <path id="galaxy-vector_10" d="M81,95.1077l15.3361-.1052L119.676,135.173l23.159-40.1681l15.362.0159-38.523,66.1112L81,95.1077Z" fill="#41b883" />
                                            </g>
                                        </g>
                                    </g>
                                    <g id="galaxy-c8_tr" transform="translate(42.114967,325) rotate(0)">
                                        <g id="galaxy-c8" transform="translate(-42.114967,-325)">
                                            <circle id="galaxy-ellipse-4" r="39" transform="translate(42 325)" fill="#27282d" stroke-width="2" />
                                            <g id="galaxy-nuxtjs">
                                                <path id="galaxy-vector_11" d="M25.84,354.424l-.1869-.373c-.3731-.747-.3732-1.494-.1863-2.428h-20.16361L35.1759,298.601L47.685,321.192l4.1069-2.988-12.5091-22.591c-.1862-.373-1.68-2.613-4.1069-2.613-1.1207,0-2.8007.373-4.1076,2.8L0.82245,349.383c-.186889.561-1.493799,2.988-.373779,5.041.746899,1.121,1.867579,2.241,4.481399,2.241h25.39133c-2.6139,0-3.9208-1.12-4.4814-2.24v-.001Z" fill="#00c58e" />
                                                <path id="galaxy-vector_12" d="M83.3433,349.568L59.072,305.88c-.3731-.374-1.68-2.801-4.1076-2.801-1.12,0-2.8.56-4.1069,2.801l-3.1739,5.227v10.082l7.2815-12.509l24.0844,42.941h-9.1484c.153.889.0223,1.804-.3738,2.614l-.1869.187c-1.12,2.053-3.9207,2.24-4.2938,2.24h14.1891c.56,0,3.1738-.186,4.4807-2.24.56-.934.9338-2.614-.3731-4.854v0Z" fill="#108775" />
                                                <path id="galaxy-vector_13" d="M70.09,354.424v-.187l.1868-.373c.1863-.747.3732-1.494.1863-2.241l-.7463-2.24-19.0429-33.232-2.8007-5.041h-.1869l-2.8007,5.041-19.043,33.232-.7462,2.24c-.1809.95-.05,1.932.3731,2.801.7469,1.12,1.8669,2.241,4.4807,2.241h35.4734c.5601,0,3.3608-.187,4.6677-2.241h-.0013ZM47.6856,321.191l17.3636,30.432h-34.7265l17.3629-30.432Z" fill="#2f495e" />
                                            </g>
                                        </g>
                                    </g>
                                    <g id="galaxy-c6_tr" transform="translate(325,40) rotate(0)">
                                        <g id="galaxy-c6" transform="translate(-325,-40)">
                                            <circle id="galaxy-ellipse-2" r="39" transform="translate(325 40)" fill="#27282d" stroke-width="2" />
                                            <g id="galaxy-docker">
                                                <path id="galaxy-vector_14" d="M332.669,30.2914h8.786v8.8382h4.442c2.051,0,4.161-.3595,6.104-1.0073.954-.3187,2.026-.7618,2.968-1.3195-1.24-1.5933-1.874-3.6053-2.06-5.5884-.254-2.6978.3-6.2089,2.155-8.3202l.923-1.0511l1.101.8707c2.771,2.1904,5.101,5.2515,5.512,8.741c3.336-.9656,7.253-.7373,10.193.9329l1.207.685-.635,1.2198c-2.486,4.7762-7.687,6.2561-12.77,5.9941-7.606,18.6439-24.167,27.4703-44.246,27.4703-10.374,0-19.892-3.8161-25.311-12.8732l-.089-.1475-.79-1.5812c-1.832-3.9868-2.44-8.3542-2.028-12.7183l.124-1.3071h7.513v-8.8382h8.786v-8.6457h17.572v-8.6457h10.543v17.2914Z" clip-rule="evenodd" fill="#364548" fill-rule="evenodd" />
                                                <path id="galaxy-vector_15" d="M361.133,33.5612c.589-4.5055-2.838-8.0442-4.962-9.7245-2.449,2.7859-2.829,10.0871,1.013,13.1611-2.145,1.8738-6.662,3.5723-11.287,3.5723h-56.307c-.45,4.7516.398,9.1274,2.334,12.8725l.641,1.1532c.405.6769.848,1.3312,1.327,1.9601c2.315.1463,4.45.1967,6.402.1543h.001c3.837-.0832,6.968-.5293,9.341-1.3385.168-.0513.349-.0365.506.0415.157.0779.277.2129.335.3762.057.1633.048.3424-.026.4991-.074.1568-.208.279-.372.3408-.316.1081-.644.2087-.984.3043h-.001c-1.869.5252-3.872.8784-6.458,1.0353.154.0026-.159.0227-.16.0227-.088.0056-.199.0181-.287.0227-1.018.0563-2.116.0681-3.238.0681-1.228,0-2.438-.0228-3.79-.0908l-.034.0227c4.691,5.1891,12.027,8.3013,21.222,8.3013c19.46,0,35.967-8.4892,43.276-27.5476c5.186.5237,10.169-.7777,12.436-5.1327-3.61-2.0505-8.255-1.3968-10.928-.0741Z" clip-rule="evenodd" fill="#22a0c8" fill-rule="evenodd" />
                                                <path id="galaxy-vector_16" d="M361.133,33.5612c.589-4.5055-2.837-8.0442-4.962-9.7245-2.449,2.7859-2.829,10.0871,1.013,13.1611-2.145,1.8738-6.662,3.5723-11.287,3.5723h-52.973c-.229,7.277,2.515,12.8007,7.37,16.1401h.001c3.837-.0832,6.968-.5293,9.341-1.3385.168-.0513.35-.0365.506.0415.157.0779.277.2129.335.3762.057.1633.048.3424-.026.4991-.074.1568-.208.279-.372.3408-.315.1081-.644.2087-.984.3043h-.001c-1.869.5252-4.045.9238-6.63,1.0807c0,0-.062-.0587-.063-.0587c6.623,3.3433,16.226,3.3312,27.236-.8306c12.345-4.6673,23.833-13.5588,31.848-23.7287-.12.0538-.238.1085-.352.1649Z" clip-rule="evenodd" fill="#37b1d9" fill-rule="evenodd" />
                                                <path id="galaxy-vector_17" d="M289.696,46.3435c.349,2.5454,1.106,4.9285,2.228,7.0992l.641,1.1533c.405.6769.848,1.3312,1.327,1.96c2.316.1464,4.45.1967,6.403.1543c3.837-.0832,6.968-.5293,9.341-1.3384.168-.0514.35-.0366.506.0414.157.078.277.2128.335.3763.057.1633.048.3422-.026.499-.074.1567-.208.2789-.372.3408-.315.1081-.644.2087-.984.3044h-.001c-1.869.5251-4.033.901-6.618,1.0583-.089.0053-.244.0064-.333.0113-1.017.056-2.104.0904-3.227.0904-1.228,0-2.483-.0231-3.835-.0908c4.692,5.1892,12.073,8.3126,21.268,8.3126c16.66,0,31.155-6.2228,39.568-19.9721h-66.221Z" clip-rule="evenodd" fill="#1b81a5" fill-rule="evenodd" />
                                                <path id="galaxy-vector_18" d="M293.431,46.3435c.996,4.4692,3.389,7.9776,6.864,10.3668c3.837-.0832,6.968-.5293,9.341-1.3384.168-.0514.35-.0366.506.0414.157.078.277.2128.335.3763.057.1633.048.3422-.026.499-.074.1567-.208.2789-.372.3408-.315.1081-.644.2087-.984.3044h-.001c-1.869.5251-4.079.901-6.664,1.0583c6.622,3.3424,16.198,3.2944,27.207-.867c6.66-2.5182,13.07-6.2667,18.821-10.7816h-55.027Z" clip-rule="evenodd" fill="#1d91b4" fill-rule="evenodd" />
                                                <path id="galaxy-vector_19" d="M297.232,31.7323h7.615v7.4933h-7.615v-7.4933Zm.635.6247h.601v6.2444h-.601v-6.2444Zm1.129,0h.625v6.2444h-.624v-6.2444h-.001Zm1.154,0h.625v6.2444h-.625v-6.2444Zm1.154,0h.625v6.2444h-.625v-6.2444Zm1.154,0h.625v6.2444h-.625v-6.2444Zm1.153,0h.602v6.2444h-.602v-6.2444Zm2.407-9.2704h7.615v7.4929h-7.615v-7.4929v0Zm.635.6246h.6v6.244h-.6v-6.244Zm1.129,0h.625v6.244h-.624v-6.244h-.001Zm1.154,0h.625v6.244h-.625v-6.244Zm1.154,0h.625v6.244h-.625v-6.244Zm1.154,0h.625v6.244h-.625v-6.244Zm1.153,0h.602v6.244h-.602v-6.244Z" clip-rule="evenodd" fill="#23a3c2" fill-rule="evenodd" />
                                                <path id="galaxy-vector_20" d="M306.018,31.7322h7.615v7.4933h-7.615v-7.4933v0Zm.635.6246h.6v6.2444h-.6v-6.2444Zm1.129,0h.625v6.2444h-.624v-6.2444h-.001Zm1.154,0h.625v6.2444h-.625v-6.2444Zm1.154,0h.625v6.2444h-.625v-6.2444Zm1.154,0h.625v6.2444h-.625v-6.2444Zm1.153,0h.602v6.2444h-.602v-6.2444Z" clip-rule="evenodd" fill="#34bbde" fill-rule="evenodd" />
                                                <path id="galaxy-vector_21" d="M314.804,31.7322h7.615v7.4933h-7.615v-7.4933Zm.634.6246h.601v6.2444h-.601v-6.2444Zm1.13,0h.625v6.2444h-.625v-6.2444Zm1.154,0h.625v6.2444h-.625v-6.2444Zm1.154,0h.625v6.2444h-.625v-6.2444Zm1.153,0h.626v6.2444h-.626v-6.2444Zm1.154,0h.601v6.2444h-.601v-6.2444Z" clip-rule="evenodd" fill="#23a3c2" fill-rule="evenodd" />
                                                <path id="galaxy-vector_22" d="M314.804,23.0866h7.615v7.4929h-7.615v-7.4929Zm.634.6246h.601v6.244h-.601v-6.244Zm1.13,0h.625v6.244h-.625v-6.244Zm1.154,0h.625v6.244h-.625v-6.244Zm1.154,0h.625v6.244h-.625v-6.244Zm1.153,0h.626v6.244h-.626v-6.244Zm1.154,0h.601v6.244h-.601v-6.244Zm2.407,8.0211h7.614v7.4933h-7.614v-7.4933Zm.635.6247h.6v6.2444h-.6v-6.2444Zm1.129,0h.625v6.2444h-.625v-6.2444Zm1.154,0h.624v6.2444h-.624v-6.2444Zm1.154,0h.625v6.2444h-.625v-6.2444Zm1.153,0h.625v6.2444h-.625v-6.2444Zm1.154,0h.601v6.2444h-.601v-6.2444Z" clip-rule="evenodd" fill="#34bbde" fill-rule="evenodd" />
                                                <path id="galaxy-vector_23" d="M323.59,23.0866h7.614v7.4929h-7.614v-7.4929Zm.635.6246h.6v6.244h-.6v-6.244Zm1.129,0h.625v6.244h-.625v-6.244Zm1.154,0h.624v6.244h-.624v-6.244Zm1.154,0h.625v6.244h-.625v-6.244Zm1.153,0h.625v6.244h-.625v-6.244Zm1.154,0h.601v6.244h-.601v-6.244Z" clip-rule="evenodd" fill="#23a3c2" fill-rule="evenodd" />
                                                <path id="galaxy-vector_24" d="M323.59,14.4406h7.614v7.494h-7.614v-7.494Zm.635.6243h.6v6.2448h-.6v-6.2452.0004Zm1.129,0h.625v6.2448h-.625v-6.2452.0004Zm1.154,0h.624v6.2448h-.624v-6.2452.0004Zm1.154,0h.625v6.2448h-.625v-6.2452.0004Zm1.153,0h.625v6.2448h-.625v-6.2452.0004Zm1.154,0h.601v6.2448h-.601v-6.2452.0004Z" clip-rule="evenodd" fill="#34bbde" fill-rule="evenodd" />
                                                <path id="galaxy-vector_25" d="M332.376,31.7322h7.614v7.4933h-7.614v-7.4933Zm.634.6246h.601v6.2444h-.601v-6.2444v0Zm1.129,0h.625v6.2444h-.624v-6.2444h-.001Zm1.154,0h.626v6.2444h-.626v-6.2444Zm1.154,0h.625v6.2444h-.625v-6.2444Zm1.154,0h.625v6.2444h-.625v-6.2444Zm1.154,0h.6v6.2444h-.6v-6.2444Z" clip-rule="evenodd" fill="#23a3c2" fill-rule="evenodd" />
                                                <path id="galaxy-vector_26" d="M313.156,51.3744c.279-.0036.555.0472.813.1495s.493.254.691.4463c.198.1924.355.4216.463.6742.107.2527.162.5238.162.7977s-.055.545-.163.7977c-.107.2526-.264.4817-.462.674-.199.1922-.434.3439-.692.4461s-.534.1528-.813.1491c-.552-.0074-1.079-.2285-1.467-.6155-.387-.387-.605-.9086-.605-1.4522c0-.5435.218-1.065.606-1.4519s.915-.6077,1.467-.615Z" clip-rule="evenodd" fill="#d3ecec" fill-rule="evenodd" />
                                                <path id="galaxy-vector_27" d="M313.156,51.9611c.192,0,.376.0356.545.1002-.117.0667-.208.1693-.26.292-.051.1227-.06.2586-.025.3868.035.1283.112.2417.218.3226.107.081.238.1251.373.1254.233,0,.434-.1267.539-.3142.124.2933.148.618.07.9262-.078.3081-.255.5833-.504.785-.25.2016-.558.319-.881.3348-.322.0157-.641-.0709-.909-.2472-.269-.1764-.473-.4329-.581-.732-.109-.2989-.118-.6244-.024-.9284s.284-.5703.543-.7596c.259-.1892.573-.2914.896-.2916ZM276,47.0907h97.719c-2.128-.5308-6.731-1.2485-5.973-3.9927-3.868,4.4057-13.198,3.091-15.554.9188-2.621,3.7425-17.887,2.3197-18.952-.5959-3.287,3.7966-13.473,3.7966-16.761,0-1.065,2.9156-16.33,4.3383-18.952.5955-2.355,2.1726-11.685,3.4873-15.554-.9181.759,2.7439-3.845,3.4616-5.973,3.9928" clip-rule="evenodd" fill="#364548" fill-rule="evenodd" />
                                                <path id="galaxy-vector_28" d="M318.74,66.271c-5.202-2.4294-8.057-5.7321-9.646-9.3369-1.933.5425-4.256.8896-6.955,1.0387-1.016.0559-2.086.0846-3.208.0846-1.294,0-2.658-.0378-4.089-.1123c4.771,4.6923,10.64,8.3047,21.507,8.3705.802,0,1.598-.0152,2.391-.0446Z" clip-rule="evenodd" fill="#bdd9d7" fill-rule="evenodd" />
                                                <path id="galaxy-vector_29" d="M311.026,60.2607c-.72-.9616-1.418-2.17-1.931-3.3274-1.933.5434-4.256.8905-6.956,1.0398c1.855.9902,4.506,1.9079,8.887,2.2876" clip-rule="evenodd" fill="#d3ecec" fill-rule="evenodd" />
                                            </g>
                                        </g>
                                    </g>
                                    <g id="galaxy-c1_tr" transform="translate(120,522) rotate(0)">
                                        <g id="galaxy-c1" transform="translate(-120,-522)">
                                            <circle id="galaxy-ellipse-9" r="39" transform="translate(120 522)" fill="#27282d" stroke-width="2" />
                                            <path id="galaxy-vector_30" d="M142.79,527.704c-.568-3.513-2.873-6.463-9.703-9.215-2.372-1.083-5.017-1.858-5.805-3.645-.28-1.039-.317-1.625-.14-2.254.508-2.042,2.962-2.679,4.907-2.093c1.252.417,2.438,1.376,3.153,2.906c3.344-2.152,3.337-2.138,5.673-3.616-.855-1.317-1.312-1.925-1.871-2.489-2.012-2.232-4.753-3.381-9.136-3.293l-2.283.293c-2.188.549-4.273,1.69-5.496,3.22-3.669,4.136-2.623,11.374,1.842,14.353c4.398,3.28,10.859,4.026,11.684,7.093.803,3.754-2.777,4.97-6.336,4.538-2.622-.542-4.081-1.866-5.658-4.274-2.902,1.668-2.902,1.668-5.886,3.373.707,1.538,1.451,2.233,2.637,3.565c5.614,5.657,19.663,5.379,22.183-3.184.102-.294.781-2.255.235-5.278v0Zm-29.027-23.246h-7.249l-.03,18.62c0,3.96.206,7.59-.442,8.703-1.06,2.188-3.809,1.917-5.061,1.493-1.2749-.623-1.9231-1.508-2.6741-2.759-.2062-.359-.3609-.637-.4129-.659L92,533.442c.9801,1.999,2.4238,3.733,4.2731,4.86c2.7625,1.647,6.4749,2.152,10.3589,1.267c2.527-.732,4.707-2.247,5.849-4.553c1.65-3.023,1.296-6.682,1.281-10.729.038-6.603.001-13.205.001-19.829v0Z" fill="#ffd040" />
                                        </g>
                                    </g>
                                    <g id="galaxy-c2_tr" transform="translate(325,610) rotate(0)">
                                        <g id="galaxy-c2" transform="translate(-325,-610)">
                                            <circle id="galaxy-ellipse-5" r="39" transform="translate(325 610)" fill="#27282d" stroke-width="2" />
                                            <g id="galaxy-group_3">
                                                <path id="galaxy-vector_31" d="M324.626,572c-19.754,0-18.52,8.49-18.52,8.49l.022,8.795h18.85v2.641h-26.338c0,0-12.64-1.421-12.64,18.332s11.033,19.053,11.033,19.053h6.584v-9.166c0,0-.355-10.934,10.857-10.934h18.696c0,0,10.504.168,10.504-10.061v-16.914c0,0,1.595-10.236-19.048-10.236Zm-10.394,5.914c1.875,0,3.391,1.503,3.391,3.361c0,1.859-1.516,3.361-3.391,3.361-1.876,0-3.392-1.502-3.392-3.361c0-1.858,1.516-3.361,3.392-3.361Z" fill="url(#galaxy-vector_31-fill)" />
                                                <path id="galaxy-vector_32" d="M325.187,648.714c19.753,0,18.52-8.489,18.52-8.489l-.022-8.796h-18.851v-2.64h26.338c0,0,12.64,1.42,12.64-18.333s-11.032-19.052-11.032-19.052h-6.585v9.166c0,0,.355,10.934-10.856,10.934h-18.697c0,0-10.504-.169-10.504,10.061v16.914c0,0-1.595,10.235,19.049,10.235Zm10.394-5.914c-1.876,0-3.392-1.502-3.392-3.361s1.516-3.361,3.392-3.361c1.875,0,3.391,1.502,3.391,3.361s-1.516,3.361-3.391,3.361Z" fill="url(#galaxy-vector_32-fill)" />
                                            </g>
                                        </g>
                                    </g>
                                    <g id="galaxy-c3_tr" transform="translate(541.996582,514.5) rotate(0)">
                                        <g id="galaxy-c3" transform="translate(-541.996582,-514.5)">
                                            <circle id="galaxy-ellipse-6" r="38.5" transform="translate(536.5 514.5)" fill="#27282d" stroke-width="2" />
                                            <path id="galaxy-sass" d="M574.862,519.857c-2.797.016-5.219.676-7.25,1.66-.75-1.46-1.5-2.735-1.625-3.688-.141-1.106-.313-1.782-.141-3.103.172-1.322.953-3.196.953-3.35-.015-.138-.172-.814-1.781-.83-1.609-.015-3,.308-3.156.722-.156.415-.469,1.368-.672,2.351-.281,1.445-3.219,6.561-4.891,9.25-.547-1.045-1.015-1.967-1.109-2.705-.141-1.106-.313-1.782-.141-3.103.172-1.322.953-3.196.953-3.35-.015-.138-.171-.814-1.781-.829-1.609-.016-3,.307-3.156.722s-.328,1.398-.672,2.351c-.328.952-4.234,9.495-5.25,11.723-.516,1.137-.969,2.043-1.297,2.658-.328.614-.015.046-.047.107-.281.523-.437.815-.437.815v.015c-.219.384-.453.753-.563.753-.078,0-.234-1.029.031-2.443.579-2.965,1.985-7.59,1.969-7.759c0-.077.266-.891-.906-1.306-1.141-.415-1.547.277-1.641.277-.093,0-.172.245-.172.245s1.266-5.208-2.421-5.208c-2.313,0-5.5,2.474-7.079,4.732-1,.538-3.125,1.675-5.375,2.889-.859.461-1.75.952-2.593,1.398l-.172-.185c-4.469-4.686-12.734-8.005-12.391-14.304.125-2.289.938-8.328,15.875-15.641c12.235-5.992,22.032-4.348,23.735-.692c2.422,5.224-5.235,14.935-17.953,16.333-4.844.538-7.391-1.306-8.032-1.997-.671-.723-.765-.753-1.015-.615-.406.215-.156.86,0,1.245.375.967,1.937,2.688,4.594,3.549c2.328.753,8.015,1.167,14.89-1.445c7.703-2.934,13.719-11.077,11.953-17.884-1.797-6.929-13.484-9.203-24.531-5.347-6.578,2.305-13.703,5.9-18.828,10.617-6.094,5.593-7.063,10.479-6.656,12.507c1.422,7.237,11.562,11.954,15.625,15.441-.204.108-.391.215-.563.308-2.031.983-9.766,4.962-11.703,9.172-2.188,4.763.344,8.19,2.031,8.65c5.219,1.429,10.563-1.136,13.453-5.362c2.875-4.225,2.532-9.71,1.203-12.215l-.047-.092l1.594-.922c1.032-.599,2.047-1.152,2.938-1.628-.5,1.336-.86,2.919-1.047,5.224-.219,2.704.906,6.207,2.391,7.59.656.599,1.437.614,1.921.614c1.719,0,2.5-1.398,3.36-3.073c1.062-2.043,2-4.409,2-4.409s-1.172,6.407,2.031,6.407c1.172,0,2.344-1.491,2.875-2.259v.015c0,0,.031-.046.094-.153.065-.096.128-.193.187-.292v-.031c.469-.799,1.516-2.627,3.078-5.654c2.016-3.902,3.954-8.788,3.954-8.788s.187,1.198.765,3.165c.344,1.168,1.094,2.443,1.672,3.687-.469.646-.75,1.014-.75,1.014l.016.016c-.375.491-.797,1.014-1.235,1.536-1.593,1.875-3.5,4.011-3.75,4.625-.297.722-.234,1.26.344,1.69.422.308,1.172.369,1.969.308c1.437-.093,2.437-.446,2.937-.661.782-.277,1.672-.692,2.532-1.306c1.562-1.137,2.515-2.75,2.421-4.901-.046-1.184-.437-2.351-.921-3.457.14-.2.281-.4.421-.615c2.469-3.549,4.375-7.452,4.375-7.452s.188,1.199.766,3.165c.297.999.891,2.09,1.422,3.165-2.313,1.86-3.766,4.011-4.266,5.424-.922,2.612-.203,3.795,1.157,4.072.609.123,1.484-.154,2.14-.43.813-.262,1.797-.707,2.703-1.368c1.563-1.137,3.063-2.719,2.985-4.855-.047-.983-.313-1.951-.672-2.873c1.969-.799,4.515-1.26,7.75-.876c6.953.799,8.328,5.07,8.062,6.853-.265,1.782-1.718,2.765-2.203,3.072-.484.292-.64.4-.594.615.063.323.282.307.704.246.578-.092,3.656-1.46,3.781-4.747.187-4.226-3.891-8.836-11.125-8.79v0Zm-53.625,17.777c-2.297,2.474-5.531,3.411-6.906,2.612-1.485-.845-.907-4.486,1.921-7.114c1.719-1.598,3.954-3.073,5.422-3.979.328-.2.828-.492,1.422-.845.094-.062.156-.092.156-.092.11-.062.235-.139.36-.216c1.047,3.749.047,7.037-2.375,9.634v0Zm16.797-11.231c-.797,1.92-2.485,6.852-3.5,6.576-.875-.231-1.407-3.964-.172-7.652.625-1.859,1.953-4.072,2.734-4.932c1.266-1.383,2.641-1.844,2.985-1.275.406.737-1.547,6.084-2.047,7.283Zm13.859,6.514c-.344.169-.656.292-.797.2-.109-.061.141-.292.141-.292s1.734-1.828,2.422-2.673c.39-.492.859-1.06,1.359-1.706v.185c0,2.212-2.156,3.687-3.125,4.286Zm10.687-2.397c-.25-.184-.218-.753.625-2.535.329-.707,1.079-1.89,2.375-3.011.157.461.251.906.235,1.321-.016,2.766-2.016,3.795-3.235,4.225Z" fill="#cf649a" />
                                        </g>
                                    </g>
                                    <g id="galaxy-c4_tr" transform="translate(610,325) rotate(0)">
                                        <g id="galaxy-c4" transform="translate(-610,-325)">
                                            <circle id="galaxy-ellipse-3" r="39" transform="translate(610 325)" fill="#27282d" stroke-width="2" />
                                            <g id="galaxy-html">
                                                <path id="galaxy-vector_33" d="M583.778,353.803L578,289h63.487l-5.784,64.793L609.705,361l-25.927-7.197Z" fill="#e44d26" />
                                                <path id="galaxy-vector_34" d="M609.743,355.491l21.008-5.824l4.943-55.369h-25.951v61.193Z" fill="#f16529" />
                                                <path id="galaxy-vector_35" d="M609.743,318.333h-10.517l-.726-8.139h11.243v-7.948h-19.929l.19,2.133l1.953,21.902h17.786v-7.948Zm0,20.641l-.035.01-8.851-2.391-.565-6.338h-7.979l1.113,12.479l16.281,4.52.036-.01v-8.27Z" fill="#ebebeb" />
                                                <path id="galaxy-vector_36" d="M609.716,318.333v7.948h9.786l-.922,10.307-8.864,2.393v8.269l16.293-4.516.12-1.343l1.868-20.924.193-2.134h-2.141-16.333Zm0-16.087v7.948h19.198l.159-1.786.363-4.029.19-2.133h-19.91Z" fill="#fff" />
                                            </g>
                                        </g>
                                    </g>
                                    <g id="galaxy-c5_tr" transform="translate(537,140) rotate(0)">
                                        <g id="galaxy-c5" transform="translate(-537,-140)">
                                            <circle id="galaxy-ellipse-8" r="39" transform="translate(537 140)" fill="#27282d" stroke-width="2" />
                                            <path id="galaxy-vector_37" d="M572.604,136.704l-32.309-32.309c-1.86-1.86-4.878-1.86-6.74,0l-6.708,6.71l8.51,8.511c1.979-.668,4.246-.22,5.822,1.356c1.585,1.587,2.029,3.874,1.345,5.858l8.202,8.203c1.985-.684,4.275-.242,5.859,1.346c2.216,2.214,2.216,5.803,0,8.018-.527.527-1.152.945-1.84,1.23-.688.286-1.426.432-2.171.432s-1.482-.146-2.17-.432c-.688-.285-1.314-.703-1.84-1.23-.791-.791-1.331-1.799-1.55-2.897-.22-1.097-.11-2.235.316-3.27l-7.649-7.649-.001,20.131c.555.273,1.061.635,1.5,1.072c2.215,2.214,2.215,5.802,0,8.021-2.215,2.214-5.806,2.214-8.019,0-2.215-2.218-2.215-5.807,0-8.021.531-.532,1.162-.952,1.857-1.237v-20.318c-.696-.284-1.327-.705-1.857-1.237-1.678-1.677-2.081-4.139-1.221-6.2l-8.39-8.39-22.154,22.153c-.894.894-1.396,2.106-1.396,3.37s.502,2.477,1.396,3.371l32.31,32.309c1.86,1.86,4.877,1.86,6.741,0l32.158-32.159c.893-.894,1.395-2.107,1.395-3.371s-.502-2.477-1.396-3.371v0Z" fill="#f34f29" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className={styles.AboutBox}>
                    <div className={styles.AboutBoxTopBar}>
                        <span className={styles.reddot}></span>
                        <span className={styles.yellowdot}></span>
                        <span className={styles.greendot}></span>
                    </div>
                    <div className={styles.AboutBoxBody}>
                        <div className={styles.main}>
                            <div className={styles.num}>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                                <span>6</span>
                                <span>7</span>
                                <span>8</span>
                                <span>9</span>
                                <span>10</span>
                                <span>11</span>
                                <span>12</span>
                            </div>
                            <div className={styles.text}>
                                <span className={styles.type}>
                                    VCET Hackathon is a 30 hours Virtual Hackathon organized by Department of Information Technology of
                                    "Vidyavardhini's College of Engineering and Technology". By organizing this Hackathon, we are trying to
                                    promote a strong Programming and Product Building Culture among students that will help them develop
                                    Problem Solving, Critical Thinking and Software Development Skills. It is an opportunity to take on
                                    challenging problems that revolve around us all the time and crack them down.

                                    Will you get time to eat? Can you ditch your sleep? Do you have passion to build?
                                    Find out in this 30 hours long thrilling experience!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}



export default About;