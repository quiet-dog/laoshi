import http from "..";

export function getGroupListApi(emloyId) {
    return http.get(`/api/v1/class/employs`, {
        params: {
            committee: emloyId
        }
    });
}

export function getEmployListApi() {
    return http.get(`/api/v1/class/employs`);
}


export function getEmployInfoApi(id) {
    return http.get(`/api/v1/class/employs/${id}`);
}