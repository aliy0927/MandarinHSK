import { NextResponse } from 'next/server'

const authenticate = async (request) => {


  // let token = ""
  // const access_token = request.cookies.get('access_token')
  // if (access_token) token = access_token.value
  // const res = await fetch("https://chineselearning.hdu.edu.cn/back/find_student", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Authorization": "Bearer " + token,
  //     "Connection": "keep-alive"
  //   }
  // })

  return true
}
const gethostname = () => {
  const { hostname } = window.location
  return hostname
}
export async function middleware (request) {



  const isAuthenticated = await authenticate(request)

  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next()
  } else {
    const response = NextResponse.redirect(new URL('/login', request.url))
    response.cookies.set("redirectTo", request.nextUrl.pathname)

    return response
  }


}
export const config = {
  matcher: [
    // "/feedback",
    // "/study"

    '/((?!api|_next/static|_next/image|favicon.ico|home).*)',


  ],

}