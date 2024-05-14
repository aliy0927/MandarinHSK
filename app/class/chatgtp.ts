import { ChatgtpInterface } from "../interface";

export class Chatgtp{
    approve = 0
    content = ""
    conversationId = 0
    conversationsTableId = 0
    createTime = ""
    feedback = ""
    messages: [
        {
        content : "",
        role : ""
        }
    ]
    sender = ""
    serialNumber = 0
    type = ""
    updateTime = ""
    baseURL = 'http://124.222.243.156:10018'
    usedTokens = 0
    access_token = ""
    constructor(chatgtp: ChatgtpInterface) {
        for (let i in chatgtp) {
          chatgtp[i] ? (this[i] = chatgtp[i]) : null
        }
      }
    async post(
        path: string,
        body: BodyInit,
        options: { sendToken?: boolean} = {}) {
        const { sendToken = false } = options || {};
        let headers = {
            'Content-Type': 'application/json',
        };
        sendToken && Object.assign(headers, { token: this.access_token });

        try {
            const res = await fetch(this.baseURL + path, {
            method: 'POST',
            headers: headers,
            body: body,
            });

            if (res.status === 200) {
            const data = await res.json();
            if (data.code === 200) {
                return { ok: true, data: data.data };
            } else {
                return { ok: false, data: data };
            }
            } else {
            throw new Error(`HTTP error! status: ${res.status}`);
            }
        } catch (error) {
            return { ok: false, data: error };
        }
        }
        async put(
            path: string,
            body: BodyInit,
            options: { sendToken?: boolean; sendCcid?: boolean } = {}
        ) {
            const { sendToken = false, sendCcid = false} = options || {};
            let headers = {
              'Content-Type': 'application/json',
            };
            sendToken && Object.assign(headers, { token: this.access_token });
            sendCcid && Object.assign(headers, { uid: this.conversationsTableId })
        
            try {
              const res = await fetch(this.baseURL + path, {
                method: 'PUT',
                headers: headers,
                body: body,
              });
        
              if (res.status === 200) {
                const data = await res.json();
                if (data.code === 0) {
                  return { ok: true, data: data.data };
                } else {
                  return { ok: false, data: data };
                }
              } else {
                throw new Error(`HTTP error! status: ${res.status}`);
              }
            } catch (error) {
              return { ok: false, data: error };
            }
          }
        async get(
        path: string,
        options: { sendToken?: boolean} = {}
        ) {
        const { sendToken = false} = options || {} 
        let headers = {
            'Content-Type': 'application/json',
        }
        sendToken && Object.assign(headers, { token: this.access_token })
        const res = await fetch(this.baseURL + path, {
            method: 'GET',
            headers: headers,
        })
            .then((res) => {
            if (res.status == 200) {
                return res.json()
            } else {
                throw new Error(`HTTP error! status: ${res.status}`)
            }
            })
            .then((res) => {
            if (res.code == 200) return { ok: true, data: res.data }
            else {
                return { ok: false, data: res }
            }
            })
            .catch((error) => {
            return { ok: false, data: error }
            })
    
        return res
        }
}