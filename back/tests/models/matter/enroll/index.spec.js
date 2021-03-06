describe("#models", () => {
    describe("#matter", () => {
        describe("#enroll", () => {
            describe("#index.js", () => {
                let modelEnl, testdata
                beforeAll(() => {
                    modelEnl = require('../../../models/matter/enroll')()
                    testdata = require('../../../cus/test.data')
                })
                test("byId()", async () => {
                    let appId = testdata.models.ue.matter.enroll.id
                    let oApp = await modelEnl.byId(appId)
                    expect(oApp.id).toBe(appId)
                })
                test("getEntryUrl()", async () => {
                    let id = testdata.models.ue.matter.enroll.id
                    let siteId = testdata.models.ue.matter.enroll.siteid

                    let url = await modelEnl.getEntryUrl(siteId, id, {"a" : "aa"})
                    expect(url).toEqual(expect.stringContaining('rest/site/fe/matter/enroll?site=' + siteId + '&app=' + id + '&a=aa'))
                })
                afterAll(done => {
                    modelEnl.end(done)
                })
            })
        })
    })
})