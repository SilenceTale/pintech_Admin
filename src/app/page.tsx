'use client'
import loadable from '@lodable/component'
import WithUserContainer from './global/containers/WithUserContainer'

const MainContainer = loadable(() => import("./main/containers/MainContainer"))
const MainPage = () => {
  return <h1>메인페이지!!</h1>
}

export default MainPage
