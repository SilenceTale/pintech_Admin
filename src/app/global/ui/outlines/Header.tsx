'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { styled } from 'styled-components'
import { SlLogin, SlLogout } from 'react-icons/sl'
import { FaUserPlus, FaHome, FaSearch } from 'react-icons/fa'
import { MdContactPage } from 'react-icons/md'
import colors from '../../styles/colors'
import sizes from '../../styles/sizes'
import logo from '../../assets/images/logo.png'
import useUser from '../../hooks/useUser'

const { white, primary, light, dark } = colors
const { medium, big } = sizes

const StyledMenu = styled.nav`
  background: ${primary};

  .layout-width {
    display: flex;
    height: 50px;

    a {
      color: ${light};
      font-size: ${medium};
      padding: 0 40px;
      line-height: 50px;

      &:hover,
      &.on {
        background: ${dark};
      }
    }
  }
`

const Header = () => {
  const { userInfo, isLogin } = useUser()
  const email = userInfo?.email
  const name = userInfo?.name

  return (
    <StyledHeader>
      <div className="site-top">
        <div className="layout-width">
          <div className="left">
            <Link href="/">
              <FaHome />
            </Link>
          </div>
          <div className="right">
            {isLogin ? (
              <>
                {name}({email})님,
                <a href="/member/api/logout">
                  <SlLogout /> 로그아웃
                </a>
              </>
            ) : (
              <>
                <a href="/member/join">
                  <FaUserPlus /> 회원가입
                </a>
                <a href="/member/login">
                  <SlLogin /> 로그인
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      {/* site-top */}
      <div className="logo-search">
        <div className="layout-width">
          <Link href="/" className="logo">
            <Image src={logo} alt="로고" priority={true} />
          </Link>
        </div>
      </div>
      {/* logo-search */}
    </StyledHeader>
  )
}

export default React.memo(Header)
