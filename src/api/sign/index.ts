import http from ".."

export type CreateSign = {
    title: string,
    is_auto: boolean,
    type: string
}
export function createSign(data: CreateSign) {
    return http.post("/api/v1/class/signs", data)
}