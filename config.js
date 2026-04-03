var config = {
    style: 'mapbox://styles/fede123/cmnixh9yh006o01sa0n04c7gy',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZmVkZTEyMyIsImEiOiJjbW5pdHZwZW0wZ3lvMnNzMWllMjlncTFsIn0.J5KkQVn0xRSyMf8CoYGgUA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Playas_Euskadi',
    subtitle: 'Storymaps_Playas_Euskadi',
    byline: 'Federico_de_la_Roca',
    footer: 'Fuente:"https://datos.gob.es/es/catalogo/a16003011-playas-de-euskadi","https://github.com/mapbox/storytelling"',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Playa de Aritzatxu',
            image: 'https://gaztea.eus/content/dam/edukiak/irudiak/2020/06/12/20200612210031_aritzatxu_original_imagen.jpg',
            description: 'La playa Aritzatxu es una playa con arena, rocas y vegetación. En diversas ocasiones ha sido la playa mejor valorada de Vizcaya .',
            location: {
                center: [-2.730413814758299, 43.42627113526009],
                zoom: 8.5,
                pitch: 70.98,
                bearing: -120.84
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 4,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 4
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Playa de Toña',
            image: 'https://static.elcorreo.com/comun/movil2016/imagenes_playas/0000452.jpg',
            description: 'La playa de Toña se encuentra en el municipio de Sukarrieta, en la costa vizcaína. Es una playa tranquila y acogedora que se asoma a la ría.',
            location: {
                center: [-2.69182205200195, 43.3910778627597],
                zoom: 8.5,
                pitch: 70.98,
                bearing: 147.16,
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
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Playa de Ondarbeltz',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002986_g1_rec_turismo/es_2986/images/GL_PlayasG_Ondarbeltz_1.jpg',
            description: 'Esta playa de aguas tranquilas está compuesta de una arena fina y oscura. Es una playa de 120 metros de longitud donde además de disfrutar del sol y del mar, se pueden practicar varias actividades deportivas, como windsurf y piragüismo.',
            location: {
                center: [-2.357451, 43.301412],
                zoom: 8.5,
                pitch: 60,
                bearing: 0.00
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
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Playa de Isuntza',
            image: 'https://saposyprincesas.elmundo.es/assets/2021/08/playadeisuntzalekeitio.jpg',
            description: 'La playa de Isuntza se encuentra en el municipio de Lekeitio, al este del litoral vizcaíno. Es una playa tranquila y acogedora que se asoma a la ría.',
            location: {
                center: [-2.50110626220703, 43.3632537512373],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
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
        }
    ]
};
