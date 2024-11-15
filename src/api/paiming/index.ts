import http from "..";

export function getPai() {
    return http.get('/api/v1/class/pai-ones')
}

export function getPaiTwo() {
    return http.get('/api/v1/class/pai-twos')
}

export function getPaiThree() {
    return http.get('/api/v1/class/pai-threes')
}


export function getPaiFour() {
    return http.get('/api/v1/class/pai-fours')
}

export function updateOne(id: string, score: number) {
    return http.put('/api/v1/class/pai-ones/' + id, {
        score
    })
}

export function updateTwo(id: string, score: number) {
    return http.put('/api/v1/class/pai-twos/' + id, {
        score
    })
}

export function updateThree(id: string, score: number) {
    return http.put('/api/v1/class/pai-threes/' + id, {
        score
    })
}

export function updateFour(id: string, score: number) {
    return http.put('/api/v1/class/pai-fours/' + id, {
        score
    })
}