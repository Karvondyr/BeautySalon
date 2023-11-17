document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById('phone-number');
    const maskOptions = {
        mask: "+{38}(000)000-00-00",
        lazy: false
    }
    const mask = new IMask(element, maskOptions);
});