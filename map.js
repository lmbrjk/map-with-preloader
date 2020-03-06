document.addEventListener("DOMContentLoaded", ready);

function ready() {
    var mapClickScript = document.querySelector('.map');
    mapClickScript.addEventListener('click', clickScript);

    function clickScript() {
        if (!Element.prototype.remove) {
            Element.prototype.remove = function remove() {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }
        var mapPreloader = document.querySelector('.map-preloader');
        mapPreloader.style.display = "inline-block";
        var iframe = document.createElement('iframe');
        iframe.className = "iframe-map";
        iframe.addEventListener('load', function () {
            mapPreloader.remove();
        });
        
        // вставить вместо примера нужную ссылку на карту
        iframe.setAttribute('src', 'https://yandex.ru/map-widget/v1/?um=constructor%3A1f96b7b03cbb3dbdcd5ae77a0311cd6a62e1b693b0b1120307759d6df9cf8f14&amp;source=constructor');
        
        // одна из настроек карты
        iframe.frameborder = '0';

        mapClickScript.appendChild(iframe); //вставляем iframe с картой в блок обертки карты		
    }
}