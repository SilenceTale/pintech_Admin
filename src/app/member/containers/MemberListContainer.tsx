'use client'
import React from 'react'
import MemberList from '../components/MemberList'
import useMenuCode from '@/app/global/hooks/useMenuCode'

const MemberListContainer = () => {
  useMenuCode('member', 'configList')

  return <MemberList />
}

export default React.memo(MemberListContainer)
