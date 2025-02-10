import React from 'react'
import MemberListContainer from '../../containers/MemberListContainer'
import { MainTitle } from '@/app/global/components/StyledTitle'

const MemberPage = () => {
  return (
    <>
      <MainTitle>회원 목록</MainTitle>
      <MemberListContainer />
    </>
  )
}

export default React.memo(MemberPage)
