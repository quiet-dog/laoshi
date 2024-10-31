import http from "..";

export function getClass() {
    return http.get("/api/v1/class/classes/tree")
}

export function createClass(data) {
    return http.post("/api/v1/class/classes", data)
}

export function deleteClass(id) {
    return http.delete(`/api/v1/class/classes/${id}`)
}


export function getClassList() {
    return http.get("/api/v1/class/classes")
}