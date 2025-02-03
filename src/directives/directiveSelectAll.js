export default {
    mounted(el) {
        console.log(el)
        const input = el.querySelector('input');
        input.addEventListener('focus', (e) => {
            if(input.value.length) {
                input.select();
            }
        });
}   
}