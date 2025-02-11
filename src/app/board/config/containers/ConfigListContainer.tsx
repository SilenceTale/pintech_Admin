'use client'

import React, {
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
  useEffect,
} from 'react'
import ConfigList from '../components/ConfigList'
import useMenuCode from '@/app/global/hooks/useMenuCode'
import ConfigSearch from '../components/ConfigSearch'

type SearchType = {
  sopt?: string
  skey?: string
}

const ConfigListContainer = () => {
  useMenuCode('board', 'configList')
  const [search, setSearch] = useState<SearchType>({})
  const [_search, _setSearch] = useState<SearchType>({})

  useEffect(() => {
    fetch('/board/api/config/list')
  }, [search])

  const onChange = useCallback((e) => {
    _setSearch[e.target.name] = e.target.value?.trim()
  }, [])

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    console.log('_search', _search.current)

    setSearch({ ..._search.current })
  }, [])

  return (
    <>
      <ConfigSearch
        form={_search.current}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <ConfigList />
    </>
  )
}

export default React.memo(ConfigListContainer)
