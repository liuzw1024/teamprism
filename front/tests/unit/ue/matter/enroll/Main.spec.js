import { mount } from "@vue/test-utils"
import EnrollVue from "@/ue/matter/enroll/Main.vue"
import sinon from "sinon"

describe("#ue", () => {
    describe("#matter", () => {
        describe("#enroll", () => {
            describe("#Main.vue", () => {
                it("获得活动进入规则", () => {
                    const spy = sinon.spy(EnrollVue.methods, "checkEntryRule")
                    const wrapper = mount(EnrollVue)
                    wrapper.find("#checkEntryRule").trigger("click")
                    sinon.assert.calledOnce(spy)
                })
                it("微信网页授权", () => {
                    const spy = sinon.spy(EnrollVue.methods, "wxOAuth2")
                    const wrapper = mount(EnrollVue)
                    wrapper.find("#wxOAuth2").trigger("click")
                    sinon.assert.calledOnce(spy)
                })
            })
        })
    })
})