import http from "..";

export function getGroupListApi(emloyId) {
    return http.get(`/api/v1/class/employs`, {
        params: {
            committee: emloyId
        }
    });
}