import React from 'react'
import styled from 'styled-components'
import type { CommonType } from '@/app/global/types/styledType'
import { TableCols } from '@/app/global/components/Tables'
import { Input, Select } from '@/app/global/components/FormComponents'
import { BigButton } from '@/app/global/components/Buttons'
import { FaSearch } from 'react-icons/fa'

const StyledForm = styled.form<CommonType>``

const options = [
  { value: 'ALL', label: '통합검색' },
  { value: 'BID', label: '게시판 ID' },
  { value: 'NAME', label: '게시판 이름' },
]

const ConfigSearch = ({ form, onChange, onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit} autoComplete="off">
      <TableCols>
        <tbody>
          <tr>
            <th>키워드</th>
            <td>
              <Select
                name="sopt"
                options={options}
                selected={form?.sopt ?? 'ALL'}
                onChange={onChange}
              />
              <Input
                type="text"
                name="skey"
                value={form?.skey ?? ''}
                onChange={onChange}
              />
            </td>
          </tr>
        </tbody>
      </TableCols>
      <BigButton type="submit" color="primary">
        <FaSearch />
        검색하기
      </BigButton>
    </StyledForm>
  )
}

export default React.memo(ConfigSearch)
