import http from "..";

export function getScoreApi(active: string) {
    return http.get("/api/v1/class/pk-scores", {
        params: {
            active_id: active
        }
    })
}

export function setScoreApi(data: {
    active_id: string,
    group_id: number,
    score: string
}) {
    return http.post("/api/v1/class/pk-scores", data)
}