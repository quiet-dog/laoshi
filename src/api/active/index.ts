import http from ".."

export type AddActive = {
    sign_id?: string
    is_start: boolean
    is_end?: boolean
    pk_id?: string
    tao_lun_id?: string
    paths?: string
    type?: string
}

export function createActive(data: AddActive) {
    return http.post("/api/v1/class/actives", data)
}

export function getActives(query) {
    return http.get("/api/v1/class/actives", {
        params: query
    })
}

export function getActivesById(id) {
    return http.get(`/api/v1/class/actives/${id}`)
}

export function editActive(id: string, data: AddActive) {
    return http.put(`/api/v1/class/actives/${id}`, data)
}

export function deleteActive(id: string) {
    return http.delete(`/api/v1/class/actives/${id}`)
}