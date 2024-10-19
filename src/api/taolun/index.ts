import http from "..";

type AddTaoLun = {
    title: string
    comment: string
    time: string
}
export function createTaoLun(data: AddTaoLun) {
    return http.post("/api/v1/class/tao-luns ", data)
}