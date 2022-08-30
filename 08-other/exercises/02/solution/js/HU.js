const HU = {
    date(date) {
        return new Intl.DateTimeFormat('hu-HU').format(date);
    },

    currency(number) {
        return new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF'
        }).format(number);
    },

    list(array) {
        for (let i = 0; i < array.length; i++) {
           let tempArray = array[o] + ', '+ array[1] + ' és ' + array[2];
        },
        return tempArray;
    }
}


export default HU;
