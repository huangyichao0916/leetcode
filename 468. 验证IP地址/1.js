/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    let i4 = IP.split('.');
    let i6 = IP.split(':');
    if (i4.length === 4) {
        let isI4 = i4.every(item => /^0$|^[1-9]\d{0,2}$/.test(item) && item < 256);
        if (isI4) {
            return 'IPv4';
        }else{
            return 'Neither';
        }
    }else if (i6.length === 8) {
        let isI6 = i6.every(item => /^[a-f0-9]{1,4}$/i.test(item));
        if (isI6) {
            return 'IPv6';
        }else{
            return 'Neither';
        }
    }else{
        return 'Neither';
    }
};