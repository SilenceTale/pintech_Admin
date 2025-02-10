import { TableRows } from '@/app/global/components/Tables'
import React from 'react'
import styled from 'styled-components'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'

const StyledForm = styled.form`
  th:nth-of-type(1) {
    width: 40px;
  }

  th:nth-of-type(2) {
    width: 150px;
  }

  th:nth-of-type(3) {
    width: 250px;
  }

  th:nth-of-type(4) {
    width: 100px;
  }
`

const MemberList = () => {
  return (
    <>
      <StyledForm>
        <TableRows>
          <thead>
            <tr>
              <th>
                <MdCheckBoxOutlineBlank />
              </th>
              <th>회원ID</th>
              <th>회원명</th>
              <th>차단여부</th>
              <th></th>
            </tr>
          </thead>
          <tr>
            <td colSpan={5} className="no-data">
              회원정보가 없습니다.
            </td>
          </tr>
        </TableRows>
      </StyledForm>
    </>
  )
}

export default React.memo(MemberList)
