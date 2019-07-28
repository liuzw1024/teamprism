import api from '@/apis/sns/wx/main'
import axios, { setupAccessToken } from '@/tms/apis/axios2';
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios);
mock.onGet('/ue/auth/token?site=validsiteid').reply(200, {
    code: 0,
    access_token: 'valid_access_token',
    expire_in: 7200
})
mock.onGet(/\/ue\/api\/sns\/wx\/appid\?site=.+/).reply(200, {
    code: 0,
    result: 'valid_appid',
})

describe("#apis", () => {
    describe("#sns", () => {
        describe("#wx", () => {
            describe("#main.js", () => {
                beforeAll(() => {
                    return setupAccessToken('validsiteid')
                })
                it("获得微信appid", () => {
                    return api.appid().then(rst => {
                        expect(rst).toBe('valid_appid')
                    })
                })
            })
        })
    })
})