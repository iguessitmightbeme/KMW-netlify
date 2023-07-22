import { useState, useRef, useEffect } from "react"; 

import mapboxgl from "mapbox-gl"; 
import "mapbox-gl/dist/mapbox-gl.css"; 


const MapboxMap = () => {
    const mapContainer = useRef(null); 
    const map = useRef(null); 
    const [lat, setLat] = useState(52.1252218); 
    const [lng, setLng] = useState(-0.5027251); 
    const [zoom, setZoom] = useState(7.5);

    useEffect(() => {
        if (map.current) return; 
        map.current = new mapboxgl.Map({
            accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
            container: mapContainer.current, 
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: zoom 
        });
        map.current.on("load", () => {
            map.current.addSource("service-area", {
                "type": "geojson", 
                "data": {
                    "type": "Feature", 
                    "properties": {
                        "description": "<strong>Service Area</strong>"
                    },
                    "geometry": {
                        "type": "Polygon", 
                        "coordinates": [
                            [[-0.9844029, 52.2580972], [-1.0269741, 52.2017424], [-1.0543586, 52.1250362], [-1.1044719, 52.0634943], [-1.0393371, 51.9798349], [-1.0173643, 51.920587], [-0.9226063, 51.8536273], [-0.845632, 51.7874217], [-0.7339463, 51.7709004], [-0.6383402, 51.7517254], [-0.4982671, 51.7279149], [-0.3595673, 51.7287655], [-0.1796695, 51.7466241], [-0.0163325, 51.7793261], [0.0606519, 51.8315686], [0.1361815, 51.8900869], [0.2570288, 51.9586853], [0.3435809, 51.9920369], [0.3903806, 52.0177157], [0.4798332, 52.0399749], [0.511692, 52.0790957], [0.4932303, 52.1697481], [0.4616451, 52.2715445], [0.4369532, 52.3147823], [0.4135808, 52.3630456], [0.367574, 52.4514596], [0.3325581, 52.5563361], [0.1856188, 52.6847253], [-0.066, 52.6721326], [-0.2703051, 52.619744], [-0.4172478, 52.596399], [-0.5010148, 52.5772082], [-0.5916491, 52.5571729], [-0.665793, 52.5509445], [-0.7029176, 52.5238069], [-0.816914, 52.4882532], [-0.8003853, 52.4225455], [-0.8910208, 52.32865], [-0.9844029, 52.2580972]]
                        ]
                    }
                }
            })
            map.current.addLayer({
                "id": "service-area",
                "type": "fill",
                "source": "service-area",
                "layout": {}, 
                "paint": {
                    "fill-color": "#0080ff",
                    "fill-opacity": 0.5
                }
            }); 
            map.current.addLayer({
                "id": "outline", 
                "type": "line", 
                "source": "service-area",
                "layout": {},
                "paint": {
                    "line-color": "#0080ff",
                    "line-width": 3
                }
            })
        })
    }, [lng, lat, zoom]);

    useEffect(() => {
        if (!map.current) return; 
        map.current.on("move", () => {
            setLng(map.current.getCenter().lng.toFixed(4)); 
            setLat(map.current.getCenter().lat.toFixed(4)); 
            setZoom(map.current.getZoom().toFixed(2)); 
        })
    })

    return (
        <div className="w-full h-full items-center justify-center relative">
            <div className="map-sidebar idanchorservicearea" id="service-area">
                Service Area 
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default MapboxMap; 