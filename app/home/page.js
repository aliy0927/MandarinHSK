import Home from './home'
import { User } from '../class/user'
import { cookies } from 'next/headers'
export default async function HomeSever () {
  const cookieStore = cookies()
  const access_token = String(cookieStore.get('access_token'))//string
  const user = new User({
    access_token: access_token
  })
  await user.init()
  let initData = {
    user: user,
    isLogined: false,
    inviteData: {
      numOfPeople: 1,
      code: "2222"
    },
    todayLearningTime: 1.2,
    weekLearningTime: [2, 3.5, 3, 1, 2, 1],
    checkIndays: {
      checkIn: 10,
      nextLevel: 12
    }
  }

  const logined = await user.authenticate(user)

  if (logined) {//成功登录
    //获取连续签到天数

    //
    initData = {
      ...initData,
      isLogined: logined,
      // inviteData: inviteData,
      // checkIndays: checkIndays
    }
  } else {

  }

  return (
    <>
      <Home initData={JSON.stringify(initData)}></Home>
    </>
  )
}