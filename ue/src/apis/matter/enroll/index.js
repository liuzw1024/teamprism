import axios from '@/tms/apis/axios2'
import Record from './record'
import Repos from './repos'

export { Record, Repos }

export default {
    /**
     * 获得记录活动
     * 
     * @param {String} appId 
     */
    getApp(appId) {
        return new Promise((resolve, reject) => {
            axios.get(`/api/ue/matter/enroll/get?app=${appId}`).then(rst => {
                resolve(rst.data.result)
            }).catch(err => {
                reject(err)
            })
        })
    },
    /**
     * 指定活动的进入规则以及当前用户的匹配情况
     * 
     * @param {String} appId 
     */
    checkEntryRule(appId) {
        return new Promise((resolve, reject) => {
            axios.get(`/api/ue/matter/enroll/entryRule?app=${appId}`).then(rst => {
                resolve(rst.data.result)
            }).catch(err => {
                reject(err)
            })
        })
    }
}