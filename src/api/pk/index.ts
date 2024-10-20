import http from ".."

type AddPk = {
    title: string
    count: number
    paths: string
}

export function createPk(data: AddPk) {
    return http.post("/api/v1/class/pks", data)
}