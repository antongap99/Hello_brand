export const mapController = () => {
    const initMap = () => {
        const myMap = new ymaps.Map(
            'map',
            {
                center: [51.014760, 3.586506],
                zoom: 12,
                controls: ['smallMapDefaultSet'],
            },
            {},
        );
        const myPlacemark = new ymaps.Placemark(
            [55.7724, 37.6252],
            {},
            {
                iconLayout: 'default#image',
                iconImageSize: [70, 70],
                iconImageOffset: [-35, -70],
            },
        );
        myMap.geoObjects.add(myPlacemark);
    }
    ymaps.ready(initMap);
};
