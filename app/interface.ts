export interface UserInterface {
  avatar?: string
  country?: string
  createTime?: string
  email?: string
  inviteCode?: string
  languageLevel?: string
  lastActivity?: string
  remainPaper?: number
  school?: string
  token?: number
  updateTime?: string
  userId?: number
  username: string
  access_token?: string
}

export interface ChatgtpInterface{
  approve?: number
  content?: string
  conversationId?: number
  conversationsTableId: 0,
  createTime?: string,
  feedback?: string,
  messages: [
    {
      content?: string,
      role?: string
    }
  ],
  sender?: string,
  serialNumber?: number
  type?: string,
  updateTime?: string,
  usedTokens?: number
  access_token?: string
}