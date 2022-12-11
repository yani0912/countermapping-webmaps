var config = {
    style: 'mapbox://styles/yan0912/cl7ajc6m7003f16ma38n0m9wi',
    accessToken: 'pk.eyJ1IjoieWFuMDkxMiIsImEiOiJjbDc3c2RkdG8wMnJwM25tb2ZxcHZwMnB2In0.iFzlA-UUyMTCbOiFQ6EapQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'NYC Public and Affordable Housing Flood Risk',
    subtitle: 'With rising sea levels from climate change and the promise of more flooding, where and who will likely be most affected?',
    byline: 'Mapping And Countermapping_Mengting Zhang',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Public and Affordable Housing Flood Risk',
            //image: 'images/source.png',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
            location: {
                center: [-73.97189, 40.74904],
                zoom: 12,
                pitch: 70,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Red Hook House And Flood-related Damage',
            image: 'images/source.jpg',
            description: "During Hurricane Sandy in 2012, the development was inundated with 6 feet (1.8 m) of flood water through sewer overflow and high tides. The storm left residents without power and fresh water for months. This caused leaks, resulting in mold that affected many residents' health. Prior to Sandy, various city reports outlined the need for increased flood protection projecting floods as high as 5 feet during storm surges yet NYCHA officials did not anticipate storm surges being that strong.",
            location: {
                center: [-74.00494, 40.67548],
                zoom: 18,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};
