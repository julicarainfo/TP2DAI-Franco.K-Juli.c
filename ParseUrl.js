import url from 'url'

export function Parsear(a) {
    try {
        let parseObj = url.parse(a, true);
        return {
            "Host: ": parseObj.host,
            "PathName: ": parseObj.pathname,
            "Parametros: ": parseObj.query,
        }
    } catch (a) {
        if (a instanceof TypeError) {
            console.log('relative is a relative path');
        } else {
            throw a;
        }

    }
}